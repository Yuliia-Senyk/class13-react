import { useState } from "react";
import './Input.css';
import Button from "./Button";

function Input({onInputValueChanged}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    function sendValue() {
        if (inputValue) {
            onInputValueChanged(inputValue)
            setInputValue('');
        }
    }

    return (
        <div className='add-new-container input-group'>
            <input type='text' value={inputValue} onChange={handleInputChange}
                   className={'form-control'} placeholder={'Enter new to-do'}/>
            <Button title={'Create'} onBtnClick={sendValue} disabled={!inputValue}></Button>
        </div>
    );
}

export default Input;
