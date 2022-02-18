import React from 'react'

const FormInput = () => {
  return (
    <div class='form-input'>
      <p>Score:</p>
      <input type='number' min={0} max={10} value='0'></input>
    </div>
  )
}

export default FormInput
