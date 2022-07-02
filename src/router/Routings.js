import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Article from '../pages/Article'
import Home from '../pages/Home'

const Routings = () => {

    return(
        <div>
        <Routes>
            <Route exact path='/' element= {<Home />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route path= '/article' element={<Article />}></Route>
            
        </Routes>
        </div>
    )


}

export default Routings