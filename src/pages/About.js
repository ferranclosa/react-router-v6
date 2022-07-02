import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
    const About = () => {

        
        let location = useLocation()
        let navigate = useNavigate()
        const [newDate, setNewDate ] = useState()
       
        const {pathname , state } = location
         const { someState } = state 

        const handleBack = () => {
            navigate(-1)
        }

        const handleArticle =() => {
            navigate('/article', {state: 'From the About'})
        }
        
        useEffect(()=>{
            let y = new Date(location.state.someState.today)
            let x = someState.one + someState.two + someState.twenty
            let h = new Date(y.getFullYear() + x, y.getMonth(), y.getDate())
            setNewDate( h.toLocaleString() )

        }, [])
        
        return (
            <>
                <h1>About</h1>
                <code> The state is {JSON.stringify(state)}</code>
                <br/>
                <code> someObject is {JSON.stringify(someState)} </code>
                <br></br>
                <code>New Date is {newDate}</code>
                <br/>
                <code>Location is {JSON.stringify(location)}</code>

                <br/>
                <button onClick={handleBack} >Back</button>
                <button onClick={handleArticle} >Article </button>
            </>

        )
    }

    export default About