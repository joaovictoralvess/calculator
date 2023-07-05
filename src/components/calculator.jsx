import React, { useState } from 'react'
import './calculator.css'

export default function calculator() {
    const [previousNum, setPreviousNum] = useState(0)
    const [operator, setOperator] = useState('')
    const [num, setNum] = useState(0)

    function insertNum(e) {
        if (num == 0) {
            setNum(e.target.value)
        } else {
            setNum(num + e.target.value)
        }
    }

    function operatorHandler(e) {

        setOperator(e.target.value)
        setPreviousNum(num)
        setNum(0)

        if (operator == '/') {
            setNum(previousNum / num)
        } else if (operator == '+') {
            setNum(Number(previousNum) + Number(num))
        } else if (operator == '-') {
            setNum(previousNum - num)
        } else if (operator == 'x') {
            setNum(previousNum * num)
        }
        
    }

    function clear() {
        setNum(0)
        setOperator('')
        previousNum(0)
    }

    function porcentage() {
        setNum(num / 100)
    }

    function operatorChanger() {
        
        if (num > 0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num))
        }
    }


    function result() {
        if (operator == '/') {
            setNum(previousNum / num)
        } else if (operator == '+') {
            setNum(Number(previousNum) + Number(num))
        } else if (operator == '-') {
            setNum(previousNum - num)
        } else if (operator == 'x') {
            setNum(previousNum * num)
        }
    }

  return (
    <div>
        <main className='principal_container'>
            <div className='second_container'>
                <span className='screen'>{num}</span>
                <button onClick={clear} className='gray'>AC</button>
                <button onClick={operatorChanger} className='gray'>+-</button>
                <button onClick={porcentage} className='gray'>%</button>
                <button onClick={operatorHandler} value={'/'} className='orange'>&#247;</button>
                <button onClick={insertNum} value={7}>7</button>
                <button onClick={insertNum} value={8}>8</button>
                <button onClick={insertNum} value={9}>9</button>
                <button onClick={operatorHandler} value={'x'} className='orange'>x</button>
                <button onClick={insertNum} value={4}>4</button>
                <button onClick={insertNum} value={5}>5</button>
                <button onClick={insertNum} value={6}>6</button>
                <button onClick={operatorHandler} value={'-'} className='orange'>-</button>
                <button onClick={insertNum} value={1}>1</button>
                <button onClick={insertNum} value={2}>2</button>
                <button onClick={insertNum} value={3}>3</button>
                <button onClick={operatorHandler} value={'+'} className='orange' >+</button>
                <button onClick={insertNum} value={0} className='button_zero'>0</button>
                <button onClick={insertNum} value={'.'}>.</button>
                <button onClick={result} className='orange'>=</button>
            </div>
      </main>
    </div>
  )
}
