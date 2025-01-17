import Header from "./components/Header"
import Body from "./components/Body"
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <>
    <Provider store={store} >
   <Header/>
  <Body></Body>
  </Provider>
   </>
  );
}

export default App;
