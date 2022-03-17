import React from "react";
import {EmptyProps, ToDoItem} from "../types";
import axios from "axios";


interface State {
  items: Array<ToDoItem>
}

interface ListToDoResponse {
  data: Array<ToDoItem>
}

export default class ListToDoPage extends React.Component<EmptyProps, State> {
  state: State = {items: []};
  componentWillMount() {
    axios.defaults.headers.common = {"Accept": "application/json"};
    axios.get("/api/todo/list").then((response: ListToDoResponse) => {
      this.setState({items: response.data})
    })
  }

  onDelete = (name: string, event: any) => {

  }

  render() {
    const {items} = this.state;
    return (
      <div>
        <h1>Items</h1>
        {items.map((item: ToDoItem) => (
          <div key={item.Name}>
            <button onClick={(event) => this.onDelete(item.Name, event)}>Delete</button>
            {item.Name} - {item.Description}
          </div>

        ))}
      </div>
    );
  }
}