import { useNavigate, useLocation } from 'react-router-dom'
const NotFound = () => {

    let navigate = useNavigate()
    let location = useLocation()
    const handlePrevious = () => {
        navigate(-1)
    }

    const handleHome = () => {
        navigate('/')

    }   
    return (
        <>
            <h1>Page {location.pathname} does not exist</h1>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleHome}>Home</button>

        </>
    )

}
export default NotFound