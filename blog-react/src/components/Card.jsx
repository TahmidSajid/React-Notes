import React from "react";



const Card = ({heading,detail,role,device}) => {
    return(
        <>
            <div className="card">
                <h5>{heading}</h5>
                <p>{detail}</p>
                <p>{role}</p>
                <p>{device}</p>
            </div>
        </>
    )
}


export default Card
