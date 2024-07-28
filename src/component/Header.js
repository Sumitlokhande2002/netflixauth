import { useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "./constant";
import { toggleGptSearchView } from "./utils/gptSlice";
import { changeLanguage } from "./utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
const [btnName,setBtnName]=useState("GPT Search");
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
const movies= useSelector((store)=>store.movie?.nowPlayingMovies)


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");

        // ...
      }
    });
    // return(()=>unsubscribe)
  }, []);
  
  const toggleGptSearch=()=>{
    dispatch(toggleGptSearchView());
    {(btnName==="GPT Search")?(setBtnName("Main Page")):(setBtnName("GPT Search"))}

  }
  const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value))

  }
  
  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-30 flex justify-between">
      <img className="w-24 md:w-44" src={LOGO} alt="logo" />
           {location.pathname === '/browse' && (
        <div> 

         {/* {showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white cursor-pointer rounded-md" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
          </select >)}
          {/* <button className="mt-3 py-1 m-3 bg-purple-700 rounded-lg px-2 text-white hover:border border-solid border-black" onClick={toggleGptSearch}>{btnName}
          </button> */}

          <button
            onClick={handleSignOut}
            className="mt-3 py-1 bg-red-700 rounded-lg px-2 text-white hover:border border-solid border-black"
          >
            Sign Out   
          </button>
           </div>
      )}
    </div>
  );
};

export default Header;
