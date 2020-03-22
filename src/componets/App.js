import React,{Component} from 'react';

class App extends Component {
      render() {
            return (
                  <div className="App">
                        <div className="title">
                              Classical Remainder
                        </div>
                        <div className="form-inline">
                              <div className="form-group">
                                    <input className="form-control"
                                          placeholder="List of Remainder...." />
                                    <button type="button"
                                          className="btn btn-success"> Add Remainder </button>
                              </div>
                        </div>
                  </div>
            )
      }
}

export default App;
