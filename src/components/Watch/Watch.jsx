import React from 'react';

const Watch = ({watch}) => {
    const {brand,price,model} = watch;
    return (
        <div>
           <h2>watch:{brand} {model}</h2>
           <p>price:{price}</p> 
        </div>
    )
};

export default Watch;