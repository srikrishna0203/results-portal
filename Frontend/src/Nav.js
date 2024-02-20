import {Link} from 'react-router-dom'
import './Nav.css'
let Nav = () =>{
    return(
        <nav className='nav'>
            <p>Results Portal</p>
            <Link to = '/' style={{color:"lightblue",textDecoration:"none"}}>Home</Link>
            <Link to = '/result'style={{color:"lightblue",textDecoration:"none"}}>Results</Link>
            <Link to = '/add-results' style={{color:"lightblue",textDecoration:"none"}}>Store-Results</Link>
        </nav>
    )
}
export default Nav;