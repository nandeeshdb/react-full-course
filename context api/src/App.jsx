import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
export default function App() {
  return (
    <UserContextProvider>
    <h1 className="text-3xl font-bold underline">
      Context Api React
    </h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}