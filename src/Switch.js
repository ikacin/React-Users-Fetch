import React from 'react';


const Switch  = (props) => {
    return (
        <>
        <div className={"switch-container"}>
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
            >
                <span className={`react-switch-button`}>{props.selectIcon}</span>
            </label>
        </div>
        </>
    );
};

export default Switch;