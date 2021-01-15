import React, { Component } from 'react'
import Contact from './contact.js'
import { Consumer } from '../../context'
 
export default class contacts extends Component {
    render() {
        return(
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return(
                        <React.Fragment>
                            <h1 className="list-heading mb-5 mt-5"><span className="text-dark">Contacts list </span></h1>
                            {
                                contacts.map(contact => (
                                    <Contact 
                                        key={contact.id} 
                                        contact={contact} 
                                    />
                                ))
                            }
                        </React.Fragment>
                    )
                }}
            </Consumer>
        );
    }
}
