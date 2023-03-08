import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ItemDetailContainer() {
  const [a, setUser] = useState([]);
  
    useEffect(() => {
      fetch("https://reqres.in/api/users")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setUser(json.data);
      });
    }, []);

  return (
    <div>
      <ul>
        {a.map((datos) => (
          <li key={datos.id}>
            <img src={datos.avatar} alt={datos.first_name}/>
            <h4>{`${datos.first_name} ${datos.last_name}`}</h4>
            <p>{datos.email}</p>
            <Link to={`/category/${datos.id}`}>
              <button>Ver detalles</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemDetailContainer;