import React from "react";
import { useContext, createContext, useState } from "react";

const CalculatorContext = createContext()

export const useCalculator = () => useContext(CalculatorContext);

export const CalculatorProvider = ({ children }) => {
    const [expression, setExpression] = useState('');


    const handleInput = (input) => {
        setExpression(expression + input)
    }

    const clearExpression = () => {
        setExpression('')
    }

    const calculateResult = () => {
        const result = eval(expression)
        setExpression(result.toString())

    }

    const removeDigits = () => {
        const length = expression.length
        console.log(length);
        let newExpression = expression.substring(0, length-1)
        setExpression(newExpression)
        }

    return (
        <CalculatorContext.Provider value={{ expression, handleInput, clearExpression, calculateResult, removeDigits }}>
            {children}
        </CalculatorContext.Provider>
    );
};