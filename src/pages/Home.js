import { useState } from 'react'
import { useNavigate  } from 'react-router-dom'
const Home = () => {

    let navigate = useNavigate()
 
    const [someState] = useState( {
            one: 1, 
            two: 2, 
            twenty: 20, 
            today: new Date().toLocaleString()
    })

    

    const handleAbout = () => {
        navigate('/about' , {state: { someState}} )  
    }

    return (
        <>
        <h1>Home</h1>
        <button onClick={handleAbout}>About </button>
        </>
       
    )
}

export default Home