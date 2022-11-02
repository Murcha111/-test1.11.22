import React from 'react'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert" className='errorBlock'>
      <div>Произошла ошибка!</div>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Повторить запрос</button>
    </div>
  )
}
export default ErrorFallback
