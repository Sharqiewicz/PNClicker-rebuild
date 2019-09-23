import React from 'react';

function Option (props){

    return(
        <div className="option" onClick={()=>{props.history.push(`/${props.name}`)}}>
            <div className="option-image active">
                <div className="option-icon-section">
                    <img src={props.image} />
                    <h3>{props.name}</h3>
                </div>
            </div>
            <div className="option-description">
                {props.text}
            </div>
        </div>
    );
}

export default Option;