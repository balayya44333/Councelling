import React from 'react'
function hello(props) {
  return (
    <div>
        <h1><center>HELLO KLU</center></h1>
        {props.children}
    </div>
  )
}
export default hello