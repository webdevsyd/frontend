import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import AddCounter from './AddCounter';
import ListCounter from './ListCounter';
import TotalCounter from './TotalCounter';
import {
  getCounters, postCounter, postCounterIncrement,
  postCounterDecrement, deleteCounter,
} from './../services/counters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [],
      total: 0,
      input: '',
    };
  }
  componentDidMount() {
    this.fetchAllCounters();
  }
  fetchAllCounters() {
    getCounters()
      .then((response) => {
        this.setState({
          counters: response.data,
        }, () => {
          this.setState({
            total: this.handleCounterTotal(this.state.counters),
          });
        });
      })
      .catch((error) => {
        return error;
      });
  }
  handleAddRecordInputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }
  handleAddRecordFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.input) {
      const data = {
        title: this.state.input,
      };
      postCounter(data)
        .then((response) => {
          this.setState({
            input: '',
            counters: response.data,
          }, () => {
            this.setState({
              total: this.handleCounterTotal(this.state.counters),
            });
          });
        });
    }
  }
  handleCounterAction = (id, type) => {
    if (type === 'increment') {
      postCounterIncrement({ id })
        .then((response) => {
          this.setState({
            counters: response.data,
          }, () => {
            this.setState({
              total: this.handleCounterTotal(this.state.counters),
            });
          });
        });
    } else if (type === 'decrement') {
      postCounterDecrement({ id })
        .then((response) => {
          this.setState({
            counters: response.data,
          }, () => {
            this.setState({
              total: this.handleCounterTotal(this.state.counters),
            });
          });
        });
    }
  }
  handleDeleteCounter = (id) => {
    deleteCounter({ id })
      .then((response) => {
        this.setState({
          counters: response.data,
        }, () => {
          this.setState({
            total: this.handleCounterTotal(this.state.counters),
          });
        });
      });
  }
  handleCounterTotal = (data) => {
    const items = data;
    const total = items.reduce((a, b) => {
      return a + b.count;
    }, 0);
    return total;
  }
  render() {
    return (
      <div className="main-wrapper">
        <Row>
          <Col span={12} offset={6}>
            <Card title="Counter App">
              <AddCounter
                onAddRecordInputChange={this.handleAddRecordInputChange}
                onAddRecordFormSubmit={this.handleAddRecordFormSubmit}
                input={this.state.input}
              />
              <ListCounter
                counters={this.state.counters}
                onCounterAction={this.handleCounterAction}
                onDeleteCounter={this.handleDeleteCounter}
              />
              <TotalCounter
                total={this.state.total}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
