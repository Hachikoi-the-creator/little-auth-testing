import { auth } from "../firebase";

export default function Logout() {
  return <button onClick={() => auth.signOut()}>Sign out</button>;
}
