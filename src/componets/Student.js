import React, { Component } from 'react'


export class Student extends Component {

      constructor(props){
            super(props)

            this.state ={
                  name:'',
                  rollNumber:''
            }
            this.numberHandleChange = this.numberHandleChange.bind(this);
            this.nameHandleChange = this.nameHandleChange.bind(this);

      }

      numberHandleChange(event){
            this.setState({ rollNumber: event.target.value });
      }

      nameHandleChange(event){
            this.setState({ name: event.target.value });
      }


      
     

      render() {
            return (
                  <div>
                        <h5> Studdent Data </h5>
                        <div className="form-inline">
                              <div className="form-group">
                                    <input className="form-control"
                                          placeholder="Student Name...."
                                          onChange={this.nameHandleChange} />
                                          <input className="form-control"
                                          placeholder="Student Number...."
                                          onChange={this.numberHandleChange} />

                                    <button type="button"
                                          className="btn btn-success"
                                          onClick={this.Student}
                                    > Add Student </button>
                              </div>
                        </div>



                  </div>
            )
      }
}

export default Student
