import React, {ChangeEvent, FormEvent} from "react";
import {EmptyProps, EmptyState, ToDoItem} from "../types";
import axios from "axios";

interface State {
  todo: ToDoItem,
  dirty: string[]
}

const dirty: string[] = [];
const DefaultState = {dirty, todo: {Name: '', Description: '', IsCompleted: false}};

export default class CreateToDoPage extends React.Component<EmptyProps, State> {
  state = {...DefaultState};

  onSubmit = () => {
    const submissionState = {...this.state.todo};
    this.setState({...DefaultState});

    const {todo, dirty} = this.state;
    todo.Name = "";
    todo.Description = "";

    this.setState({todo, dirty: []})

    axios.post('/api/todo', submissionState);
  }

  onChange = (key: "Name"|"Description", event: {target: {value: string}}) => {
    const todo: ToDoItem = this.state.todo;

    todo[key] = event.target.value;
    this.setState({todo})
  }

  textInput = (stateKey: "Name"|"Description") => {
    const stateValue = this.state.todo[stateKey];
    const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => this.onChange(stateKey, event)
    let dirty = this.state.dirty;

    const onFocus = () => {
      dirty.push(stateKey);
      dirty = dirty.filter((v, i, a) => a.indexOf(v) === i);
      this.setState({dirty})
    };

    const getClassName = (): string => {
      if (dirty.indexOf(stateKey) !== -1) {
        return "dirty";
      }

      return "";
    }

    return (
      <input required={true} type="text" value={stateValue} placeholder={stateKey} onChange={onChangeEvent} onFocus={onFocus} className={getClassName()}/>
    );
  }

  render() {

    return (
      <form onSubmit={(event: FormEvent) => {
        event.preventDefault();
        this.onSubmit();
        return false;
      }}>
        {this.textInput("Name")}
        {this.textInput("Description")}

        <input type="submit" value="Submit" disabled={this.state.todo.Name.length === 0 || this.state.todo.Description.length === 0}/>
      </form>
    );
  }
}