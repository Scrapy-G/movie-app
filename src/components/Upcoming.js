import { Card, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa'
import { BsPlayFill, BsPlus } from 'react-icons/bs'
import Fetch from './Fetch';
import CardCarousel from './CardCarousel';
import { Link } from 'react-router-dom';

export default function Upcoming () {

    const uri = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

    return (
        <section>
            <h3 className='title'>Upcoming Movies</h3>            
            <Fetch 
                renderSuccess={renderCards}
                uri={uri}
            />          
        </section>
    )

    function renderCards (data) {

        return (
            <CardCarousel 
                renderCard={renderCard}
                data={data.results}
            />
        );
    }

    function renderCard(data) {
        return (            
            <Card className="card-item" style={{minWidth: '200px', minHeight: '375px', margin: '5px 10px 5px 0'}}>
                <Link to={`/movie/${data.id}`}>
                    <Card.Img
                        src={`https://image.tmdb.org/t/p/w154${data.poster_path}`} 
                    />
                </Link>
                <Card.Body>
                    <Card.Subtitle className='subtitle'>
                        <span className='d-flex align-items-center'>
                            <FaStar color='yellow' style={{marginRight: '3px'}}/>                        
                            <span>{data.vote_average}</span>
                        </span>
                    </Card.Subtitle>
                    <Link to='/movie'>
                        <Card.Text className='card-text'>
                            {data.title}
                        </Card.Text>
                    </Link>
                </Card.Body>
                <Button>
                    <BsPlayFill /> Trailer
                </Button>
                <Button>
                    <BsPlus /> Watchlist
                </Button>
            </Card>             
        );
    }
}