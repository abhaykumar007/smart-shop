import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import Carouselcard from "../components/carousel";
import Footer from "../components/footer";

function DashBoard() {
  const [product, setProduct] = useState([]);
  const history = useHistory();
  async function getData() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getData();
  }, []);

  function handelViewMore(info) {
    localStorage.setItem("card", JSON.stringify(info));
    history.push("/cardinfo");
  }
  return (
    <div>
      <div>
        <NavBar />
        <Carouselcard />
      </div>
      <div className="dash-card">
        {product.length !== 0 ? (
          product.map((element, i) => (
            <div key={i}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={element.image}
                  className="cardImg"
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    {element.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => handelViewMore(element)} size="small">
                    View More
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))
        ) : (
          <h1>Loding..........</h1>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default DashBoard;
