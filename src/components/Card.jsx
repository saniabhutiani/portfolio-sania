const Card = ({ img, title }) => {
  return (
    <div className="card-container">
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
