import Carousel from 'react-bootstrap/Carousel';
import '../Assets/Css/Carousel.css'

function UncontrolledExample( { movies } ) {

    const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <Carousel className='carousel'>
       {movies.slice(0, 3).map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            className="carousel-img"
            src={`${imagePath}${movie.backdrop_path}`}
            alt={movie.title}
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p className='carousel-overview' >{movie.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;