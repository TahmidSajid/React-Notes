import React from 'react';
import PropTypes from "prop-types";


const User = (props) => {
  return (
    <>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.className}</h1>
    <h1>{props.student}</h1>
    </>
  )
}


User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    className: PropTypes.number,
    student: PropTypes.bool,
}

export default User