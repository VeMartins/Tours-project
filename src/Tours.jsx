import Tour from "./Tour";

const Tours = ({ data, removeTour, getData }) => {
  console.log("data length", data.length);
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {data.map((tour) => (
          <Tour key={tour.id} removeTour={removeTour} {...tour} />
        ))}
      </div>
      {data.length === 0 && (
        <button type="button" onClick={getData} className="btn btn-block">
          Get Tours
        </button>
      )}
    </section>
  );
};
export default Tours;
