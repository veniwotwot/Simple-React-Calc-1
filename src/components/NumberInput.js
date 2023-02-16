import "./NumberInput.css";
import React from 'react';

const NumberInput = ({ id_input }) => {
    return (
        <input type = "text" id = {id_input} class = "number-input" maxlength = "5"></input>
    );
};

export default NumberInput;


//<Textfit type="text" className = "numberInput" mode = "single" max = {72}>{value}</Textfit>