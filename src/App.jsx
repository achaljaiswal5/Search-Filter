import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";
import NoMatch from "./NoMatch";
function App() {
  const [query, SetQuery] = useState([]);
  const [data, setData] = useState([]); //stores  the fetched data as array

  const keys = ["firstName", "lastName", "email"];

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setData(data.users));
  }, []);

  const filterData = data.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(query))
  );

  return (
    <>
      <div className="app">
        <div className="input">
          <input
            type="text"
            className="search"
            placeholder="Search..."
            onChange={(e) => SetQuery(e.target.value)}
          />
        </div>

        <div className="table-cont">
          {filterData.length === 0 ? (
            <NoMatch></NoMatch>
          ) : (
            <Table data={filterData}></Table>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
