import React, {ChangeEvent} from "react";
import {EmptyProps, EmptyState} from "../types";
import axios from "axios";

interface State {
  Name: string;
  Description: string;
  IsCompleted: boolean;
}

const DefaultState = {Name: '', Description: '', IsCompleted: false};

export default class CreateToDoPage extends React.Component<EmptyProps, State> {
  state = DefaultState;

  onSubmit = () => {
    const submissionState = {...this.state};
    this.setState(DefaultState);

    axios.post('/api/todo/create', submissionState);
  }

  onChange = (key: "Name"|"Description", event: {target: {value: string}}) => {
    const state: State = this.state;

    state[key] = event.target.value;
    this.setState(state)
  }

  render() {
    const {Name, Description} = this.state;

    return (
      <div>
        <input type="text" value={Name} placeholder="Name" onChange={(event) => this.onChange("Name", event)}/>
        <input type="text" value={Description} placeholder="Description" onChange={(event) => this.onChange("Description", event)}/>

        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}