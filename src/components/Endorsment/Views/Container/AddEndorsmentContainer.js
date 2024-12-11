import React, { useState, useRef } from 'react'
import EmployeeManager from '../../../api/dataManager'
import '../../../styles/employees/list.css'
import { errorHandler, validateForm } from '../../validation/formValidator'
import { modal } from '../../../modules/modal/helpers'
import EmployeeAddForm from '../views/addForm'

const AddEndorsmentContainer = props => {
  const [newEndorsment, setEndorsment] = useState({
    endorser: '',
    position: '',
    endorsement: '',
  })
  const [errors, setErrors] = useState({
    endorser: '',
    position: '',
    endorsement: '',
  })
  const [postedEmployee, setPostedEmployee] = useState()
  const [selectedDealership, setSelectedDealership] = useState('')

  const handleInputFieldChange = evt => {
    const stateToChange = { ...newEndorsment }
    stateToChange[evt.target.id] = evt.target.value

    errorHandler(evt.target.id, evt.target.value, errors, setErrors)

    setEndorsment(stateToChange)
  }

  const handleSubmit = evt => {
    evt.preventDefault()

    if (newEndorsment.first_name === '' || newEndorsment.last_name === '') {
      window.alert('Please fill out employee name fields')
    } else if (newEndorsment.endorser === '') {
      window.alert('Please add First and Last name')
    } else if (newEndorsment.phone === '') {
      window.alert('Please enter a phone number')
    } else {
      if (validateForm(errors)) {
        DataManager.PostData('employees', newEndorsment).then(resp => {
          // this is for the success snackbar to know a successful POST was made
          setPostedEmployee(resp)

          // reset field values for next form POST
          setEndorsment({
            endorser: '',
            position: '',
            endorsement: '',
          })

          modal.clearForm()

        })
      } else {
        window.alert('Please fix form entries')
      }
    }
  }

  return (
    <EndorsementAddForm
      handleInputFieldChange={handleInputFieldChange}
      errors={errors}
      state={newEmployee}
      setState={setNewEmployee}
      selectedDealership={selectedDealership}
      setSelectedDealership={setSelectedDealership}
      newEmployee={newEmployee}
      setNewEmployee={setNewEmployee}
      postedEmployee={postedEmployee}
      setPostedEmployee={setPostedEmployee}
      setCreationView={props.setCreationView}
      handleSubmit={handleSubmit}
    />
  )
}

export default AddEndorsmentContainer
