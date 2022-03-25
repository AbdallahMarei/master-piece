import React, { useEffect, useState } from "react";
import "./games-in-shop.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../pagination/pagination";
import Swal from "sweetalert2";

function GamesShop() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState("");
  const [categories, setCategories] = useState([]);
  const [searchField, setSearchField] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [boardsPerPage] = useState(4);

  useEffect(() => {
    axios.get("http://localhost:8000/api/boards").then((res) => {
      console.log(res.data);
      setGames(res.data.boards);
      setCategories(res.data.categories);
    });
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const submitSearch = () => {
    let filterCondition = games.filter((game) =>  game.name.toLowerCase().includes(searchField.toLowerCase()));
    if(!filterCondition.length){
      Swal.fire({
        title: "Invalid Search",
        text: "The game you searched for doesn't exist",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      setFilteredGames(filterCondition);
    }
  }

  const getCategory = (id) => {
    axios.get(`http://localhost:8000/api/category/${id}`).then((res) => {
      setFilteredGames(res.data.board);
    });
  };

  const resetCategory = () => {
    setFilteredGames("");
  };

  const getCondition = (condition) => {
    let filterCondition = games.filter((game) => game.condition === condition);
    setFilteredGames(filterCondition);
  };

  const indexOfLastBoard = currentPage * boardsPerPage;
  const indexOfFirstBoard = indexOfLastBoard - boardsPerPage;
  const currentBoards = games.slice(indexOfFirstBoard, indexOfLastBoard);

  const currentFilteredBoards = filteredGames.slice(
    indexOfFirstBoard,
    indexOfLastBoard
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        <h1 className="featured-games-title">Our Shop</h1>
        <hr />
      </div>
      <div className="shop-container">
        <div className="categories-filter-container">
          <div className="search-and-btn">
          <input
            onChange={onSearchChange}
            className="search-board-games"
            name="searchField"
            type="text"
            placeholder="Search for board game"
          />
          <button type="button" onClick={submitSearch}>Search</button>
          </div>
          <h3 style={{ fontSize: "25px" }}>Categories</h3>
          <p onClick={resetCategory}>All</p>
          {categories
            ? categories.map((category, ind) => (
                <div key={ind}>
                  <p onClick={() => getCategory(category.id)}>
                    {category.name}
                  </p>
                </div>
              ))
            : ""}
          <h3 style={{ fontSize: "25px" }}>Condition</h3>
          <div>
            <p onClick={() => getCondition("new")}>New</p>
            <p onClick={() => getCondition("used")}>Used</p>
          </div>
        </div>
        <div className="content-with-pagination">
          <div className="board-in-shop">
            {filteredGames
              ? currentFilteredBoards.length ? currentFilteredBoards
                  .map((game) => (
                    <div className="game-container-home" key={game.id}>
                      <div className="game-photo-container">
                        <img
                          className="game-photo-home"
                          src={game.image}
                          alt={game.title}
                        />
                      </div>
                      <h2 className="game-title-home">{game.name}</h2>
                      <div className="price-and-btn">
                        <span className="game-price-home">
                          Price: ${game.price}
                        </span>
                        <Link to={`/games/${game.id}`}>
                          <button className="view-game-btn">View Game</button>
                        </Link>
                      </div>
                    </div>
                  )) : filteredGames.map((game) => (
                    <div className="game-container-home" key={game.id}>
                      <div className="game-photo-container">
                        <img
                          className="game-photo-home"
                          src={game.image}
                          alt={game.title}
                        />
                      </div>
                      <h2 className="game-title-home">{game.name}</h2>
                      <div className="price-and-btn">
                        <span className="game-price-home">
                          Price: ${game.price}
                        </span>
                        <Link to={`/games/${game.id}`}>
                          <button className="view-game-btn">View Game</button>
                        </Link>
                      </div>
                    </div>
                  ))
              : currentBoards
                 .map((game) => (
                    <div className="game-container-home" key={game.id}>
                      <div className="game-photo-container">
                        <img
                          className="game-photo-home"
                          src={game.image}
                          alt={game.title}
                        />
                      </div>
                      <h2 className="game-title-home">{game.name}</h2>
                      <div className="price-and-btn">
                        <span className="game-price-home">
                          Price: ${game.price}
                        </span>
                        <Link to={`/games/${game.id}`}>
                          <button className="view-game-btn">View Game</button>
                        </Link>
                      </div>
                    </div>
                  ))}
          </div>
          <div>
            {filteredGames ? (
              <Pagination
                boardsPerPage={boardsPerPage}
                totalBoards={filteredGames.length}
                paginate={paginate}
              />
            ) : (
              <Pagination
                boardsPerPage={boardsPerPage}
                totalBoards={games.length}
                paginate={paginate}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamesShop;
