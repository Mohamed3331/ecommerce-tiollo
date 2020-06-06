import React, {useState, useContext} from 'react'
import Select from 'react-select'
import {ProductContext} from '../context'

const options = [
  { value: "newest", label: "Newest" },
  { value: "lowtohigh", label: "Price (low to high)" },
  { value: "hightolow", label: "Price (high to low)" },
];



export default function Filter() {

    const [filtering, setFiltering] = useState({})

    const { filterRooms } = useContext(ProductContext);


    function customeTheme(theme) {
    return {
      ...theme,
        colors: {
            ...theme.colors,
            primary25: 'pink',
            primary: 'grey'
            }
        }
    }

    return (
         
        <div className="filter">
           <span>Filter by </span>
            <Select
            className="horoko-filter"
            options={options}
            onChange={filterRooms}
            theme={customeTheme}
            autoFocus
            placeHolder="Filter here"
            />
        </div>
    )
}
