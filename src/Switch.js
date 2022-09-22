import React from 'react';


const Switch = (props) => {
    return (
        <>
            <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
                onClick={props.mode}
                onChange={props.theme}
            ><i className="bi bi-moon-fill"></i>
                <span className={`react-switch-button`}>{props.selectIcon}</span>
            </label>
        </>
    );
};

export default Switch;