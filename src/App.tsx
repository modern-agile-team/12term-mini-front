import MainPage from "./page/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router";
import UserPage from "./page/UserPage/UserPage";
import UploadPage from "./page/UploadPage/UploadPage";
import DetailPage from "./page/DetailPage/DetailPage";
import SearchPage from "./page/SearchPage/SearchPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
