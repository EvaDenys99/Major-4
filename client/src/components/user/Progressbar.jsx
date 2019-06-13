import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
const socket = require(`socket.io-client`)(
  `https://pushlines-obv.herokuapp.com`
);
class ProgressbarBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };

    socket.on(`start`, function(msg) {
      startProcess();
    });
    socket.on(`reset`, function(msg) {
      resetProcess();
    });

    const startProcess = () => {
      if (this.state.percentage === 100) {
        this.setState({ percentage: 0 });
      } else {
        this.setState({
          percentage:
            this.state.percentage + 100 / this.props.voorstelling.aantalAkts
        });
      }
    };

    const resetProcess = () => {
      this.setState({
        percentage:
          this.state.percentage - 100 / this.props.voorstelling.aantalAkts
      });
    };
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
      </div>
    );
  }
}

export default observer(ProgressbarBase);
