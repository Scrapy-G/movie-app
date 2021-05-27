import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';


export default function Header () {
    return (
        <Container fluid='false' className='header-bg'>
            <Container>
                <div className='header d-flex p-3'>
                    <Link id="logo" to='/'>Home</Link>                    
                    <SearchForm />
                    <Link className="signin">Sign in</Link>                             
                </div>
            </Container>
        </Container>
    )
}