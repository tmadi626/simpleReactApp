import React from "react";

function HelloWorld(props) {
    return (
        <header className="font-bold p-3" >
            {props.name}
        </header>
    )    
}

export default HelloWorld;