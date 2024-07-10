import Footer from "layout/Footer/Footer";
import Header from "layout/Header/Header";
import Books from "pages/Books/Books";
import Author from "pages/Author/Author";
import Hero from "pages/Hero/Hero";
import Review from "pages/Review/Review";
import Blogs from "pages/Blogs/Blogs";
import "./App.css";

function App() {
  return (
    <div>
        <Header />
        <Hero />
        <Books />
        <Author />
        <Blogs />
        <Review />
        <Footer />
    </div>
  );
}

export default App;
