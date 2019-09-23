import React from 'react';

function AddStat(props) {

    return (
        <div className="col-12 addstat">
            <p>{props.name}: {props.value}</p>
            <div className="stats col-4">
                <div className="addstatistic btn btn-success">+</div>
                <div className="removestatistic btn btn-danger">-</div>
            </div>
        </div>
    )
}

export default AddStat;