//CREATE A COMPONENT FOR TOGGLING
import React from 'react'

const Five = () => {
    const[checked,setChecked] = React.useState(false);

    const handleToggle = () => {
        setChecked(!checked);

    }
  return (
    <div>
      <label>
        <input type='checkbox' onChange={handleToggle}/>
      </label>
      <p>{checked ? "ON" : "OFF"}</p>
    </div>
  )
}

export default Five
