import React from 'react';

function Onestat(props) {

    return (
        <div className="col-10 onestat">
            <p>{props.name}: {props.value}</p>
        </div>
    )
}

export default Onestat;