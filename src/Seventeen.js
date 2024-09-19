//BUILD A COLOR PICKER THAT ALLOWS USERS TO SELECT A COLOR
import React from 'react'

const Seventeen = () => {

    const [color,setColor] = React.useState('#000000');
    const handleChange = (e) =>{
        setColor(e.target.value);
    }
  return (
    <div>
      <input type="color" onChange={handleChange}/>
      <div style={{width:'100px', height:'100px', backgroundColor:color}}></div>
    </div>
  )
}

export default Seventeen
