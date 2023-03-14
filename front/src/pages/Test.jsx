const Test = () => {
  const data = [
    { name: "gutal", id: 100 },
    { name: "alim", id: 10 },
    { name: "malgai", id: 11 },
    { name: "tsunh", id: 12 },
  ];

  const OnClick = (id) => {
    console.log(id)
  }

  return (
    <>
      <h1>Test</h1>
      <div>
        {data.map((el) => {
          return <button key={el.id} onClick={() => OnClick(el.id)}>{el.name}</button>;
        })}
      </div>
    </>
  );
};

export default Test;
