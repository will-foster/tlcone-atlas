import React from 'react'
import { exampleEntity } from '../../data'
import Form from './Form'

const FormContainer = () => {
  return (
    <div className='form-container'>
      <h3 className='form-container-title'>Project: {exampleEntity}</h3>
      <Form></Form>
    </div>
  )
}

export default FormContainer
