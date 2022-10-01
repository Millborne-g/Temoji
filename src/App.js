import './App.css';
import {Header, Home, Translator} from './components/index'

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/translate' element={<Translator/>}/>
      </Routes>


    </div>
  );
}

export default App;
