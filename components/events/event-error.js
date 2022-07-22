import React from 'react'
import Button from '../ui/Button'
import ErrorAlert from '../ui/error-alert'

const EventError = ({text}) => {
  return (
    <>
    <ErrorAlert>

      <p >{text}</p>
    </ErrorAlert>
    <div className="center">

    <Button link='events'>Show all events</Button>
    </div>
  </>
  )
  
}

export default EventError