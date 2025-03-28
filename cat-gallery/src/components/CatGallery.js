import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatCard from './CatCard'; 
import CatFilter from './CatFilter'; 

function CatGallery() {
    const [catImages, setCatImages] = useState([]);
    const [breed, setBreed] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchCatImages = async (limit = 10, breed = '') => {
        setLoading(true);
        try {
            const breedParam = breed ? `&breed_ids=${breed}` : '';
            const apiKey = 'live_EExDclM8QP8TIGFzD1uddEymRTwo8DkAL0IjFrpcc9EjfboBhs4f6piXQlniej4G';

            const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}${breedParam}`, {
                headers: {
                    'x-api-key': apiKey,
                },
            });

            setCatImages(response.data);
        } catch (error) {
            console.error("Error fetching cat images:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCatImages();
    }, []);

    return (
        <div>
            <CatFilter setBreed={setBreed} fetchCatImages={fetchCatImages} />
            {loading ? <p>Loading...</p> : null}
            <div className="gallery">
                {catImages?.map((cat, index) => (
                    <CatCard key={index} image={cat.url} />
                ))}
            </div>
            <button onClick={() => fetchCatImages(10, breed)}>Load More</button>
        </div>
    );
}

export default CatGallery;
