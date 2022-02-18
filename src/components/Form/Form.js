import React from 'react'
import { tableColumns, examplePeople } from '../../data'
import FormInput from './FormInput'

const Form = () => {
  return (
    <div className='form-wrapper'>
      <h4 className='form-title'>Enter answers here</h4>
      <form className='form'>
        <div className='form-header'>
          <div className='column-heading form-item'>Name</div>
          {tableColumns.map((col) => (
            <div className='column-heading form-item'>{col.FormatName}</div>
          ))}
        </div>

        {examplePeople.map((person) => (
          <div className='form-row'>
            <div className='column-body-item form-item' data-col-name='name'>
              {person}
            </div>

            {tableColumns.map((col) => (
              <div
                className='column-body-item form-item'
                data-col-name={col.ColName}
              >
                <FormInput />
              </div>
            ))}
          </div>
        ))}
      </form>
    </div>
  )
}

export default Form
