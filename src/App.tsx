import { Provider } from "react-redux";
import FilmList from "./components/FilmList";
import GlobalStyle from "./globalStyle/globalStyle";
import store from "./store";

const App = () => {
  return (
    <div className="App">
      <h1> Studio Ghibli Movies</h1>

      <Provider store={store}>
        <GlobalStyle />
        <FilmList />
      </Provider>
    </div>
  )
};

export default App;
