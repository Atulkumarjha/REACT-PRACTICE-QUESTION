//CREATE A COMPONENT THAT FETCH DATA FROM API DISPLAY IT
import React from 'react'

const Six = () => {

    const [data,setData] = React.useState(null);

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>response.json())
        .then((json)=>setData(json))
    },[])
  return (
    <div>
     {
        data? (
            <div>
                <h1>Title: {data.title}</h1>
                </div>
        ):(
            <p>
                Loading
            </p>
        )};
    </div>
  )
}

export default Six
