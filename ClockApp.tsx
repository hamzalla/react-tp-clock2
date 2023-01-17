import React=require("react");

export default class Clock extends React.Component {
  timerID;
  state;
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    console.log(this.state.date.toLocaleTimeString());
    return null;
  }
}
