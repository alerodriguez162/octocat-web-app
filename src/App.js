import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ScrollToTop from "./utils/ScrollToTop";
import Branches from "./pages/Branches";
import CommitDetails from "./pages/CommitDetails";
import Commits from "./pages/Commits";
import CreatePR from "./pages/CreatePR";
import PullRequests from "./pages/PullRequests";
import Repositories from "./pages/Repositories";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Repositories/>} />
          <Route exact path={`/:repositoryId/pulls`} element={<PullRequests/>} />
          <Route exact path={`/:repositoryId/createpr`} element={<CreatePR/>} />
          <Route exact path={`/:repositoryId`} element={<Branches/>} />
          <Route exact path={`/:repositoryId/:branchId`} element={<Commits/>} />
          <Route exact path={`/:repositoryId/:branchId/:commitId`} element={<CommitDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
