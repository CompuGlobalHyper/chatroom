import Header from './components/Header.jsx'
import { Link } from 'react-router-dom'

function FrontPage() {
    return (
        <>
            <Header></Header>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </>
    )
}


export default FrontPage