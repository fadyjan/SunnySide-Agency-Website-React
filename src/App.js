import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import MainImgContainer from "./Components/MainImgContainer/MainImgContainer";
import TableContainer from "./Components/TableContainer/TableContainer";
import ClientReviews from "./Components/ClientReviews/ClientReviews";
import FooterAlbum from "./Components/FooterAlbum/FooterAlbum";
import FooterBar from "./Components/FooterBar/FooterBar";
function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <MainImgContainer></MainImgContainer>
        <TableContainer></TableContainer>
        <ClientReviews></ClientReviews>
        <FooterAlbum></FooterAlbum>
        <FooterBar></FooterBar>
    </div>
  );
}

export default App;
