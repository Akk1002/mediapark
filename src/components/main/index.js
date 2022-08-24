import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Info, carD, CardTitle, StyledLink } from "./style";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((result) => setData(result));
  }, [data]);

  return (
    <Info className="info">
      {data.slice(0, 6).map((item) => {
        return (
          <Card key={item.id}>
            <StyledLink to={`/home/${item.id}`}>
              <CardTitle>
                <img className="image" src={item.url} alt="" />
                <h3> {item.title.slice(0,20)}</h3>
                <button>{item.id}</button>
              </CardTitle>
            </StyledLink>
          </Card>
        );
      })}
    </Info>
  );
}

export default Main;
