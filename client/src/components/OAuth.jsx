import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/User/userSlice.js";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
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
        console.error("Backend error:", errorData.message);
        alert("Failed to authenticate with Google. Please try again.");
        return;
      }

      const data = await res.json();
      dispatch(signInSuccess(data.user)); // Save user data in Redux
      navigate("/");
    } catch (error) {
      console.error("Google Sign-In failed:", error.message);
      alert("Google Sign-In failed. Please try again.");
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
