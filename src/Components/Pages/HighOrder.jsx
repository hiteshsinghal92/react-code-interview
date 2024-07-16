import WithLogger from "../WithLogger";
import React from 'react';
const HighOrder = (props) => {
console.log("🚀 ~ HighOrder ~ props:", props)



    return (
        <h1>
            Hello
        </h1>
    )
}

export default WithLogger(HighOrder);