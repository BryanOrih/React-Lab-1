import React, {useState} from 'react'


const ItemList = () => {
    const [list, setList] = useState(["fee","fi", "fo", "fum"])

const displayItems = () =>{
     return list.map((value, index)=>{
        return<li key= {value+index} >{value}</li>
    })
}
  return (
    <>
      {displayItems()}
    </>
  )
}

export default ItemList