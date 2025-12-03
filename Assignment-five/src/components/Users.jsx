import React from 'react'

import User from './User';

const Users = (props) => {
  return (
    <section className="users">
      {props.users.map((user) => (
        <User key={user.id} {...user} onHandleDeleteUser={props.onHandleDeleteUser}/>
      ))}
    </section>
  );
};

export default Users