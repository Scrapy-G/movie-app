import Fetch from './Fetch';
import { Row, Col, Image, Container, Button } from 'react-bootstrap';
import Rating from './Rating';

export default function MovieDetail ({ match }) {
    
    const uri = `https://api.themoviedb.org/3/movie/${match.params.id}?`;

    return (
        <Fetch 
            uri={uri}
            renderSuccess={renderMovieDetails}
        />
    )

    function renderMovieDetails(movie) {

        return (
            <Container fluid='md' className='movie'>
                <Row>
                    <Col>
                        <h1 className="title pt-3">{movie.title}</h1>
                    </Col>
                    <Col>
                        <Rating 
                            rating={movie.vote_average}
                            voteCount={movie.vote_count}
                        />
                    </Col>                    
                </Row>
                <Row>
                    <Col>
                        <p className="subtext">
                            <span>{movie.runtime} mins</span> |
                            <span> {movie.release_date}</span>
                        </p>
                    </Col>
                </Row>
                <Col className="p-0">
                        
                    <Image src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt='backdrop image' fluid/>
                    <p className='pt-4 pb-4'>{movie.overview}</p>
                    <Button>Add to Watchlist</Button>
                </Col>
            </Container>
        );
    }
}