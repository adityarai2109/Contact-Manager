import React, { Component } from 'react'
import {Consumer} from '../../context'
// import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'

export default class EditContact extends Component {

  state = {
    name: '',
    phone: '',
    email: '',
    errors: {}
  };

  async componentDidMount(){
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    const contact = res.data;

    this.setState({
      name : contact.name,
      phone  :contact.phone,
      email : contact.phone
    })

  };

  onSubmit = async (dispatch,e) => {
    e.preventDefault();
    const { name,phone,email } = this.state;

    if(name === ""){
      this.setState({errors : { name : "Name is required"}});
      return;
    }
    if(phone === ""){
      this.setState({errors : { phone : "Phone number is required"}});
      return;
    }
    if(email === ""){
      this.setState({errors : { email : "Email is required"}});
      return;
    }

    const updateContact = {
      name,
      email,
      phone
    }

    const { id } = this.props.match.params;
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updateContact);

    dispatch({type:'UPDATE_CONTACT',payload: res.data});
    
    //Clear state
    this.setState({
      name:'',
      phone:'',
      email:'',
      errors: {}
    });

    this.props.history.push("/")      //redirects to homepage
  }

  onChange = e => this.setState({[e.target.name]:e.target.value})

  render() {
    const {name,phone,email,errors} = this.state;
    
    return(
      
      <Consumer>
        {value => {          
          const { dispatch } = value;
          return(
            <div className="card mb-3">
              <div className="card-header bg-primary text-white">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                    <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Enter name ..."
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextInputGroup
                      label="Phone number"
                      name="phone"
                      type="phone"
                      placeholder="Enter phone number ..."
                      value={phone}
                      onChange={this.onChange}
                      error={errors.phone}
                    />
                    <TextInputGroup
                      label="Email"
                      name="email"
                      placeholder="Enter email ..."
                      value={email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                  <input 
                    type="submit" 
                    value="Update Contact" 
                    className="btn btn-block btn-primary" 
                  />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
