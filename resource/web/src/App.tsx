import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import CreateToDoPage from "./Pages/CreateToDoPage";
import ListToDoPage from "./Pages/ListToDoPage";
import "../assets/app.scss";
import {EmptyProps, EmptyState} from "./types";


const navLinkElem = (to: string, text: string) => {
  const active = (classNameMeta: {isActive: boolean}) => classNameMeta.isActive ? "nav-current" : "";

  return (
    <NavLink to={to} key={text} className={active}>
      {text}
    </NavLink>
  );
}

export default class App extends React.Component<EmptyProps, EmptyState> {
  render() {
    return (
      <div>
        <nav>
          {navLinkElem("/", "List")}
          {navLinkElem("/create", "Create")}
        </nav>
        <Routes>
          <Route path="/" element={<ListToDoPage/>}/>
          <Route path="/create" element={<CreateToDoPage/>}/>
        </Routes>
      </div>
    )
  }
}