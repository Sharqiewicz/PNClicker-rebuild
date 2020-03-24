import React from 'react';
import ReactTooltip from 'react-tooltip'

function AddHealth(props) {

    //<div className="removestatistic btn btn-danger" onClick={() => { props.stat(props.name, 2, 1) }}>-</div>
    let health_number = 1;
    const health_number_function = (e) => {
        health_number = Number(e.target.value);
    }
    return (
        <div className="col-12 addstat">
            <p>{props.name}: {props.value}</p>
            <div className="stats">
                <div className="addstatistic btn btn-success" data-tip="Add +1 to health" onClick={() => { props.stat(props.name, 1, 1) }}>+</div>
                <input type="number" placeholder="Number" id="hh" onChange={health_number_function} />
                <div className="addstatistic btn btn-primary" data-tip="Add +10 to health" onClick={() => { props.stat(props.name, 1, (health_number || 1)) }}><ReactTooltip />+</div>
            </div>
        </div >
    )
}

export default AddHealth;