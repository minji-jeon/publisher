import './App.css';
import MainPage from './main';
import {Switch, Route} from 'react-router-dom';
import UploadPage from "./upload"
import ProductPage from "./product"



function App() {


  return (
  <div>
    <Switch>
    {/* <Routes>
      <Route exact={true} path={"/"} element={<MainPage/>} />
      <Route exact={true} path="/product" element={<ProductPage/>} />
      <Route exact={true} path="/upload" element={<UploadPage/>} />
    </Routes> */}
      <Route exact={true} path="/">
        <MainPage />
      </Route> 
      <Route exact={true} path="/products/:id">
        
        <ProductPage/>
      </Route>
      <Route exact={true} path="/upload">
        <UploadPage />
      </Route>
    </Switch>
  </div>
  )
}

export default App;
