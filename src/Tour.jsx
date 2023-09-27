import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{`${price} £`}</span>

      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show Less" : "Read More"}
          </button>
        </p>
      </div>
      <button
        type="button"
        className="btn btn-block delete-btn"
        onClick={() => removeTour(id)}
      >
        Remove Tour
      </button>
    </article>
  );
};
export default Tour;
