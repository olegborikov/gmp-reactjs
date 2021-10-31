import {Component} from "react";
import {Button, Col, Row} from "antd";

class Counter extends Component {
  state = {
    counter: 0
  }

  render() {
    return (
      <div>
        <Row>
          <Col offset={4}>
            {this.state.counter}
          </Col>
        </Row>
        <Row>
          <Button onClick={this.decrement}>-</Button>
          <Button onClick={this.increment}>+</Button>
        </Row>
      </div>
    )
  }

  increment = () => this.setState({
    counter: this.state.counter + 1
  })

  decrement = () => this.setState({
    counter: this.state.counter - 1
  })
}

export default Counter;
