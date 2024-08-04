import React from "react";
import { useState, useEffect } from "react";

const SearchComponent = () => {
  //setar los hooks useState
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  //funcion para traer los daros de la API
  const URL = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  //funcion de metodo de filtrado
  /*modo 1
  let result = [];
  if (!search) {
    result = users;
  } else {
    result = users.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  } */

  /* modo de filtrado 2*/

  const result = !search
    ? users
    : users.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLowerCase())
      );

  //funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target);
  };

  useEffect(() => {
    showData();
  }, []);

  //renderizamos la vista

  return (
    <div>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Buscar"
        className="form-control"
      />

      <table className="table table-striped table-hover mt-5 shadow-1g">
        <thead>
          <tr className="bg-curso text-white">
            <th>Nombre</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {result.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponent;

//USAMOS JSON plce holder para la API;
