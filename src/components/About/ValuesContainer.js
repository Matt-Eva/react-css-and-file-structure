import React from 'react'
import "./ValuesContainer.css"
import ValueCard from './ValueCard'
import {values} from "../../assets/values"

function ValuesContainer() {
    console.log(values)
    const valueCards = values.map(value=> <ValueCard key={value.title} value={value}/>)
  return (
    <div className="values-container">
      {valueCards}
    </div>
  )
}

export default ValuesContainer