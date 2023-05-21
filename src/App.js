import {Routes,Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Booklist from "./Components/Booklist";
import BookDetails from "./Components/BookDetails";
import Favorites from "./Components/Favorites";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/login";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import EditProfile from "./Components/EditProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Booklist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
