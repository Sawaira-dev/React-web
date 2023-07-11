import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function CategoriesSection() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories').then(json => setCategories(json.data))

  }, [])

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1 className='fw-bold '>CATEGORIES</h1>
        <p className='text-secondary'>Lorem  ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum, laudantium earum sit saepe dolore aperiam vitae ullam iusto deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro nisi saepe autem?</p>
      </div>

      <div className="row">
        {
          categories.map((val, key) =>
            <div className="col-md-4 my-3 " key={key}>
              <Link className='text-decoration-none' to={`/products/category/${val}`}>
                <Card className='bg-dark text-light text-center'>
                  <Card.Body>
                    <Card.Title>{key + 1} - {val.toUpperCase().replace('-', ' ')}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          )
        }

      </div>
    </div>
  )
}
