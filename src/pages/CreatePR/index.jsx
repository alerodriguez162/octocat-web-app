import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
// import { useSnackbar } from "react-simple-snackbar";
import { compareBranches, createPR, getBranches, mergeBranches } from "../../api";
import Container from "../../components/Container";
import Divider from "../../components/Divider";
import Loading from "../../components/Loading";
import Select from "../../components/Select";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useRequest } from "../../hooks/useRequest";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const snackbarWarning = {
  position: "bottom-center",
  style: {
    backgroundColor: "red",
    color: "white",
    fontSize: "20px",
    textAlign: "center",
  },
};

const snackbarSuccess = {
  position: "bottom-center",
  style: {
    backgroundColor: "green",
    color: "white",
    fontSize: "20px",
    textAlign: "center",
  },
};

const CreatePR = () => {
  let params = useParams();

  // const [openSnackbarWarning] = useSnackbar(snackbarWarning);
  // const [openSnackbarSuccess] = useSnackbar(snackbarSuccess);

  const { repositoryId } = params;
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useLocalStorage("user", "");
  const { data, loading, error } = useRequest(getBranches, `${user}/${repositoryId}`);

  const [compare, setCompare] = useState({});

  const [compareRes, setCompareRes] = useState();

  const [compareLoading, setcompareLoading] = useState(false);

  const [form, setForm] = useState({ title: "", description: "" });

  const compareBranchesHandler = async () => {
    setcompareLoading(true);
    try {
      const res = await compareBranches(`${user}/${repositoryId}`, compare);
      setCompareRes(res.files);
    } catch (error) {
    } finally {
      setcompareLoading(false);
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setCompare({
      ...compare,
      [name]: value,
    });
  };

  useEffect(() => {
    if (compare && compare.base && compare.compare) compareBranchesHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compare]);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onChangeForm = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const createPull = async () => {
    const finalForm = { ...form, ...compare, user };
    closeModal();
    try {
      const res = await createPR(`${user}/${repositoryId}`, finalForm);
      // if (res.status) openSnackbarSuccess("Pull request created correctly");
    } catch (error) {
      // openSnackbarWarning(error.message);
    }
  };

  const mergePull = async () => {
    try {
      const res = await mergeBranches(`${user}/${repositoryId}`, compare);
      // if (res.status) openSnackbarSuccess("Branches merged correctly");
    } catch (error) {
      // openSnackbarWarning(error.message);
    }
  };

  return (
    <>
      <Container>
        <h1>Create Pr</h1>
        {error && <p>{error.message}</p>}
        {!loading && data.branches && !data.branches.length && <p>The repository has no branches</p>}

        {data && (
          <div className="inLine">
            <Select data={data.branches} onChange={onChange} name="base" />
            <Select data={data.branches} onChange={onChange} name="compare" />
          </div>
        )}

        {compareRes && compareRes.length ? (
          <div className="center">
            <button className="btn-default" onClick={openModal}>
              Open Pull Request
              <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons.png" alt="open pr" />
            </button>
            <button className="btn-default ml-3 " onClick={mergePull}>
              Merge Branches
              <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons.png" alt="merge branches" />
            </button>
          </div>
        ) : (
          <></>
        )}
        {(loading || compareLoading) && <Loading />}

        {(!loading || !compareLoading) && compareRes && !compareRes.length && <p>There isn’t anything to compare.</p>}

        {(!loading || !compareLoading) &&
          compareRes &&
          compareRes.map((file) => {
            return (
              <div key={file.sha}>
                <h2>Files modified</h2>
                <div key={file.sha} className="mb-3 card_commitDetails">
                  <div className="inLine">
                    <h4>SHA: {file.sha}</h4>
                    <span>{file.status}</span>
                  </div>
                  <p>File Name: {file.filename}</p>
                  <div className="inLine">
                    <span>Modifications total: {file.changes}</span>
                    <span>Additions: {file.additions}</span>
                    <span>Deletions: {file.deletions}</span>
                  </div>
                </div>
                <Divider />
              </div>
            );
          })}

        <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} shouldCloseOnEsc={false} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
          <h2 className="d-flex">
            Create Pull Request
            <button className="btn-close" onClick={closeModal}>
              <img src="https://freepikpsd.com/file/2019/10/letra-x-png-2-1-Transparent-Images.png" width="15px" alt="See Details" />
            </button>
          </h2>
          <div id="msform">
            <input required id="title" placeholder="Title" onChange={onChangeForm} name="title" />
            <textarea required id="description" placeholder="Description..." name="description" onChange={onChangeForm} />

            <div className="btn-group">
              <button onClick={closeModal} className="btn-default">
                Cancel
              </button>
              <button onClick={createPull} className="btn-default">
                Create
              </button>
            </div>
          </div>
        </Modal>
      </Container>
    </>
  );
};

export default CreatePR;
