import React, { Component } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

class Progressbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };
    this.nextStep = this.nextStep.bind(this);
    this.reset = this.reset.bind(this);
  }
  nextStep() {
    if (this.state.percentage === 100) {
      this.setState({ percentage: (this.state.percentage = 0) });
    } else {
      this.setState({ percentage: this.state.percentage + 20 });
    }
  }
  reset() {
    this.setState({ percentage: (this.state.percentage = 0) });
  }
  render() {
    return (
      <div>
        <Progress
          percent={this.state.percentage}
          theme={{
            active: {
              symbol: this.state.percentage + `%`,
              color: `rgb(223, 105, 180)`
            }
          }}
        />
        <div>
          <button onClick={this.nextStep}>Next Step</button>
          <button onClick={this.reset}>reset</button>
        </div>
        <div onClick={() => this.setState({ percentage: 0 })}>Reset</div>
      </div>
    );
  }
}

export default Progressbar;
