import React from 'react'
import { useState, useEffect } from 'react'
import { useCalculator } from './Contexts/CalContext'
import Display from './Components/Display'
import Buttons from './Components/Buttons'

function App() {
    const { expression, calculateResult, removeDigits, handleInput, clearExpression } = useCalculator()
    
    useEffect(() => {
      const handleKeyPress = (event) => {
        const { key } = event
        if(!isNaN(key) || key === '.' || ['+', '-', '*', '/', '%', '(', ')'].includes(key)){
          handleInput(key)
        } else if (key === "Enter"){
          calculateResult()
        } else if(key === "Escape"){
          clearExpression()
        } else if( key === "Backspace"){
          removeDigits()
        }
      }

      window.addEventListener('keydown', handleKeyPress)
      return () => {
        window.removeEventListener('keydown', handleKeyPress)
      };
    }, [expression, calculateResult, removeDigits, handleInput, clearExpression]);   

  return (
      <div className=" flex flex-col justify-center items-center p-8 gap-2 w-full h-screen bg-slate-800">
        <div className=" flex flex-col gap-4 border-2 border-slate-300 p-2 rounded-md w-80 drop-shadow-xl backdrop-blur-md bg-slate-200">
        <Display />
        <div className=" grid grid-cols-4 gap-2">
          <Buttons value="CE" />
          <Buttons value="C" />
          <button className=' p-2 bg-yellow-600 text-white rounded-md w-full text-2xl flex justify-center items-center'> 
            <i className="fa-solid fa-square-xmark " onClick={() => removeDigits() }></i>
          </button>
          <Buttons value="/" />
          <Buttons value="7" />
          <Buttons value="8" />
          <Buttons value="9" />
          <Buttons value="*" />
          <Buttons value="4" />
          <Buttons value="5" />
          <Buttons value="6" />
          <Buttons value="-" />
          <Buttons value="1" />
          <Buttons value="2" />
          <Buttons value="3" />
          <Buttons value="+" />
          <Buttons value="%" />
          <Buttons value="0" />
          <Buttons value="." />
          <button className=' p-4 bg-green-900 text-white rounded-md w-full text-xl'
           onClick={() => calculateResult() }>=</button>
          </div>
        </div>
      </div>  
  )
}

export default App
