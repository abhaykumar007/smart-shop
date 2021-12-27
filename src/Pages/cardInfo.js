import React from "react";
import NavBar from "../components/navBar";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReactStars from "react-rating-stars-component";
function CardInfo() {
  let data = JSON.parse(localStorage.getItem("card"));
  console.log(data);
  return (
    <div>
      <NavBar />
      <main className="cardinfo">
        <div className="cardinfo-img">
          <img src={data.image} />
        </div>
        <div className="cardinfo-details">
          <div className="cardinfo-details-header">
            <h1>{data.title}</h1>
          </div>

          <div className="cardinfo-details-body">
            <p>{data.description}</p>
            <ReactStars
              count={5}
              value={data.rating.rate}
              size={30}
              isHalf={true}
              edit={false}
              activeColor="#ffd700"
            />
            <h2>$ {data.price}</h2>
            <div className="cardinfo-details-button">
              <div className="cardinfo-addToCart">
                <button>
                  <ShoppingCartIcon /> ADD TO CART
                </button>
              </div>
              <div className="cardinfo-buyNow">
                <button>
                  <FlashOnIcon /> BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CardInfo;
