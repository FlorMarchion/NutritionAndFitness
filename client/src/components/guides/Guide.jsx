import "./../../styles/guide.css";

export const Guide = (props) => {
  const { guides } = props;

  return (
    <div>
      {guides?.map(guide => (
        <div key={guide.id}>
          <h2>{guide.title}</h2>
          <img src={guide.image} alt={guide.title} />
          <h5>{guide.description}</h5>
          <h4>Categoría: {guide.categoryGuide.name}</h4>
          <h4>Dieta: {guide.diet}</h4>
          <p>Duración: {guide.duration}</p>
          <h3>Precio: ${guide.price}</h3>
        </div>
      ))}
    </div>
  )
}