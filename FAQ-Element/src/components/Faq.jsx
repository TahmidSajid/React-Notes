import React, { useState } from "react";

const Faq = ({id,title,desc}) => {
    const [toggle, setToggle]   = useState(false);
    console.log(toggle)
  return (
    <>
      <div className="faq">
        <div>
          <h1>{title}</h1>
          <button onClick={() => { setToggle(!toggle) } }>{toggle ? '-' : "+"}</button>
        </div>
          {toggle && <p>{desc}</p>}
      </div>
    </>
  );
};

export default Faq;
