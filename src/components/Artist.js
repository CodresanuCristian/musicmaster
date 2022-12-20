import React from "react";

const Artist = ({ artist }) => {

    if (!artist) return null;

    const { images, name, followers, genres } = artist;

    return(
        <div className="artist-found-wrap">
            <div>
                <img 
                    src={images[0] && images[0].url} 
                    alt='artist-profile' 
                    className="artist-image"
                />
            </div>
            <div className="details">
                <h4>Artist: {name}</h4>
                <h4>Followers: {followers.total}</h4>
                <h4>Genres: {genres.join(',')}</h4>
            </div>
        </div>
    )
}

export default Artist;