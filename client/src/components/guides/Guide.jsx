import "./../../styles/guide.css";

export const Guide = (props) => {
  const { guides, filter } = props;

  return (
    <div>
      {guides?.map(guide => (
        <div key={guide.id}>
          <h2>{guide.title}</h2>
          <img src={guide.image} alt={guide.title} />
          <h4>{guide.categoryGuide.name}</h4>
          <h5>{guide.description}</h5>
          <p>{guide.duration}</p>
          <h3>${guide.price}</h3>
        </div>
      ))}
    </div>
  )
}