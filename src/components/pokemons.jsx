import axios from "axios";
import { useEffect, useState } from "react";
import Logo from "../assets/images/Title.png";
import InputField from "../common/inputField";
import CardImg from "../assets/images/Bulbasaur.png";

const colorMap = {
    Grass: '#63bc5a',
    Water: '#5090d6',
    Fire: '#ff9d55'
  };
const Pokemons = () => {
  const [alldata, setAllData] = useState([]);
   const [search, setSearch] = useState("");

  const FeatchPokemonData = async () => {
    let tokendata = localStorage.getItem("token");
    const data = await axios.get(
      `https://pokemon-be-lmwu.onrender.com/v3/pokemon`,
      {
        headers: {
          Authorization: `Bearer ${tokendata}`,
        },
      },
    );
    setAllData(data.data?.data);
  };



  useEffect(() => {
    FeatchPokemonData();
  }, []);

  const displayedData =
  search.trim() === ""
    ? alldata
    : alldata.filter((pokemon) =>
        pokemon?.name?.english?.toLowerCase().includes(search.toLowerCase())
      );


  return (
    <>
      <div className="contander-fluid header">
        <div className="container">
          <div>
            <img src={Logo} alt="pokedex" className="navbar-logo" />
          </div>
          <div className="search-field">
            <InputField
              placeholder="Search By Name"
              className="pokemon-searchField"
              value={search}
          onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="row">
            {displayedData && displayedData.map((value) => {
                const backgroundColor = colorMap[value?.type[0]] || '#ccc';
              return (
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card-section" style={{backgroundColor:backgroundColor}}>
                    <h3>#00{value.id}</h3>
                    <img
                      src={value?.image?.hires}
                      alt="pokedex"
                      className="card-img"
                    />
                  </div>
                  <div className="card-secon-section">
                  
                  <h3 >{value?.name?.english}</h3>
                    <div className="button-div">
                      {value?.type?.length === 1 ? (
                        <button
                          type="button"
                          class="btn btn-primary card-btn-1"
                          style={{backgroundColor:backgroundColor}}
                        >
                          {value?.type[0]}
                        </button>
                      ) : (
                        <>
                          <button
                            type="button"
                            class="btn btn-primary card-btn-1"
                          >
                            {value?.type[0]}
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary card-btn-1"
                          >
                            {value?.type[1]}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
           
          </div>
        </div>
      </div>
    </>
  );
};
export default Pokemons;

