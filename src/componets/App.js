import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRemainder } from '../actions/index';

class App extends Component {

      constructor(props) {
            super(props)
            this.state = {
                  text: ''
            }

            this.handleChange = this.handleChange.bind(this);
            this.addRemainder = this.addRemainder.bind(this);
      }

      addRemainder() {
           this.props.addRemainder(this.state.text);
      }



      handleChange(event) {
            this.setState({ text: event.target.value });
      }


      render() {
            return (
                  <div className="App">
                        <div className="title">
                              Classical Remainder
                        </div>
                        <div className="form-inline">
                              <div className="form-group">
                                    <input className="form-control"
                                          placeholder="List of Remainder...."
                                          onChange={this.handleChange} />
                                    <button type="button"
                                          className="btn btn-success"
                                          onClick={this.addRemainder}
                                    > Add Remainder </button>
                              </div>
                        </div>
                  </div>
            )
      }
}

function mapDispatchToProps(dispatch) {
      return bindActionCreators({ addRemainder }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
