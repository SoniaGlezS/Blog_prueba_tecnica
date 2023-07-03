
import './App.css';
import Feed from '../containers/Feed';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePost from '../containers/Create_post';
import CompletePost from '../containers/Complete_post'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Feed/>}/>
        <Route exact path="/create_post" element={<CreatePost/>}/>
        <Route path="/:id_post" element={<CompletePost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
