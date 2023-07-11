// import React from 'react'

// export default function Products() {
//     return (
//         <div>Products</div>
//     )
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

export default function Products() {
    
//   const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  const getProduct = () => {
    let api = `https://fakestoreapi.com/products`;

    axios
      .get(api)
      .then((success) => {
        console.log(success);
        setProducts(success.data);
        console.log("Test Check ", products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   useEffect(() => {
  //     axios
  //       .get(`https://fakestoreapi.com/products/category/${categoryName}`)
  //       .then((json) => setProducts(json.data.products));
  //     console.log(json.data.products);
  //   }, [categoryName]);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container p-5">
        <div className="container fw-bold fs-4 text-center ">ALL PRODUCTS</div>
      {/* <div className="my-5 text-center">
        <h1 className="fw-bold">{categoryName.toUpperCase()}</h1>
        <p className="text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
          officia nihil! Nemo sunt reprehenderit voluptates amet itaque libero
          in unde, molestias illo veniam, dolore veritatis eaque ipsum.
          Molestiae, nam architecto!
        </p>
      </div> */}

      <div className="row">
        {products.map((val, key) => (
          <div className="col-md-6 my-4" key={key}>
            <Link className="text-decoration-none" to={`/products/${val.id}`}>
              <Card>
                <Card.Img variant="top" src={val.thumbnail} />
                <Card.Body>
                  <Card.Title>
                    {val.title} - {val.price}$
                  </Card.Title>
                  <Card.Text>{val.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
