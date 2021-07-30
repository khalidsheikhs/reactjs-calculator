import React, { useRef } from 'react';
import './Calculator.css';
import Key from './Key';

function Calculator() {
    const inputRef = useRef(null);
    const selectedKey = (obj) => {
        if (obj.isControlTab) clearValue()
        else showValue(obj.keyVal);
    }

    const showValue = (str) => {
        /* eslint no-eval: 0 */
        if (str === '=') {
            let nums = inputRef.current.value.replace(/×/g, '*').replace(/÷/g, '/');
            nums = nums.replace(/[^-()\d/*+.]/g, '');
            inputRef.current.value = global.eval(nums);
        } else inputRef.current.value += str;
    }

    const clearValue = () => {
        inputRef.current.value = '';
    }
    return (
        <div className="container">
            <input type="text" className="screen" ref={inputRef} readOnly disabled />
            <div className="keypad">
                <Key keyVal={'('} selectKey={selectedKey} />
                <Key keyVal={'CE'} isControlTab selectKey={selectedKey} />
                <Key keyVal={')'} selectKey={selectedKey} />
                <Key keyVal={'C'} isControlTab selectKey={selectedKey} />
                <Key keyVal={'1'} selectKey={selectedKey} />
                <Key keyVal={'2'} selectKey={selectedKey} />
                <Key keyVal={'3'} selectKey={selectedKey} />
                <Key keyVal={'+'} selectKey={selectedKey} />
                <Key keyVal={'4'} selectKey={selectedKey} />
                <Key keyVal={'5'} selectKey={selectedKey} />
                <Key keyVal={'6'} selectKey={selectedKey} />
                <Key keyVal={'-'} selectKey={selectedKey} />
                <Key keyVal={'7'} selectKey={selectedKey} />
                <Key keyVal={'8'} selectKey={selectedKey} />
                <Key keyVal={'9'} selectKey={selectedKey} />
                <Key keyVal={'×'} selectKey={selectedKey} />
                <Key keyVal={'.'} selectKey={selectedKey} />
                <Key keyVal={'0'} selectKey={selectedKey} />
                <Key keyVal={'='} selectKey={selectedKey} />
                <Key keyVal={'÷'} selectKey={selectedKey} />
            </div>
        </div>
    );
}

export default Calculator;