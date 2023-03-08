import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [a, setUser] = useState([]);

    const Params = useParams();
    const idItem = Params.idItem;
  
    useEffect(() => {
      fetch(`https://reqres.in/api/users/${idItem}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setUser(json.data);
      });
    }, []);
  
    return(
      <div className='main__container'>
        <>
        <ul>
            <li key={a.id}>
              <img src={a.avatar} alt={a.first_name}/>
              <h4>{`${a.first_name} ${a.last_name}`}</h4>
              <p>{a.email}</p>
            </li>
        </ul>
        </>
      </div>
    );
  }

  export default ItemDetailContainer; 