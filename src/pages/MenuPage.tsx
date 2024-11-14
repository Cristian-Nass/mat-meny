import useMenu from "../store/useMenu";

const MenuPage = () => {
  const { data } = useMenu();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "48px 10px" }}>
      <h1>{data.name}</h1>
      {data.menu.map((category, categoryIndex) => (
        <div key={categoryIndex} className='menu-category'>
          <h2>{category.category}</h2>
          <div>
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} style={{ padding: "4px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    backgroundColor: "#ffe6db",
                    borderRadius: "10px",
                  }}
                >
                  <h3>{item.title}</h3>
                  <p className='ingredients'>{item.ingredients}</p>
                  <span className='price'>{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
