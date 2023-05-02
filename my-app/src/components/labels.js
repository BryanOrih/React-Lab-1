import React from 'react'

let docLabels = [
    "name",
    "email",
    "message"
]
let label = docLabels.map((e)=>{
    console.log(e);
    return <label for={`${e}`}>{e}</label>
})


const Labels = () => {
  return (
    label
  )
}

export default Labels