import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import MainComponent from "./pages/mainComponent";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/moviePage";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/movies" >
            <Route index Component={MainComponent} />
            <Route path=":id" Component={MoviePage} /> 
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
