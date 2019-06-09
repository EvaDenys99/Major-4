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
        <Progress percent={this.state.percentage} />
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

// import React, { Component } from "react";
// //import "moment-duration-format";
// import { CircularProgressbar } from "react-circular-progressbar";
// // import Progressbar from "react-linear-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// class Progress extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       status: false,
//       break: false,
//       runningTime: 0,
//       startSession: 108,
//       startBreak: 300
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//   }

//   handleClick() {
//     this.setState(state => {
//       if (state.status) {
//         clearInterval(this.timer);
//       } else if (!state.status) {
//         this.timer = setInterval(() => {
//           if (this.state.runningTime >= 1) {
//             this.setState({ runningTime: this.state.runningTime + 1 });
//           } else if (this.state.runningTime < 1 && !this.state.break) {
//             this.setState({ runningTime: this.state.startBreak });
//             this.setState({ break: true });
//           } else if (this.state.runningTime <= 1 && this.state.break) {
//             this.handleReset();
//             clearInterval(this.timer);
//           }
//         }, 100);
//       } else if (this.state.runningTime <= 1 && this.state.break) {
//         this.handleReset();
//         clearInterval(this.timer);
//       }

//       return { status: !state.status };
//     });
//   }

//   handleReset() {
//     this.setState({
//       status: false,
//       break: false,
//       runningTime: 0,
//       startSession: 10800,
//       startBreak: 300
//     });
//     clearInterval(this.timer);
//   }

//   render() {
//     let baseTime = this.state.startSession;
//     let percentage = ((this.state.runningTime / baseTime) * 100).toFixed(0);

//     return (
//       <div>
//         <div style={{ width: `25%` }}>
//           <CircularProgressbar percentage={25} />
//         </div>
//         <div>
//           <button
//             className="btn btn-dark"
//             id="start_stop"
//             type="button"
//             onClick={this.handleClick}
//           >
//             {this.state.status ? `Stop` : `Start`}
//           </button>
//           <button
//             className="btn btn-dark"
//             id="reset"
//             type="button"
//             onClick={this.handleReset}
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
// export default Progress;
