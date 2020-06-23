import React, {useEffect, useContext} from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import {ProductContext} from '../context'

const optionsSize = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "large" },
  { value: "xlarge", label: "X-large" },
  { value: "xxlarge", label: "XX-large" }
]

const animatedComponents = makeAnimated()

export default function SizesFilter({id}) {

    const { getItemSize, getItemSizeID } = useContext(ProductContext);

    useEffect(() => {
            getItemSizeID(id)
    }, [getItemSizeID, id])

    function customeTheme(theme) {
    return {
      ...theme,
        colors: {
            ...theme.colors,
            primary25: 'pink',
            primary: 'black'
            }
        }
    }

    return (
        <>  <div>
                <Select
                    className="size-filterr"
                    options={optionsSize}
                    theme={customeTheme}
                    noOptionsMessage={() => 'No more Sizes'}
                    autoFocus
                    isMulti
                    components={animatedComponents}
                    placeholder="Choose up to 2 Sizes"
                    onChange={getItemSize}
                />
            </div>    
        </>
    )
}
