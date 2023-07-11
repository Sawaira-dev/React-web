import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


export default function Login() {
  return (
    <section className="contact py-5 " >
  <div className="container ">
    <div className="text-center my-5 fw-bold">
      <h1>Login</h1>
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6 col-12">
        <form className="row g-3">
        <div className="container p-4"></div>
        <div className="container p-4"></div>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control border border-dark" id="inputEmail4" />
          </div>
          {/* <div className="container p-4"></div> */}
          <div className="col-md-12">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control border border-dark"
              id="inputPassword4"
            />
          </div>
          {/* <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control border border-dark"
              id="inputAddress"
              placeholder=".."
            />
          </div> */}
          {/* <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control border border-dark" id="inputCity" />
          </div> */}
          {/* <div className="col-md-4">
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
          </div> */}
          {/* <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control border border-dark" id="inputZip" />
          </div> */}
          {/* <div className="col-12">
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
          </div> */}
          <div className="col-12">
            <button type="submit" className="btn btn-dark">
              Login
            </button>
          </div>
        </form>
       
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-start p-4">
      <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration={2000}
          src="https://media.istockphoto.com/id/1282481785/vector/2-step-verification-illustration-flat-design.jpg?s=612x612&w=0&k=20&c=_HhPgi2ec9ofAAGsJwENxejXkNCDhcQdpp2rS8cwmw8="
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

  )
}

// import React, { useContext, useEffect } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react'
// import { Link } from 'react-router-dom';
// import {GlobalContext} from '../Context/Context'


// export default function Login() {

  
//     const [email,setEmail]= useState("")
//     const [password,setPassword]= useState("")
//     const {state , dispatch } = useContext(GlobalContext)

//     // useEffect (()=>{
//     //   console.log(state)
//     // },[])
  
//    // const demo=(val) => console.log(val)
//    const userLogin=(e)=>{
//     e.preventDefault();
//     const payload={email,password}
//     console.log(payload)

//     dispatch({
//       type :"LOGIN_USER",
//       payload : payload
//     })


//    }
  
//     return (
//       <>

//     <div className=" mt-5  d-flex justify-content-center align-items-center" > 
        
//       <img className=" mt-2 mb-1" width={200} height={200} src="https://i.redd.it/8gemk0quwmb71.jpg" alt="" srcset="" />
// {/*      
//       <h2 className="text-center mt-5 mb-1">Contact Us</h2>
//       <h5 className="text-center mb-5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, possimus?</h5> */}
//             <div className="col">
//       <div className='col-md-6 m-auto h-100 py-10'>
//         <Form onSubmit={userLogin}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label><h6>Email address</h6></Form.Label>
//           <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
//           <Form.Text className="text-muted">
//            {email}
//           </Form.Text>
//         </Form.Group>
  
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label><h6>Password</h6></Form.Label>
//           <Form.Control type="password" placeholder="Password"value={password} onChange={(e)=> setPassword(e.target.value)} />
//         </Form.Group>
//         <Button  variant="dark w-100" type="submit">
//           Sign In
//         </Button>
//       </Form>
//       <div className="text-center ">
//         {/* Not a member? <Link className='text-decoration-none' to={"/signup"}>Sign Up</Link> */}
//         <br></br>Or continue with Social Accounts
//       </div>
//       <div className="text-center pt-2">
//       <Button  variant="primary w-100" type="submit">
//       <svg xmlns="http://www.w3.org/2000/svg"color='white' width="19" height="19" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
//               <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
//             </svg>   LogIn with facebook
//         </Button>
//         <div className="text-center pt-3">
//         <Link className='text-decoration-none' to={"/signup"}>Sign Up </Link>|Forget Password
//       </div>
       
//       </div>
//       </div>
//       </div>
//       </div> 
//       </>
//     )
//   }


