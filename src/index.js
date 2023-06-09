import "normalize.css";
import React from "react";
import * as ReactDOM from 'react-dom/client';
import Modal from "react-modal";
import { BrowserRouter } from "react-router-dom";
// import SnackbarProvider from "react-simple-snackbar";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

Modal.setAppElement("#root");

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     // errorElement: <ErrorPage />,
//     children: [
//       {
//         path: ":repositoryId/pulls",
//         element: <PullRequests />,
//       },
//       {
//         path: ":repositoryId/createpr",
//         element: <CreatePR />,
//       },
//       {
//         path: ":repositoryId",
//         element: <Branches />,
//         loader: eventLoader,
//       },
//     ],
//   },
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

