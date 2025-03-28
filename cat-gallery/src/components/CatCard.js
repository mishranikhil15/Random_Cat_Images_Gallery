import React from 'react';

function CatCard({ image }) {
    return (
        <div className="cat-card">
            <img src={image} alt="Cat" />
        </div>
    );
}

export default CatCard;
