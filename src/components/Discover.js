import Fetch from './Fetch';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Discover () {

    const uri = 'https://api.themoviedb.org/3/discover/movie?language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate';

    return (
        <div className="row discover">
            <Fetch 
                renderSuccess={movies}
                uri={uri}
            />
        </div>
    );

    function movies(data) {
        return (
            <Carousel className='hero-carousel p-0' fade nextLabel={null} prevLabel={null}>
                {data.results.map((movie, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <Link to={`/movie/${movie.id}`} >
                                <div className='img-gradient'>
                                    <img 
                                        style={{width: '100%'}}
                                        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                                        alt="backdrop"
                                    />
                                </div>
                            </Link>
                            <Carousel.Caption>
                                <h2>{movie.title}</h2>
                                <p>{movie.release_date}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>             
        );
    }

}