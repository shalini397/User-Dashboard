import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className='w-full border-red rounded-md text-sm text-center px-4 py-4'>{message}</div>
  )
}

export default ErrorMessage