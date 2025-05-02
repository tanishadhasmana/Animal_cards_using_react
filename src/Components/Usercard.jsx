import React from 'react';
import './Usercard.css';

const Usercard = (props) => {
  return (
    <>
      <div className="component1">
        <img  id='img1' src={props.image} alt="cat"/>
        <h3 id='head1' >{props.name}</h3>

      </div>
      <button id='btn' type="button" onClick={props.onClick} >Watch Next Animal</button>
    </>
  )
}

export default Usercard
