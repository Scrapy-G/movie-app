import { FaStar } from 'react-icons/fa';

export default function Rating ({ rating, voteCount}) {
    return (
        <div 
            className='rating d-flex p-1'
            style={{maxWidth: '100px'}}
        >  
            <div className='d-flex justify-content-center align-items-center'>
                <FaStar size={30} color='yellow'/>
            </div>
            <div className='p-1'>
                <div style={{marginBottom: '-6px'}}>
                    <span style={{fontSize: '1.5rem'}}>{rating}</span>
                    <span style={{fontSize: '.8rem', opacity: '0.7'}}>/10</span>
                </div>
                <div style={{fontSize: '.8rem', opacity: '0.7'}}>
                    {voteCount}
                </div>
            </div>
            
        </div>
    )
}