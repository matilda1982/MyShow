export const Center = ({ foundTVbyID, rating }) => {
  let time = [];
  time = [
    foundTVbyID?.first_air_date?.substring(0, 4),
    foundTVbyID?.last_air_date?.substring(0, 4),
  ];
  return (
    <div className="center">
      <h1>
        {foundTVbyID?.name} <br />
        {`(${time[0]}-${time[1]})`}
      </h1>
      <div className="genresBox">
        <div className="rating">{`${rating}+`}</div>
        {foundTVbyID &&
          foundTVbyID?.genres &&
          foundTVbyID?.genres?.map((genre) => {
            return <p key={genre?.id}>{genre?.name}</p>;
          })}
      </div>
      <button className="addToWatch">I will watch</button>
      <div className="aboutFilm">
        <p>
          <i>{foundTVbyID?.tagline}</i>
        </p>
        <h3>Overview</h3>
        <span>{foundTVbyID?.overview}</span>
      </div>
      <div>
        <h3>{foundTVbyID?.created_by?.[0]?.name}</h3>
        <p>creator</p>
      </div>
    </div>
  );
};
