import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = useSelector((store) => store.user);
  const isShowGptSearch = useSelector((store) => store.gpt.showGptSearch);

  //want to call only once after render (to add or remove user to redux store)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // call this when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //dispatch will happen on it's own as we r using onAuthStatechange API of firebase
        //no need to navigate here as event listener present
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView()); //no need to pass anything
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-44" />
      {userInfo && (
        <div className="flex items-center p-2">
          {isShowGptSearch && (
            <>
              <select
                className="p-2 bg-gray-900 text-white m-2"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </>
          )}
          <button
            className="py-2 px-4 m-2 bg-red-500 rounded-lg text-white mx-4 my-2"
            onClick={handleGptSearchClick}
          >
            {isShowGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            src={userInfo?.photoURL}
            alt="user-icon"
            className="w-10 h-10 mx-3"
          />
          <button className="text-white font-bold" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
