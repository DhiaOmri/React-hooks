import MovieCard from './MovieCard';

const MovieCards = ({ moviescard }) => {
  return (
    <div className="container">
       <div className="row">


      {moviescard.map((e, i) => (
          <MovieCard key={i} movie={e} />
        ))}
       </div>
    </div>
  );
};

export default MovieCards;