import { Provider } from "react-redux";
import FilmList from "./components/FilmList";
import store from "./store";

const App = () => {
  return (
    <div>
      <h1 style={{margin: "40px 40px 20px", fontFamily: "Work Sans"}}> Studio Ghibli Movies</h1>
      <Provider store={store}>
        <FilmList />
      </Provider>
    </div>
  )
};

export default App;
