import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  const [user, loading] = useAuthState(auth);

  //Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // console.log(result.user);
      console.log("worked :D");
    } catch (error) {
      console.log(error);
    }
  };

  // const fbProvider = new FacebookAuthProvider();
  // const FacebookProvider = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, fbProvider);
  //     const credantial = await FacebookAuthProvider.credentialFromResult(
  //       result
  //     );
  //     const token = credantial.accessToken;
  //     let photoUrl = result.user.photoURL + "?height=500&access_token=" + token;
  //     await updateProfile(auth.currentUser, { photoURL: photoUrl });
  //     route.push("/dashboard");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (user) {
  //     // got an user

  //     route.push("/dashboard");
  //   } else {
  //     console.log("login");
  //   }
  // }, [user]);
  if (user) {
    console.log("got an user :D", user);
  }

  return (
    <div>
      <h2>Join right now, right here, emerge</h2>
      <div>
        <button onClick={loginWithGoogle}>Sign in with Google</button>
        <p>name: {user?.displayName}</p>
        <p>email: {user?.email}</p>
      </div>
    </div>
  );
}
