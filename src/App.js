import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import PostPage from "./PostPage";
import {Routes, Route, useNavigate} from "react-router-dom";
import EditPost from "./EditPost";
import { DataProvider } from "./Context/DataContext";


function App() {
  
  return (
    
    <div className="App">
      <DataProvider>
        <Header title="Social Media" />

        <Nav />
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/post">
            <Route index element = { <NewPost/>} />
            <Route path="edit/:id" element = {<EditPost/>} />
            <Route path = ":id" element = {<PostPage />} 
            />
          </Route> 
          <Route path="*" element = {<Missing/>} />
          <Route path="/footer" element={<Footer/>} />
        </Routes>
      
        <Footer/>
      </DataProvider>
      
    </div>
  );
}

export default App;
