//BUILD A SERACH BAR THAT FILTERS THE LIST OF ITEMS BASED ON USER INPUT
import React from 'react'

const Fifteen = ({items}) => {

    const [search,setSearch] = React.useState('');
    const filteredItems = items.filter((item) => 
        item.toLowerCase().includes(search.toLowerCase())  // Fixed typo and added implicit return
    );
  return (
    <div>
      <input type='text' placeholder='Search...' onChange={(e)=>setSearch(e.target.value)}/>
      <ul>
        {filteredItems.map((item,index)=>(
            <li key={index}>
                {item}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Fifteen
