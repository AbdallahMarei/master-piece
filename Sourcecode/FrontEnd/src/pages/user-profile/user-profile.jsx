import React, { useState, useRef,useEffect } from "react";
import "./user-profile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Userprofile() {
  let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
  let navigate = useNavigate();
  const [orders,setOrders] = useState([])
  const [boards,setBoards] = useState([])
  const [refresh, setRefresh] = useState(false);

  const [firstNameState, setFirstNameState] = useState(false);
  const [firstName, setFirstName] = useState(loggedUser.name);
  const firstNameInput = useRef();

  const [email] = useState(loggedUser.email);

  const [passwordState, setPasswordState] = useState(false);
  const [password, setPassword] = useState(loggedUser.password);
  const passwordInput = useRef();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/profile-boards`,{
      params: {
        email: loggedUser.email,
        id: loggedUser.id
      }
    }).then((res) => {
      console.log(res.data)
      setBoards(res.data.board)
      setOrders(res.data.orders)
    });
  }, [refresh]);

  const changeFirstName = async () => {
    await setFirstNameState(!firstNameState);
    changeFocus(firstNameInput);
  };

  const changeFocus = (ref) => {
    ref.current.focus();
  };

  const handleDeletion = (id) => {
    axios.get(`http://localhost:8000/api/delete-order/${id}`).then(res=>{
      Swal.fire({
        title: `Deleted Successfully`,
        text: "Thank you",
        icon: "success",
        confirmButtonText: "OK",
      });
      setRefresh(!refresh);
    })
  }

  const changeFirstNameValue = () => {
    loggedUser.name = firstNameInput.current.value;
    sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    setFirstName(firstNameInput.current.value);
    setFirstNameState(!firstNameState);
    let newName = {
      name: firstNameInput.current.value
    }
    axios
      .post(`http://localhost:8000/api/name/${loggedUser.id}`, newName)
      .then((res) => console.log(res));
  };

  const changePassword = async () => {
    await setPasswordState(!passwordState);
    changeFocus(passwordInput);
  };

  const changePasswordValue = () => {
    loggedUser.password = passwordInput.current.value;
    sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    setPassword(passwordInput.current.value);
    setPasswordState(!passwordState);
    let newPassword = {
      password: passwordInput.current.value
    }
    axios
      .post(`http://localhost:8000/api/password/${loggedUser.id}`, newPassword)
      .then((res) => console.log(res));
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value) {
        sessionStorage.removeItem("loggedUser");
        Swal.fire({
          title: "Logged out successfully",
          text: "",
          icon: "success",
        });
        navigate("/login");
      }
    });
  };

  return (
    <main className="main-cont2" id="form">
      <div className="container2">
        <div className="header2">
          <h2>Your Profile </h2>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="double-container">
          <div className="field-container">
            <div className="div-container">
              <h2>Information</h2>
              <div
                className="centering-div"
                style={{ display: firstNameState ? "block" : "none" }}
              >
                <label>Name</label>
                <div className="edit-positioning">
                  <input
                    type="text"
                    defaultValue={firstName}
                    ref={firstNameInput}
                  />
                  <button className="done-btn" onClick={changeFirstNameValue}>
                    Done
                  </button>
                  <button className="done-btn" onClick={changeFirstName}>
                    X{" "}
                  </button>
                </div>
              </div>
              <div
                className="centering-div"
                style={{ display: firstNameState ? "none" : "block" }}
              >
                <label>Name</label>
                <div className="edit-positioning">
                  <div className="input-field">{firstName}</div>
                  <button className="edit-btn" onClick={changeFirstName}>
                    Edit
                  </button>
                </div>
              </div>
            </div>

            <div className="div-container">
              <div className="centering-div">
                <label>Email</label>
                <div className="edit-positioning">
                  <div className="input-field">{email}</div>
                </div>
              </div>
            </div>

            <div className="div-container">
              <div
                className="centering-div"
                style={{ display: passwordState ? "block" : "none" }}
              >
                <label>Password</label>
                <div className="edit-positioning">
                  <input
                    type="password"
                    defaultValue={password}
                    ref={passwordInput}
                  />
                  {/* TO DO SHOW/ HIDE PASSWORD */}
                  <button className="done-btn" onClick={changePasswordValue}>
                    Done
                  </button>
                  <button className="done-btn" onClick={changePassword}>
                    X{" "}
                  </button>
                </div>
              </div>
              <div
                className="centering-div"
                style={{ display: passwordState ? "none" : "block" }}
              >
                <label>Password</label>
                <div className="edit-positioning">
                  <div className="input-field">{password}</div>
                  <button className="edit-btn" onClick={changePassword}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
          {boards.length ? <div className="test-div">
            <h2>My Boards</h2>
            <div className="cart-profile-container">
              {[
                boards.map((item) => (
                  <div className="cart-item-profile" key={item.id}>
                    <img src={item.image} />
                    <p>{item.name}</p>
                    <p>
                      Stock: {item.stock} Price: ${item.price}
                    </p>
                  </div>
                )),
              ]}
            </div>
          </div> : ""}
          {orders.length ? <div className="test-div">
            <h2>My Orders</h2>
            <table className="user-reservations" >
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Total Price</th>
                <th>Phone</th>
                <th>City</th>
                <th>Status</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.total}</td>
                      <td>{order.phone}</td>
                      <td>{order.city}</td>
                      <td>{order.status}</td>
                      <td>
                        {order.status === "pending" ?
                        <i
                          class="fas fa-trash-alt"
                          onClick={() =>
                            handleDeletion(order.id)
                          }
                        ></i>
                        : ""} 
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
          </div> : ""}
        </div>
      </div>
    </main>
  );
}

export default Userprofile;
