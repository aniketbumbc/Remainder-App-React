import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRemainder, deleteRemainder,removeAll } from '../actions/index';
import moment from 'moment';



class App extends Component {

      constructor(props) {
            super(props)
            this.state = {
                  text: '',
                  dueDate: ''
            }

            this.handleChange = this.handleChange.bind(this);
            this.addRemainder = this.addRemainder.bind(this);
            this.deleteRemainder = this.deleteRemainder.bind(this);
            this.getPickerValue = this.getPickerValue.bind(this);
      }

      addRemainder() {
            debugger;
            this.props.addRemainder(this.state.text, this.state.dueDate);
            this.refs.remainderValue.value = ' ';
            this.refs.dateValue.value = null;            
      }

      deleteRemainder(id) {
            this.props.deleteRemainder(id);

      }
      renderRemainders() {
            const { remainders } = this.props;
            return (
                  <ul className="list-group col-sm-4">
                        {
                              remainders.map(rem => {
                                    return (
                                          <li key={rem.id} className="list-group-item">
                                                <div className="list-item">
                                                      <div>{rem.text} </div>
                                                       <div><em> {moment(new Date (rem.dueDate)).fromNow()} </em></div>                   
                                                </div>
                                                <div onClick={() => this.deleteRemainder(rem.id)}

                                                      className="list-item delete-button">
                                                      &#x2715;
                                                </div>

                                          </li>
                                    )
                              })
                        }

                  </ul>
            )
      }



      handleChange(event) {
            this.setState({ text: event.target.value });
          
      }

      getPickerValue = (event) => {
            this.setState({ dueDate:event.target.value});
      }

      render() {

            return (
                  <div className="App">
                        <div className="title">
                              Classical Remainder
                        </div>
                        <div className="form-inline remainder-form">
                              <div className="form-group">
                                    <input className="form-control"
                                          placeholder="List of Remainder...."
                                          onChange={this.handleChange} ref="remainderValue" />
                                          <input type="date" className="form-control" ref="dateValue"
                                          id="birthday" onChange={this.getPickerValue}/>                                   
                              </div>
                              <button type="button"
                                    className="btn btn-success"
                                    onClick={this.addRemainder}
                              > Add Remainder </button>
                        </div>
                        {this.renderRemainders()}
                        <br/>
                        <div className="btn btn-danger"
                        onClick={()=> this.props.removeAll()}
                        >
                              Remove All
                        </div>
                  </div>
            )
      }
}

// pass action to reducers with dispatch
function mapDispatchToProps(dispatch) {

      return bindActionCreators({ addRemainder, deleteRemainder,removeAll }, dispatch);


}

function mapStateToProps(state) {
      return {
            remainders: state
      }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
