import React from 'react';
import ReactTooltip from 'react-tooltip'

function AddHealth(props) {

    //<div className="removestatistic btn btn-danger" onClick={() => { props.stat(props.name, 2, 1) }}>-</div>

    return (
        <div className="col-12 addstat">
            <p>{props.name}: {props.value}</p>
            <div className="stats col-4">
                <div className="addstatistic btn btn-success" data-tip="Add +1 to health" onClick={() => { props.stat(props.name, 1, 1) }}>+</div>

                <div className="addstatistic btn btn-primary" data-tip="Add +10 to health" onClick={() => { props.stat(props.name, 1, 10) }}><ReactTooltip />+</div>
            </div>
        </div>
    )
}

export default AddHealth;