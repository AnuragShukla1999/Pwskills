import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PhotoDetails() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const API_URL = `https://api.slingacademy.com/v1/sample-data/photos/${id}`;

  async function fetchPhotoDetails() {
    try {
      const response = await axios.get(API_URL);
      setPhoto(response.data.photo);
      console.log(response.data.photo)
    } catch (error) {
      console.log("Error mil gaya");
    }
  }

  useEffect(() => {
    fetchPhotoDetails();
  }, [id]);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-sm rounded  shadow-lg">
        <img
          src={photo.url}
          alt={photo.title}
          className="w-max h-[60vh]"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{photo.title}</div>
        </div>
      </div>
    </div>
  );
}

export default PhotoDetails;
