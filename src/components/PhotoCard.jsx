import React from 'react';

const PhotoCard = ({ e }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={e.url}
        alt={e.title}
        className="w-full h-58 object-cover"
      />
      
    </div>
  );
};

export default PhotoCard;
