import { Provider } from "react-redux";
import FilmList from "./components/FilmList";
import GlobalStyle from "./Styles/globalStyle";
import store from "./store";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1 className="page-title"> Studio Ghibli Movies 
        
        <a href="https://ghibliapi.herokuapp.com/" target="_blank" rel="noopener noreferrer"> 
          {ChainIcon} Studio Ghibli API
        </a></h1>
      </header>
      <Provider store={store}>
        <GlobalStyle />
        <FilmList />
      </Provider>
    </div>
  )
};

export default App;


const ChainIcon = <img src="https://img.icons8.com/material-outlined/24/000000/link--v1.png" alt=""/>;