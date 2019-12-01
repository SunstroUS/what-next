const Idea = props => {
  let { name } = props.idea;

  return (
    <div>
      <div className="card">
        <p>{name}</p>
      </div>

      <style jsx>{`
        .card {
          border: 2px solid rgb(51, 51, 51);
          border-radius: 10px;
          padding: 2rem;
        }

        .card:hover {
          cursor: pointer;
          transition: border 0.2s ease 0s;
          border: 2px solid #fff;
        }
      `}</style>
    </div>
  );
};

export default Idea;