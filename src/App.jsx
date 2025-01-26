import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import ListMovies from "./pages/ListMovies";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/moviePage";
import { MovieProvider } from "./context/movieContext";
import './App.css'

function App() {

  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/movies" >
              <Route index Component={ListMovies} />
              <Route path=":id" Component={MoviePage} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MovieProvider>

  )
}

export default App
