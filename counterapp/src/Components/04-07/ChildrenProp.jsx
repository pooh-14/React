import React from 'react'

const Childprop = ({children}) => {
    return(
        <button>
            {children}
        </button>
    )
}

const ChildrenProp = () => {
  return (
    <Childprop>Login</Childprop>
  )
}

export default ChildrenProp