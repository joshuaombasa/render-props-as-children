import React from "react";
import Toggle from "./Toggle";
export default function Header() {
    return (
        <Toggle
            render={({ on, toggle }) => (
                <div
                    style={{ backgroundColor: on ? "red" : "green" }}
                    className="header--container"
                    onClick={toggle}
                >
                </div>
            )}
        />
    )
}