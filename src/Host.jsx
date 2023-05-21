import React from "react";
import Toggle from "./Toggle";

export default function Host() {
    return (
        <Toggle render={({ on, toggle }) => (
            <div
                style={{ backgroundColor: on ? "yellow" : "grey" }}
                className="host--container"
                onClick={toggle}
            >
            </div>
        )}
        />
    )
}