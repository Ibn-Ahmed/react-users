import React, { Component } from 'react'
import './UsersForm.css'
export default class UsersForm extends Component {
    state = {
        name : "",
         email: "",
         gen : ""
     }
     onChange = e =>{
         this.setState({[e.target.name]:e.target.value})
     }
    
     submitForm = (e)=>{
         e.preventDefault();
        // console.log(this.state.name,this.state.email,this.state.gen)
        this.props.user([this.state])
         this.setState({
             name:"",
             email:"",
             gen:""
         })
 
     }
  render() {
    return (

      <div className='wrapper'>
         <form onSubmit={this.submitForm}>
    <div className="mb-3">
      <label className="form-label">Name</label>
      <input type="name" className="form-control" name='name'  onChange={this.onChange} value={this.state.name}/>
      
    </div>
    <div className="mb-3">
      <label className="form-label">Email</label>
      <input type="text" className="form-control" name='email' value={this.state.email} onChange={this.onChange}/>
      
    </div>
    <div className="mb-3">
      <label className="form-label">Gen</label>
      <input type="text" className="form-control" name='gen' value={this.state.gen} onChange={this.onChange} />
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
      </div>
    )
  }
}
