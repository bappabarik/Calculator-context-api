import React from 'react';
import { useCalculator } from '../Contexts/CalContext';

const Buttons = ({value}) => {
    const { handleInput, clearExpression } = useCalculator()
    const handleClick = () => {
        if (value === "C" || value === "CE")
            { 
                clearExpression()
                return
            }
        handleInput(value)
    }

    return (
        <div>
            <button className=' p-4 bg-slate-600 text-white rounded-md w-full text-xl' type="button" value={value} onClick={handleClick} >
                {value}
            </button>
        </div>
    );
}

export default Buttons;
