import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
const io = require(`socket.io-client`);
class ProgressbarBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };
    this.socket = io.connect(`:${this.props.port}`);

    this.socket.on(`start`, function(msg) {
      startProcess();
    });
    this.socket.on(`reset`, function(msg) {
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

observer(ProgressbarBase);

const Progressbar = ({ portStore }) => {
  const { port } = portStore;
  if (port) return <ProgressbarBase port={port} />;
  return <p>Loading</p>;
};

export default inject(`portStore`)(observer(Progressbar));
