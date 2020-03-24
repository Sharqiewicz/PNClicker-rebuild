import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip'

function AddHealth(props) {

    const [count, setCount] = useState(0);
    //<div className="removestatistic btn btn-danger" onClick={() => { props.stat(props.name, 2, 1) }}>-</div>
    const setHealthCount = (e) => {
        setCount(Number(e.target.value));
    }
    return (
        <div className="col-12 addstat">
            <p>{props.name}: {props.value}</p>
            <div className="stats">
                <div className="addstatistic btn btn-success" data-tip="Add +1 to health" onClick={() => { props.stat(props.name, 1, 1) }}>+</div>
                <input type="number" placeholder="Number" id="hh" onChange={setHealthCount} />
                <div className="addstatistic btn btn-primary" data-tip="Add +10 to health" onClick={() => { props.stat(props.name, 1, count) }}><ReactTooltip />+</div>
            </div>
        </div >
    )
}

export default AddHealth;