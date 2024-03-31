import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import PhotoCard from '../components/PhotoCard';


const Photos = () => {

    const [allphoto, setAllPhoto] = useState([]);

    const API = "https://api.slingacademy.com/v1/sample-data/photos";
    
    async function fetchPhotoDetails() {
        try {
            const response = await axios.get(API);
            setAllPhoto(response.data.photos);
            console.log(response.data.photos)
        } catch (error) {
            console.log("Error mil gaya")
        }
    }


    useEffect(() => {
        fetchPhotoDetails()
    }, [])


    return (

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 p-4">
            {allphoto.map((e) => (
                <Link key={e.id} to={`/photos/${e.id}`} >
                    <PhotoCard e={e} />
                </Link>
            ))}
        </div>

    )
}

export default Photos