import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "./stylePar";

const Param = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return (
    <Card>
      <img src={data?.url} alt={data.title} />
      <div>
        <h1>{data?.title}</h1>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </Card>
  );
};

export default Param;
