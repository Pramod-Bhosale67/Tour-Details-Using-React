import React, {useState} from "react";


                // same as the props we can pass it.
function Card({id, image, info, price,name, removeTour}){
    const [readMore, setReadMore] = useState(false);
    const tourInfo = readMore ? info : `${info.substring(0, 200)}. `;

    const readMoreHandler = () =>{
        setReadMore(!readMore);
    }

    return (
        <div className="card">
            <img src={image} className="img" />

            <div className="tour-details">
                <div className="tour-info">
                    <h4 className="tour-price">Rs: {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {tourInfo}

                    <span className="read-more" onClick={readMoreHandler}>
                        {readMore ? 'Show Less': 'Read More'}
                    </span>
                </div>
            </div>
        
          
            <button className="btn-red" onClick={() => removeTour(id)}>Not Interested</button>
            
        </div>
    );
}

export default Card;