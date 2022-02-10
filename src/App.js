import React from 'react';
class App extends React.Component{
  state ={
    salary:'',
    total_worked_days :'',
    total_working_days :'',
    result: ''
  }
  onSalaryChange = (event) => {
    this.setState({salary:event.target.value})
  }
  onTotal_worked_daysChange = (event) => {
    console.log(event)
    this.setState({total_worked_days:event.target.value})
    console.log(event)
  }
  onTotal_working_daysChange = (event) => {
    this.setState({total_working_days:event.target.value})
    console.log(event)
  }
  onResultChange = (event) =>{
    this.setState({result:event.target.value})
  }
  handleClick = () => {
    const RESULT =((this.state.salary/ this.state.total_working_days) * this.state.total_worked_days)
    // this.state(result);
    console.log(RESULT)
    this.setState({result:RESULT})
  };
  render(){
    return(
      <td>
      <label>Salary: </label>
      <input
                type='number'
                step="1"
                min='0'
                max=''
                value={this.state.salary}
                onChange= {(event) => this.onSalaryChange(event)}/>
                <br></br>
                <label>Total Working days: </label>
      <input
                type='number'
                step="1"
                min='0'
                max=''
                value={this.state.total_working_days}
                onChange= {(event) => this.onTotal_working_daysChange(event)}/>
                 <br></br>
                <label>Total Worked Days: </label>
      <input
                type='number'
                step="1"
                min='0'
                max=''
                value={this.state.total_worked_days}
                onChange= {(event) => this.onTotal_worked_daysChange(event)}/>
                <br></br>
                <button onClick={this.handleClick}>Calculate
                
                </button>
                <h2>Total Salary- {this.state.result}</h2>
    </td>
    )
  };
}
export default App;