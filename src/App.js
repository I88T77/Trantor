// import './App.css';
import { Layout } from './layout';
import { Provider } from 'react-redux';
import store from "./store/store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Layout/>
      </Provider>
    </div>
  );
}

export default App;
