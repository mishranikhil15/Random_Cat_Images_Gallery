import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CatFilter({ setBreed, fetchCatImages }) {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        const fetchBreeds = async () => {
            const apiKey = 'live_EExDclM8QP8TIGFzD1uddEymRTwo8DkAL0IjFrpcc9EjfboBhs4f6piXQlniej4G';

            try {
                const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
                    headers: {
                        'x-api-key': apiKey,
                    },
                });
                setBreeds(response.data);
            } catch (error) {
                console.error("Error fetching cat breeds:", error);
            }
        };

        fetchBreeds();
    }, []);

    return (
        <div className="filter">
            <select onChange={(e) => {
                const selectedBreed = e.target.value;
                setBreed(selectedBreed);
                fetchCatImages(10, selectedBreed);
            }}>
                <option value="">Select a breed</option>
                {breeds.map((breed) => (
                    <option key={breed.id} value={breed.id}>{breed.name}</option>
                ))}
            </select>
        </div>
    );
}

export default CatFilter;
