import { useLocation, useNavigate} from 'react-router-dom'


const Article =() => {

    let navigate = useNavigate()
    let location = useLocation()

    const handleBack = () => {
        navigate(-1)
    }
    return(
        <>
        <article>
            <p>lorem</p>

            <p>lorem {location.state} </p>
         
        </article>

        <button onClick={handleBack}>Back </button>
        </>
    )
}

export default Article