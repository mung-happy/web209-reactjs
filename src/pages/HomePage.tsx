import Header from "../components/Header";
import TopComic from "../components/TopComic";
import GoodComic from "../components/GoodComic";
import Menu from "../components/Menu";
import ComicList from "../components/ComicList";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div className="bg-black">
      <Header />
      <Menu />
      <TopComic />
      <GoodComic />
      <ComicList />
      <Footer />
    </div>
  );
};

export default HomePage;
