import {useState,useEffect} from 'react'

const Route =({path,children})=>{
const [currentpath,setCurrentPath]=useState(window.location.pathname)

    useEffect(()=>{

        const onLocationChange=()=>{
                setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate',onLocationChange);


        return ()=>{
            window.removeEventListener('popstate',onLocationChange)
        }
    },[])

        return currentpath === path?children:null;
}


export default Route;