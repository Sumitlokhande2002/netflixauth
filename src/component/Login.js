import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidation } from "./validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { BG } from "./constant";
// import Header from "./Header";
const Login = () => {
  const navigate=useNavigate();
  
  const [signin, setSignin] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);


  const handleClickButton = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(name);

    const msg = checkValidation(email.current.value, password.current.value);
    setErrorMessage(msg);
    console.log(msg)

    if (!signin) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          // const user= userCredential.user;
          // console.log(user);
          setSignin(true);
           navigate("/")
        

        


          
        })
        
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
        

          navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignIn = () => {
    setSignin(!signin);
  };
  return (
    <div>
      <Header/>
      <div>
        <img
          className=" absolute h-screen object-cover md:absolute md:h-auto" 
          src={BG}
          alt="logo"
        ></img>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-full md:w-3/12 mx-auto left-0 right-0 mt-[200px] font-normal rounded-lg bg-black md:h-auto text-white  opacity-90"
         
        >
          <div className="m-4 p-4">
            <h1 className=" my-4 text-3xl text-left font-bold">
              {signin ? "Sign In" : "Sign Up"}
            </h1>
            {!signin && (
              <input
                ref={name}
                type="Text"
                placeholder="Full Name"
                className="rounded-sm   bg-gray-800 p-2 my-2 w-full bg-opacity-100"
              />
            )}
            <input
              ref={email}
              type="Text"
              placeholder="Email Address"
              className="rounded-sm bg-gray-800 p-2 my-2 w-full bg-opacity-100 "
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="rounded-sm bg-gray-800 p-2 my-2 w-full"
            />
            <p className="text-left pl-3 text-red-500 font-normal">
              {errorMessage}
            </p>
            <button
              className="p-2 my-6  bg-red-700 w-full rounded-lg"
              onClick={handleClickButton}
            >
              {signin ? "Sign in" : "Sign up"}
            </button>
            <p className="text-left text-sm p-2 cursor-pointer">
              {signin ? "New in Netflix?" : "Already have account?"}{" "}
              <span
                onClick={handleSignIn}
                className="hover:text-blue-700 hover:underline"
              >
                {signin ? "Sign Up" : "Sign In"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
