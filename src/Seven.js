//BUILD  A TIMER THAT COUNTS DOWN FROM A SPECIFIC TIME
import React, { useEffect } from 'react'

const Seven = () => {

    const [time,setTime] = React.useState(60);

    useEffect(()=>{
        if(time>=0){
            const timer = setTimeout(()=>setTime(time-1),1000);
            return ()=> clearTimeout();
        }
    },[time]);
  return (
    <div>
      Time Left: {time} second
    </div>
  )
}

export default Seven
