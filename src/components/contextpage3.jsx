import React from 'react'

const contextpage3 = () => {
    const context = useContext(mainContext)
    const {user} = context
  return (
    <div>{user}</div>
  )
}

export default contextpage3