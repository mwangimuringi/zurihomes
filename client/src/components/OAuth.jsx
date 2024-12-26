import {useState} from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/User/userSlice.js";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Extract user details and idToken
      const { displayName, email, photoURL } = result.user;
      const idToken = await result.user.getIdToken(); // Fetch the ID token from Firebase

      // Send the data to the backend
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: displayName,
          email,
          photo: photoURL,
          idToken, // Pass the idToken to the backend
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message);
        return;
      }

      const data = await res.json();
      dispatch(signInSuccess(data.user)); // Save user data in Redux
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
      aria-label="Sign in with Google"
    >
      Continue with Google
    </button>
  );
}
