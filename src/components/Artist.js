import React from "react";

const Artist = ({ artist }) => {

    if (!artist) return null;

    const { images, name, followers, genres } = artist;

    return(
        <div>
            <h3>{name}</h3>
            <p>{followers.total}</p>
            <p>{genres.join(',')}</p>
            <img 
                src={images[0] && images[0].url} 
                alt='artist-profile' 
                style={{
                    width:260,
                    height:260,
                    borderRadius:130,
                    objectFit: 'cover'
                }}
            />
        </div>
    )
}

export default Artist;