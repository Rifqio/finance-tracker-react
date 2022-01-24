import { BrowserRouter as Routes, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Dashboard from './pages/home/Dashboard'
import Home from './pages/home/Home'
import Login from './pages/auth/login/Login'
import Register from './pages/auth/register/Register'
import Navbar from './components/navbar/Navbar'

function App() {
  const { auth, user } = useAuthContext()
  return (
    <div className="App">
      {auth && (
      <Routes>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
            {!user && <Home />}
            {user && <Dashboard />}
          </Route>

          <Route path="/login">
            {user && <Redirect to="/" />}
            {!user && <Login />}
          </Route>

          <Route path="/register">
            {user && <Redirect to="/" />}
            {!user && <Register />}
          </Route>
        </Switch>
      </Routes>
      )}
    </div>
  );
}

export default App;
