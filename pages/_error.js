import React from 'react'

function Error({ statusCode }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-center">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error