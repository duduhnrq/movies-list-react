import Header from "./components/Header";
import MovieForm from "./components/MovieForm";
import MovieFilter from "./components/MovieFilter";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black-100 min-h-screen flex flex-col">
      <Header />
      <MovieForm />
      <MovieFilter />
      <MovieList />
      <Footer />
    </div>
  )
}

export default App;