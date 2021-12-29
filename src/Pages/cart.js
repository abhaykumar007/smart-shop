import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import { Link, useHistory } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import emptyCart from "./../components/emptyCart.gif";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

function Cart() {
  const history = useHistory();
  const [price, setPrice] = useState();
  let data = JSON.parse(localStorage.getItem("cart"));
  console.log(data);

  useEffect(() => {
    let ref = 0;
    if (data !== undefined && data !== null) {
      data.map((element) => (ref = ref + element.quantity * element.price));
    }
    setPrice(ref);
  }, [data]);

  function handelLink(ref) {
    localStorage.setItem("card", JSON.stringify(ref));
    history.push("/cardinfo");
  }

  function handelQuamtityButton(ref, str) {
    let idx = data.indexOf(ref);
    let variable = data.slice(0, idx);
    if (str == "ADD") {
      ref.quantity = ref.quantity + 1;
      variable.push(ref);
    } else if (str == "SUB") {
      if (ref.quantity == 1) {
        alert(`YOU REMOVE THIS ITEM FROM CART`);
      } else {
        ref.quantity = ref.quantity - 1;
        variable.push(ref);
      }
    }
    variable.push(...data.slice(idx + 1, data.length));
    localStorage.setItem("cart", JSON.stringify(variable));
    history.push("/cart");
  }

  function handelRemove(ref) {
    let variable = data.filter((element) => element !== ref);
    localStorage.setItem("cart", JSON.stringify(variable));
    history.push("/cart");
  }

  return (
    <div>
      <NavBar />

      {data !== undefined && data !== null && data.length > 0 ? (
        <div className="cart-parent">
          <div className="cart">
            <div className="cart-header">
              <h2>Shopping Cart ({data.length})</h2>
            </div>
            {data.map((element, i) => (
              <main className="cart-main" key={i}>
                <div className="cart-img">
                  <img src={element.image} />
                </div>
                <div className="cart-body">
                  <div className="cart-body-header">
                    <div onClick={() => handelLink(element)}>
                      <h3>{element.title}</h3>
                    </div>
                  </div>

                  <div className="cart-body-category">
                    <h4>Category :</h4>
                    <p>{element.category}</p>
                  </div>
                  <div className="cart-body-category">
                    <h4>Rating : </h4>
                    <ReactStars
                      count={5}
                      value={element.rating.rate}
                      size={24}
                      isHalf={true}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <h3>
                      ${" "}
                      {Math.round(element.price * element.quantity * 100) / 100}
                    </h3>
                  </div>
                  <div className="cart-button">
                    <div className="cart-quantity">
                      <button
                        onClick={() => handelQuamtityButton(element, "SUB")}
                      >
                        -
                      </button>
                      <div className="cart-quantity-value">
                        {element.quantity}
                      </div>
                      <button
                        onClick={() => handelQuamtityButton(element, "ADD")}
                      >
                        +
                      </button>
                    </div>
                    <div
                      className="cart-remove"
                      onClick={() => handelRemove(element)}
                    >
                      <p>REMOVE</p>
                    </div>
                  </div>
                </div>
              </main>
            ))}
          </div>
          <div className="cart-price">
            <h2>PRICE RATE</h2>

            <div className="cart-price-chart">
              <div className="cart-price-chart-child">
                <h3>PRICE ({data.length} items)</h3>
                <h3> $ {Math.round(price * 100) / 100} </h3>
              </div>
              <div className="cart-price-chart-child">
                <p>Discount</p>
                <p className="green">$ {Math.round((price / 4) * 100) / 100}</p>
              </div>
              <div className="cart-price-chart-child">
                <p>Shipping Charges</p>
                <p className="green">FREE</p>
              </div>
              <div className="cart-price-chart-child top-border">
                <h3>TOTAL</h3>
                <h3> $ {Math.round((price - price / 4) * 100) / 100}</h3>
              </div>
            </div>

            <div className="cart-price-button">
              <button>PLACE ORDER</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h1>
            Cart is Empty <SentimentVeryDissatisfiedIcon className="sad-icon" />
          </h1>
          <strong>
            <Link to="/">to Continue shopping</Link>
          </strong>
          <img src={emptyCart} alt="empty cart" />
        </div>
      )}
    </div>
  );
}

export default Cart;
