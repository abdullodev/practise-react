import React, { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";
import { BiSearch } from "react-icons/bi";

const App = () => {
  const [search, setSearch] = useState("");

  const inputFunc = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-12  inputClass">
          <input
            className="inputSearch"
            type="text"
            placeholder="Search..."
            onChange={inputFunc}
          />
          <BiSearch
            style={{
              marginLeft: "-40px",
              color: "#000080",
              fontSize: "1rem",
            }}
          />
        </div>
      </div>
      <div className="row mt-5">
        {JSONDATA.filter((val) => {
          if (search === "") {
            return val;
          } else if (
            val.first_name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase())
          ) {
            return val;
          } else if (
            val.ip_address
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase())
          ) {
            return val;
          }
        }).map((val) => (
          <div className="col-md-6 col-xl-4 col-sm-12 mt-2" key={val.id}>
            <div className="card">
              <div className="card-header">
                <h3>{val.first_name}</h3>
                <p>{val.ip_address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
