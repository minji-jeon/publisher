import 'antd/dist/antd.css';
import './App.css';
import MainPage from './main';
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import UploadPage from "./upload"
import ProductPage from "./product"
import {Button} from "antd";
import {DownloadOutlined} from "@ant-design/icons";


function App() {
  const history = useHistory();

  return (
  <div>
    <header>
      <div className="top_header">
        <div className="inner">
          <h1 className="logo">
            <Link to="/" >
              <img src="" alt="로고"/>
            </Link>
          </h1>
          <Button onClick={function() {
            history.push("/upload");
          }} icon={<DownloadOutlined/>}>상품 업로드</Button>
        </div>
      </div>
    </header>
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
