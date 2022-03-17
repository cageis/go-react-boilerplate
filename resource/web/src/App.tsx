import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import CreateToDoPage from "./Pages/CreateToDoPage";
import ListToDoPage from "./Pages/ListToDoPage";
import "../assets/app.scss";

interface Props {}
interface State {}

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <nav>
          <Link to="/" key="List Items">List</Link>
          <Link to="/create" key="Create">Create</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ListToDoPage/>}/>
          <Route path="/create" element={<CreateToDoPage/>}/>
        </Routes>
      </div>
    )
  }
}