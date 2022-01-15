import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import Home from './pages/home/Home'
import Login from './pages/auth/login/Login'
import Register from './pages/auth/register/Register'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Routes>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Routes>
    </div>
  );
}

export default App;
