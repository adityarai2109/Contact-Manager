import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Consumer } from '../../context'
import axios from 'axios'


export default class contact extends Component {
    
    state = {
        showContactInfo : false
    };

    onDeleteClick = async (id,dispatch) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);                     
        dispatch({type: 'DELETE_CONTACT',payload:id});
    };

    //     onDeleteClick = async (id,dispatch) => {
    //     try {
    //         await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);              
    //         dispatch({type: 'DELETE_CONTACT',payload:id});
    //     } catch (e) {
    //         dispatch({type: 'DELETE_CONTACT',payload:id});       //calling dispatch anyway so that the elements with id>9 can be deleted
    //     }
    // };

    render() {
        const { id, name , phone , email } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                    {value => {
                        const { dispatch } = value;
                        return(
                            <div className="card mb-3 pb-0">
                                <h4 className="card-body">
                                    {name}{' '}
                                    <i 
                                        onClick={ () => 
                                            this.setState({showContactInfo : !this.state.showContactInfo})
                                        } 
                                        className="fas fa-sort-down"
                                        style={{cursor:'pointer'}}
                                    />
                                    <i 
                                        style={{float:"right", color:"red" , fontSize: "25px" , cursor:"pointer"}}
                                        class="fa fa-times"
                                        onClick= { () => 
                                            this.onDeleteClick(id , dispatch) 
                                        }
                                    />
                                    <Link to={`contact/edit/${id}`}>
                                        <i 
                                            style={{float:"right", color:"black" , fontSize: "24px",marginRight: "1rem" , cursor:"pointer"}}
                                            class="fa fa-pencil-alt"
                                        />
                                    </Link>
                                </h4>
                                {
                                    showContactInfo ? 
                                    (
                                        <ul className="list-group ml-4 mr-4 mb-4">
                                        <li className="list-group-item"><span>Phone number - </span>{phone}</li>
                                        <li className="list-group-item"><span>Email - </span>{email}</li>
                                        </ul>
                                    ) : null
                                }
                            </div>
                        )
                    }}
            </Consumer>
        )
    }
}

  