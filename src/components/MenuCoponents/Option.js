import React from 'react';

function Option (props){

    let description = props.text ? props.text :  `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Sed unde.`;

    return(
        <div className="option">
            <div className="option-image active">
                <div className="option-icon-section">
                    <img src={props.image} />
                    <h3>{props.name}</h3>
                </div>
            </div>
            <div className="option-description">
                {description}
            </div>
        </div>
    );
}

export default Option;