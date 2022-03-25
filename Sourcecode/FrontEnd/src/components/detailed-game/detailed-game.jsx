import React, { useState, useEffect } from "react";
import "./detailed-game.css";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function DetailedGame({ setLoggedUser }) {
  const { id } = useParams();
  const [games, setGames] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [reviews, setReviews] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("loggedUser"))
      ? JSON.parse(sessionStorage.getItem("loggedUser"))
      : ""
  );

  useEffect(() => {
    axios.get(`http://localhost:8000/api/boards/${id}`).then((res) => {
      console.log(res.data);
      setGames(res.data.board);
      let newRecommended = res.data.reco.filter(
        (reco) => reco.id !== res.data.board[0].id
      );
      setRecommended(newRecommended);
    });
    axios.get(`http://localhost:8000/api/reviews/${id}`).then((res) => {
      setReviews(res.data.review);
    });
  }, [id, refresh]);

  const existingCartItem = games[0]
    ? user
      ? user.cartItems.find((cartItem) => cartItem.id === games[0].id)
      : ""
    : "";

  const addToCart = (item) => {
    if (!user) {
      navigate("/login");
    } else {
      const existingCartItem = user.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingCartItem) {
        user.cartItems.map((cartItem) =>
          cartItem.id === item.id ? (cartItem.quantity += 1) : cartItem
        );
        setSessionStorage(user);
      } else {
        user.cartItems.push({ ...item, quantity: 1 });
        setSessionStorage(user);
      }
    }
  };
  const setSessionStorage = (user) => {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    setUser(JSON.parse(sessionStorage.getItem("loggedUser")));
    setLoggedUser(JSON.parse(sessionStorage.getItem("loggedUser")));
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const addReview = () => {
    let newReview = {
      user_name: user.name,
      board_id: id,
      review: reviewText,
    };
    axios.post("http://localhost:8000/api/reviews", newReview).then((res) => {
      if (res.data.message === "you already submitted a review") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res.data.message}`,
        });
      } else {
        Swal.fire({
          title: `Submitted review`,
          text: "Thank you for your review",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
      setReviewText('')
      setRefresh(!refresh);
    });
  };

  return (
    <div>
      {games.map((game) => (
        <div className="detailed-game-container" key={game.id}>
          <div className="game-photo-container-detailed">
            <img
              className="game-photo-detailed"
              src={game.image}
              alt={game.title}
            />
          </div>
          <div className="price-and-btn-detailed">
            <h2 className="game-title-detailed">{game.name}</h2>
            <p className="game-desc-detailed">{game.description}</p>
            <div className="all-info">
              <div className="info-left">
                <span className="game-price-detailed">
                  Price: ${game.price}
                </span>
                <span className="game-price-detailed">Stock: {game.stock}</span>
                <span className="game-price-detailed">
                  Condition: {game.condition}
                </span>
              </div>
              <div className="info-right">
                <span className="game-price-detailed">
                  Added By User: {game.username}
                </span>
                <span className="game-price-detailed">
                  Category: {game.cat_name}
                </span>
              </div>
            </div>
            {user.name !== game.username ? (
              game.stock ? (
                existingCartItem &&
                existingCartItem.quantity === existingCartItem.stock ? (
                  ""
                ) : (
                  <button
                    className="buy-game-btn"
                    onClick={() => addToCart(game)}
                  >
                    Add to Cart
                  </button>
                )
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
      <h1 className="recommended-title">Leave a Review</h1>
      <div className="review-container">
        <div>
          {reviews.length
            ? reviews.map((review) => (
                <div className="review-info" key={review.id}>
                  <p className="review-title">{review.review}</p>
                  <p className="review-user">Posted by : {review.user_name}</p>
                  <p className="review-user">Posted On : {review.created_at.substring(0,10)}</p>
                </div>
              ))
            : <div className="no-reviews">No Reviews Yet</div>}
        </div>
        <div className="review-input-container">
          <textarea
            onChange={handleReviewChange}
            name="reviewText"
            className="text-review"
            rows="4"
            cols="100"
            value={reviewText}
          ></textarea>
          <button onClick={addReview} className="add-review-btn">
            Add a Review
          </button>
        </div>
      </div>
      {recommended.length ? (
        <h1 className="recommended-title">Recommended Board Games</h1>
      ) : (
        ""
      )}
      <div className="recommended-container-home">
        {recommended
          ? recommended.map((game) => (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="game-container-home"
                key={game.id}
              >
                <div className="game-photo-container">
                  <img
                    className="game-photo-home"
                    src={game.image}
                    alt={game.title}
                  />
                </div>
                <h2 className="game-title-home">{game.name}</h2>
                <div className="price-and-btn">
                  <span className="game-price-home">Price: ${game.price}</span>
                  <Link to={`/games/${game.id}`}>
                    <button className="view-game-btn">View Game</button>
                  </Link>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default DetailedGame;
