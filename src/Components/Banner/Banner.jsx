import './Banner.css';
import { useEffect, useState } from 'react';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../Constants/constants';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`);
      console.log('API Response:', response.data);
      setMovies(response.data.results || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []); // Fetch movies when the component mounts

  useEffect(() => {
    // Change movie every 5 seconds when there are movies
    if (movies.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
      }, 5000);

      // Clear the interval when the component is unmounted or when movies change
      return () => clearInterval(intervalId);
    }
  }, [movies, currentMovieIndex]);

  const currentMovie = movies[currentMovieIndex];

  const getImageUrl = (movie) => {
    // Check if the movie has 'backdrop_path' property, otherwise, use 'name'
    const imageKey = movie.backdrop_path ? 'backdrop_path' : 'name';
    return `${imageUrl}${movie[imageKey]}`;
  };


  return (
    <div
    style={{backgroundImage: `url(${currentMovie ? getImageUrl(currentMovie) : ''})`, }}
      className="Banner"
    >
      <div className="content">
        <h1 className="title">{currentMovie ? currentMovie.title : ''}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="Mylist">Add to My List</button>
        </div>
        <h1 className="description">{currentMovie ? currentMovie.overview : ''}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
