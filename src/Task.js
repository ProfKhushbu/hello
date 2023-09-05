import React from 'react'
function Task(props) {
  return (
    <div>
      <h3>{props.name}</h3>
<img style={{heiight:400,width:300}} src={props.img1}/>
<br/>
<b>Price = {props.price}</b>
<p>Description = {props.disc}</p>
    </div>
  )
}
export default Task
