import React from 'react';

export default function FormGroup(props) {
    return(
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            {props.children}
        </div> 
    )
}
