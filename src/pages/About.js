import { useNavigate, useLocation } from "react-router-dom"
const About = () => {

    let location = useLocation()
    let navigate = useNavigate()

    const {pathname , state } = location

    const handleBack = () => {
        navigate(-1)
    }

    const handleArticle =() => {
        navigate('/article', {state: 'From the About'})
    }
    
    return (
        <>
            <h1>About</h1>
            <code>{JSON.stringify(state)}</code>
            <br/>
            <code>{pathname}</code>
            
            <br/>
            <button onClick={handleBack} >Back</button>
            <button onClick={handleArticle} >Article </button>
        </>

    )
}

export default About