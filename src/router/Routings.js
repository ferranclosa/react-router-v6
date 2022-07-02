import { Routes, Route } from 'react-router-dom'
//  * ensure that is Routes and not Router (which cal also be imported)
import About from '../pages/About'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const Routings = () => {

    return(
        <div>
            {/* /**
            The Routes + n Route combinations
            
            Only one Routes is allowed but many Route are allowed
            and I guess, expected */ }
        <Routes>
            <Route exact path='/' element= {<Home />}></Route>
            <Route exact path='/about' element={<About />}></Route>

{/* the catch all or the anything else */}

            <Route path='*' element={<NotFound />}></Route>
        </Routes>
        </div>
    )


}

export default Routings