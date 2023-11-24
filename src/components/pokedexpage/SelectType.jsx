import { useEffect, useRef } from "react"
import useFetch from "../../hooks/useFetch"


const SelectType = ({setSelectValue}) => {
    const url ='https://pokeapi.co/api/v2/type'

    const [typesInfo, getTypesInfo] = useFetch(url)
    
    useEffect(()=> {
     getTypesInfo()
    },[])
     const selectElement = useRef()
    
    const handlechange =()=>{
        setSelectValue(selectElement.current.value)

    }
  return (
    <select ref={selectElement} onChange={handlechange}>
        <option value='allPoquemons'>all ppokemos</option>
        {
            typesInfo?.results.map(type => (
             <option key={type.url} value={type.url}>{type.name}</option>
                
            ))
        }
    </select>
  )
}

export default SelectType