import { useFetch } from './useFetch';
import Loader from 'react-loader-spinner';
import { Container } from 'react-bootstrap';

export default function Fetch ( {
    key = 'YOUR TMDB KEY HERE',
    uri,
    renderSuccess,
    loadingFallback = 
        <Container className='d-flex justify-content-center'>
            <Loader 
                type="Puff"
                color="white"
                height={300}
                width={100}
            />
        </Container>,
    renderError = error => (
        <pre>{JSON.stringify(error, null, 2)}</pre>
    )
}) {

    const { loading, data, error } = useFetch(`${uri}&api_key=${key}`);
   

    if (loading) return loadingFallback;       
    if(data.status_code === 7) return ("Error " + data.status_message)
    if (error) return renderError(error);    
    if (data) return renderSuccess(data);
    
}