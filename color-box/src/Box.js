import React from "react";

function Box({
    id,
    handleRemove,
    width = 5,
    height = 5,
    backgroundColor = "lightgrey"
}) {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div 
                stytle={{
                    height: `${height}em`,
                    width: `${width}em`,
                    backgroundColor
                }}
            />
            <button onClick={remove}>Remove the box</button>
        </div>
    );
}

export default Box;