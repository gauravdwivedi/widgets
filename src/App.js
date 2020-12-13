import React,{useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

const items =[
    {
        title:'What is React?',
        content:'React is a frontend JS framework'
    },
    {
        title:'Why use React',
        content:'react is a favorite JS library among engineers'
    },
    {
        title:'How do you use React?',
        content:'You use React by creating components'
    }
]

const options =[
    {
    label:'The Color Red',
    value:'red'
    },
    {
        label:'The color of Green',
        value:'green'
    },
    {
        label:'This is Blue',
        value:'blue'
    }

] 

const App=()=>{

    const [selected,setSelected]=useState(options[0])
    const [showDropdown,setShowDropdown]=useState(true)

    return(<div>
        <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        {showDropdown ?
            <Dropdown 
            options={options} 
            onSelectedChange ={setSelected}
            selected={selected} 
                />:null
    }
    </div>)
}

export default App