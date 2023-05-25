
const Card = ({ title, description, imageUrl }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px', margin: '10px', borderRadius: '5px', width:'50px' }}>
      <img src={imageUrl} alt="Card" style={{ width: '100%', marginBottom: '10px' }} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
