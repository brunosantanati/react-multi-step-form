import React from 'react'

const Question = ({ questionAttribute, questionStatement, prevStep, nextStep, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div>
        <div>{questionStatement}</div>
        <input type="range" min="0" max="100" value={values[questionAttribute]} onChange={handleChange(questionAttribute)} />
        <p>Value: {values[questionAttribute]}</p>
        <button onClick={ Previous }>Previous</button>
        <button onClick={ Continue }>Continue</button>
    </div>
  )
}

export default Question

