import React from 'react';

function Onestat(props){

    return(
        <div className="col-7 onestat">
            <p>{props.name}: {props.value}</p>
        </div>
    )
}

export default Onestat;