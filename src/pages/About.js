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
            setNewDate( h.toLocaleDateString() )

        }, [])
        
        return (
            <>
                <h1>About</h1>
                <p>On this page we are seeing the parameters (state) passed 
                    to the page. We note some deconstructing. 
                    Also we apply a simple formula where we add the 
                    items from the state (one, two and twenty) and the 
                    result gets added in years to the original date 
                    and displayed on the new Date field  (notice that 
                    23 years have been added )
                </p>
                <p>This is an oversimplified example but it helps to grasp the concept</p>
                <code> The state is {JSON.stringify(state)}</code>
                <br/>
                <code> someObject is = {JSON.stringify(someState)} </code>
                <br></br>
                <code>New Date is = {newDate}</code>
                <br/>
                <code>The full Location is = {JSON.stringify(location)}</code>

                <br/>
                <button onClick={handleBack} >Back</button>
                <button onClick={handleArticle} >Article </button>
            </>

        )
    }

    export default About