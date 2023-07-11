import React from 'react'
// import Lottie from 'react-lottie';
// import animationData from './lotties/Wellcome';


// export default function Signup() {
//   return (
//     <div>Signup</div>
//   )
// }
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';



function Signup() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };
 
  return (
    // style={{ backgroundColor: '#f50056' }}
    <section className="contact py-5 " >
  <div className="container ">
    <div className="text-center my-5 fw-bold">
      <h1>SignUp</h1>
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6 col-12">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control border border-dark" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control border border-dark"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control border border-dark"
              id="inputAddress"
              placeholder=".."
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control border border-dark" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select border border-dark">
              <option selected="">Choose...</option>
              <option>Sindh</option>
              <option>Balochistan</option>
              <option>Punjab</option>
              <option>NWFP</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control border border-dark" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label " htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-dark">
              Sign in
            </button>
          </div>
        </form>
       
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-start p-4">
      <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration={2000}
          src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=2000"
          className="img-fluid img-thumbnail p-4  w=4000" style={{ backgroundColor: '#f50056'}}
        />
      {/* <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div> */}
      </div>
    </div>
  </div>
</section>

  );
}

export default Signup;