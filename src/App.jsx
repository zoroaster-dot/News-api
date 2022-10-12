import NewsListIndonesia from "./components/pages/indonesia/newsListIndonesia";
import NewsListTech from "./components/pages/programming/newsListTech";
import NewsListCovid from "./components/pages/covid/newsListCovid";
import Header from "./components/organisms/header/Header";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/pages/search/SearchBar";

function App() {

  return (
    <>
      <main className="App">
        <Header />
        <SearchBar/>
        <Routes>
          <Route path="/" element={<NewsListIndonesia />} />
          <Route path="/programming" element={<NewsListTech />} />
          <Route path="/covid" element={<NewsListCovid />} />
          <Route path="/saved" element={ "" } />
        </Routes>
      </main>
    </>
  );
}

export default App;