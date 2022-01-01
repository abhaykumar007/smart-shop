import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { useHistory } from "react-router-dom";
import logo from "./documents/logo.png";
import firebase from "./../firebase";
import { signout } from "./../Helpers/auth";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

function NavBar() {
  const history = useHistory();
  const [userInfo, setuserInfo] = useState([]);
  const [flag, setFlag] = useState(false);
  let cart = JSON.parse(localStorage.getItem("cart"));
  let user = localStorage.getItem("userEcom");
  // console.log("navbar", user);

  useEffect(() => {
    if (user) {
      readDataFromDB();
    }
  }, []);
  function notification(title, message, type) {
    store.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "top",
      container: "top-center",
      animationIn: ["animated", "animate__fadeIn"],
      animationOut: ["animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
      },
    });
  }
  const readDataFromDB = () => {
    firebase
      .database()
      .ref("Ecom-user")
      .on("value", (snapshot) => {
        let messages = [];

        snapshot.forEach((snap) => {
          const currMsg = snap.val();
          messages.push({
            msg: currMsg,
          });
        });
        // console.log("Messages are", messages);
        setuserInfo(() =>
          messages.filter((element) => element.msg.email == user)
        );
      });
  };
  // console.log("userInfo", userInfo);

  function handelMouseOver() {
    setFlag(true);
  }
  function handelMouseLeave() {
    setFlag(false);
  }
  async function handelSignOut() {
    try {
      await signout();
      notification("Thanks", "Your Successfully SignOut", "success");
      localStorage.removeItem("userEcom");
      localStorage.removeItem("cart");
      setFlag(false);
      setTimeout(() => history.push("/"), 1000);
    } catch (error) {
      console.log(error);
      notification("OOPS", error.message, "danger");
    }
  }

  return (
    <div>
      <ReactNotification />
      <div className="nav-bar">
        <div className="nav-left">
          <img src={logo} />
          {/* <h3>SMART-SHOP</h3> */}
        </div>
        <div className="nav-input">
          <SearchIcon className="icon" />
          <input />
        </div>
        <div className="nav-right">
          <HomeIcon onClick={() => history.push("/")} className="icon" />

          <div className="nav-cart">
            <ShoppingCartIcon
              onClick={() => history.push("/cart")}
              className="icon"
            />
            {cart?.length > 0 ? (
              <div className="nav-cart-length">
                <p>{cart.length}</p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="nav-cart">
            <PersonIcon
              onClick={() => history.push("/signin")}
              className="icon"
            />
            <div>
              <p>
                Hi, <br />{" "}
                {user && userInfo.length > 0 ? userInfo[0].msg.name : "User"}
              </p>
            </div>
            <div className="nav-signOut">
              {user ? (
                <button
                  onMouseEnter={() => handelMouseOver()}
                  onMouseLeave={() => handelMouseLeave()}
                  onClick={handelSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
      {flag ? (
        <div
          style={{
            marginLeft: "75vw",
            marginTop: "2vh",
            color: "#ffffff",
            backgroundColor: "#232f3e",
            padding: "2vh",
            borderRadius: "15px",
          }}
        >
          {user && userInfo.length > 0 ? (
            <div>
              <p>
                Thanks for Shopping{" "}
                <strong>
                  {userInfo[0].msg.name} {userInfo[0].msg.lastName}
                </strong>
                . <br />
                We Hope You Came Back.
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default NavBar;
