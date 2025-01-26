# clono la cartella da github

npm create vite@latest

alla domanda project-name inserisco . (dot)

npm install

# testo
npm run dev

apro il .gitignore e aggiungo package-lock.json

installo gli altri pacchetti che mi servono

cancello il contenuto di App.jsx e rimuovo gli import che non mi servono
cancello i file che non mi servono

se voglio importo bootstrap in main.jsx prima del mio css custom 
 import "bootstrap/dist/css/bootstrap.min.css";

comincio ad editare App.jsx


# add to rules in eslint
rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ..reactHooks.configs.recommended.rules,
      "react/prop-types": 0, 👈
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },

# ROUTING

# *in default layout es.*
import { Outlet } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";
import Alert from "../components/Alert";
import FooterComponent from "../components/FooterComponent";
export default function DefaultLayout() {
  return (
    <div>
      <HeaderComponent />
      <Alert />
      <main className="container">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}

# *in app.jsx esempio...*
import { BrowserRouter, Routes, Route } from 'react-router-dom';
   <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/books" > 👈
            <Route index Component={MainPage} /> 👈
            <Route path=":id" Component={BookPage} /> 👈
            <Route path="create" Component={AddPizzaPage} /> 👈
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

# Context

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  useEffect(getData, []);
  function getData() {
    setLoading(true);
    axios
      .get(apiUrl + endpoint)
      .then((res) => {
        setMovies(res.data.results);       
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  const data = {
    movies
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalProvider, useGlobalContext };

# *In App.jsx use global context*
<GlobalProvider>
  /* Routing o altri componenti children */
 </GlobalProvider>

# *Usare icone Docs react-icons*
import { FaStar, FaRegStar } from "react-icons/fa";

 <FaStar />

#########################
######  Esercizio  ######
#########################

# MILESTONE 1
- Mettiamo su un nuovo progetto React aiutandoci con Vite
- Ripuliamo come sempre l’app da file e codice di esempio non necessari
- Installiamo il necessario: React Router, Axios e Bootstrap (se volete utilizzarlo)
# MILESTONE 2
- Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.
- Creiamo 2 pagine:
    - La home, in cui mostreremo la lista dei film
    - La pagina di dettaglio di un singolo film
# MILESTONE 3
-Ricordiamoci che l’app di backend (repo webapp-express) deve ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware *CORS*
- Proviamo quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri
# MILESTONE 4
- In ultimo, effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni
### BONUS
- Impostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props!
- Curare l’aspetto estetico della vostra applicazione