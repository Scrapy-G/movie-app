import Discover from './Discover';
import Upcoming from './Upcoming';
import { Container } from 'react-bootstrap';

export default function Home (){

    return (
        <Container fluid='lg'>
            <Discover />
            <Upcoming />
        </Container>
    )
}