import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LastBlog from './components/LastBlog/LastBlog';

function App() {
  

  return (
    <div className="App">
      <Header></Header>  
      <Blogs></Blogs>
      <LastBlog></LastBlog>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
