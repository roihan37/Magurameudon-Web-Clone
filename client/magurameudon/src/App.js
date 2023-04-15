// import logo from './logo.svg';
// import './App.css';


import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./store/index"
import router from "./router";



function App() {

  return (
    <Provider store={store}>    
      <RouterProvider router={router} />
    </Provider>


  );
}

export default App;
