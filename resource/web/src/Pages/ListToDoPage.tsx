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
    this.refreshList();
  }

  refreshList = () => {
    axios.get("/api/todo").then((response: ListToDoResponse) => {
      this.setState({items: response.data})
    })
  }

  onDelete = (name: string, event: any) => {
    axios.delete('/api/todo', {data: {Name: name}}).then(this.refreshList)
  }

  render() {
    const {items} = this.state;
    return (
      <div>
        <h1>Items</h1>
        {items.length === 0 ? 'There are no todo items.' : items.map((item: ToDoItem) => (
          <div key={item.Name}>
            {item.Name} - {item.Description}
            <button onClick={(event) => this.onDelete(item.Name, event)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}