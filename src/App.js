/* eslint-disable */
import React from "react";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: '',
      taskArr: ["1", "2"],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      taskArr: this.state.taskArr.concat(this.state.task),
      task: "",
    });
  };

  render() {
    const { taskArr, task} = this.state;
    return (
      <div>
        <form>
          <input type="text" id="taskInput" onChange={this.handleChange} value={task}/>
          <button onClick={this.onSubmitTask}>
            Submit
          </button>
        </form>
        <Overview tasks={taskArr} />
      </div>
    );
  }
}

export default App;
