import Header from "@layout/Header/Header";
import "./App.css";
import Hero from "@pages/Hero/Hero";
import Books from "@pages/Books/Books";
import Author from "@pages/Author/Author";
import Blogs from "@pages/Blogs/Blogs";
import Review from "@pages/Review/Review";
import Footer from "@layout/Footer/Footer";

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
