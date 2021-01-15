import React from 'react'

export default function About (props) {
  return (
    <div>
      <h1 className="display-5">About Contact Manager</h1>
      <p className="lead mt-5"><span className="text-dark">Aditya's</span> basic project for learning <span className="text-primary"><a href='https://reactjs.org/' className='react-link' target="_blank" rel='noreferrer' >React</a></span>.</p>
      <p className="lead">Simple contact managing application.</p>
    </div>
  )
}
/*
 with id = {props.match.params.id}
 */