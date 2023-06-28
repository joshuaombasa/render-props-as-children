import React from "react";

export default function Toggle(props) {

    const [on, setOn] = React.useState(true)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
        <div className="toggle--container">
            {props.render({on: on, toggle: toggle})}
        </div>
    )
}