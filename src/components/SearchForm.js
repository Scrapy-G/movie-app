import { Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import Fetch from './Fetch';
import List from './List';
import { Link } from 'react-router-dom';

export default function SearchForm() {
    
    const uri = 'https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=true';
    const [input, setInput] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const firstUpdate = useRef(true);

    useEffect(() => {
        if(firstUpdate.current){
            firstUpdate.current = false;
            return;
        }

        setShowSuggestions(false);
        const delay = setTimeout(() => {
            setShowSuggestions(true)
        }, 1000)

        return () => clearTimeout(delay);
    }, [input]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const renderMovie = (movie) => {
        return (
            <Link onClick={() => setShowSuggestions(false)} to={`/movie/${movie.id}`} >
                <div className='movie-suggestion row'>
                    <div className='col-auto border p-0'>
                        <img alt='movie poster' src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} />
                    </div>
                    <div className='col pt-3'>
                        <h5>{movie.title}</h5>
                        <p>{movie.release_date}</p>
                    </div>
                </div>
            </Link>
        );
    }

    const renderResults = (data) => {
        if(input.trim() === '') return;
        const movies = data.results.splice(0,5);
        
        return (
            <div className='movie-suggestions' style={{position: 'absolute', top: '50px', left: '0'}}>
                <List 
                    items={movies}
                    renderItem={renderMovie}
                />
            </div>
        )
    }
    

    return (
        <Form 
            inline 
            className="search-form d-flex w-100"
            style={{position: 'relative'}}>
            <FormControl
                type="text"
                placeholder="Search"
                className="w-100"
                value={input}
                onChange={e => setInput(e.target.value)}
                required
            />
            <Button type="submit" onClick={handleSubmit}>
                <FaSearch />
            </Button>
            {showSuggestions && input && (
                <Fetch 
                    uri={uri + `&query=${input}`}
                    renderSuccess={renderResults}
                    loadingFallback={null}
                />
            )}
        </Form>
    );
}