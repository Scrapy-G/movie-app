import { createRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export default function CardCarousel ({ renderCard, data }) {
    
    

    const scrolledDiv = createRef();
    const cardRefs = [];
    var scrollPos = 0;

    const makeScroll = (up) => {
        if(up) 
            scrollPos = scrollPos + 4 > cardRefs.length-1 ? cardRefs.length-1 : scrollPos + 4;
        else 
            scrollPos = scrollPos - 4 < 0 ? 0 : scrollPos - 4;

        if(scrollPos !== (cardRefs.length-1)) console.log("show"); else console.log("don't show");
        cardRefs[scrollPos].current.scrollIntoView({behavior: 'smooth', alignTo: false});
    }

    return (
        <div className="card-carousel-container">       
            <div
                className='control-buttons d-flex justify-content-between'
                style={{position: 'relative', zIndex: '1'}}
            >   
                <button
                    style={{zIndex: '1', position: 'absolute', top: '200px', right: '-10px'}}
                    onClick={() => {
                        makeScroll(true);                       
                    }}
                >
                    <IoIosArrowForward />
                </button> 
                
                <button
                    style={{zIndex: '1', position: 'absolute', top: '200px', left: '-10px'}}
                    onClick={() => {
                        makeScroll(false); 
                    }}
                >
                    <IoIosArrowBack />
                </button>                             
            </div>
                    
            <ul 
                ref={scrolledDiv} 
                className="carousel"
                style={{display: 'flex', overflow: 'hidden', listStyle: 'none'}}>
                    {data.map((card , i) => {
                        const ref = createRef();
                        cardRefs.push(ref);
                        return (
                        <li key={i} ref={ref}>
                            {renderCard(card)}           
                        </li>);
                    })}
            </ul>
        </div>
    );
}