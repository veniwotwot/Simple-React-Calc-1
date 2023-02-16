
import "./OperatorInput.css";
import React from 'react';

const OperatorInput = ({ id_input }) => {
    return (
      <input type="text" class = "operator-input" id = {id_input} maxLength="1"></input>  
    );
};

export default OperatorInput;

//<Textfit className = "operatorInput" id = {id_input} mode = "single" max = {72}>{value}</Textfit>