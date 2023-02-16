import React, {useState} from 'react';
import Wrapper from './components/Wrapper';
import OperatorInput from './components/OperatorInput';
import NumberInput from './components/NumberInput';
import NumberOutput from './components/NumberOutput';
import Button from './components/Button';
import Textbox from './components/Textbox';


const App = () => {

  let [calc, setCalc] = useState({
    res: 'NaN'
  })

  
  var add = (a,b) => {
    return a + b;
  }
  var subtract = (a,b) => {
    return a - b;
  }
  var multiply = (a,b) => {
    return a * b;
  }
  var divide = (a,b) => {
    return a / b;
  }
 
  function equals(){
    let num1 = Number(document.getElementById('num-1').value);
    let num2 = Number(document.getElementById('num-2').value);
    let operation = document.getElementById('operation').value;
    console.log(`num1 is ${num1}, num2 is ${num2}, and operation is ${operation}`);

    let valid_num1 = !isNaN(num1);
    let valid_num2 = !isNaN(num2);

    if(valid_num1 && valid_num2){   //makes sure that both inputs are valid numbers
      if(operation === '+'){
        let result = add(num1,num2);
        console.log(result);

        let resultString = result.toString();
        if(resultString.length > 10){
          result = Number(resultString.substring(0,10));
        }
        setCalc({res: result});
      }
      else if (operation === '-'){
        let result = subtract(num1,num2);
        console.log(result);

        let resultString = result.toString();
        if(resultString.length > 10){
          result = Number(resultString.substring(0,10));
        }
        setCalc({res: result});
      }
      else if (operation === '*' || operation === 'x' || operation === 'X'){
        let result = multiply(num1, num2);
        console.log(result);

        let resultString = result.toString();
        if(resultString.length > 10){
          result = Number(resultString.substring(0,10));
        }
        setCalc({res: result});
      }
      else if(operation === '/'){
        let result = divide(num1,num2)
        console.log(result);

        let resultString = result.toString();
        if(resultString.length > 10){
          result = Number(resultString.substring(0,10));
        }
        setCalc({res: result});
      }
      else{
        console.log("invalid operation detected");
        setCalc({res: "Invalid Operation"});
      }
    }
    else {
      console.log("invalid num1 or num2 input detected");
      setCalc({res: "NaN"});
    }  
  }
  
  return (
    <Wrapper>
      <Textbox data = "This React Four-Function Calculator App Has Come To Life!"></Textbox>
      <NumberInput id_input = "num-1"></NumberInput>
      <OperatorInput id_input = "operation"></OperatorInput>
      <NumberInput id_input = "num-2"></NumberInput>
      <Button className = 'equals' value = '=' onClick = {equals}></Button>
      <NumberOutput id_input = "result-num" value = {calc.res}></NumberOutput>
      <Textbox data = "At this moment, the only valid operations are + - * /"></Textbox>
      <Textbox data = "User Warning: Simple calculator, lossy rounding."></Textbox>
    </Wrapper>
  );
  /* 
  Notes:
    -NumberInput and OperatorInput are essentially the same component. The difference in styles can be 
    done using targeted styling by id. 
    -NumberOutput component might be better named as 'Output'.
    -Considering that this is just a simple calculator taking two inputs, I think the result is pretty good.
    -The rounding logic used is not technically accurate. It chooses to omit any digits past the 10th string
    length, which can cause especially lossy results when using decimals.
  */
}

export default App;