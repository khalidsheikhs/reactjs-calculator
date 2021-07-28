import React, { useRef } from 'react';
import './Calculator.css';
import Key from './Key';

function Calculator() {
    const inputRef = useRef(null);
    const selectedKey = (obj) => {
        if (obj.isControlTab) clearValue()
        else showValue(obj);
    }

    const showValue = (obj) => {
        /* eslint no-eval: 0 */
        if (obj.value === '=') {
            let nums = inputRef.current.value.replace(/×/g, '*').replace(/÷/g, '/');
            nums = nums.replace(/[^-()\d/*+.]/g, '');
            inputRef.current.value = global.eval(nums);
        } else inputRef.current.value += obj.value;
    }

    const clearValue = () => {
        inputRef.current.value = '';
    }
    return (
        <div className="container">
            <input type="text" className="screen" ref={inputRef} readOnly disabled />
            <div className="keypad">
                <Key keyVal={'('} onSelectKey={selectedKey} />
                <Key keyVal={'CE'} isControlTab onSelectKey={selectedKey} />
                <Key keyVal={')'} onSelectKey={selectedKey} />
                <Key keyVal={'C'} isControlTab onSelectKey={selectedKey} />
                <Key keyVal={'1'} onSelectKey={selectedKey} />
                <Key keyVal={'2'} onSelectKey={selectedKey} />
                <Key keyVal={'3'} onSelectKey={selectedKey} />
                <Key keyVal={'+'} onSelectKey={selectedKey} />
                <Key keyVal={'4'} onSelectKey={selectedKey} />
                <Key keyVal={'5'} onSelectKey={selectedKey} />
                <Key keyVal={'6'} onSelectKey={selectedKey} />
                <Key keyVal={'-'} onSelectKey={selectedKey} />
                <Key keyVal={'7'} onSelectKey={selectedKey} />
                <Key keyVal={'8'} onSelectKey={selectedKey} />
                <Key keyVal={'9'} onSelectKey={selectedKey} />
                <Key keyVal={'×'} onSelectKey={selectedKey} />
                <Key keyVal={'.'} onSelectKey={selectedKey} />
                <Key keyVal={'0'} onSelectKey={selectedKey} />
                <Key keyVal={'='} onSelectKey={selectedKey} />
                <Key keyVal={'÷'} onSelectKey={selectedKey} />
            </div>
        </div>
    );
}

export default Calculator;