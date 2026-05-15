// import Movies from './components/Movies';
// import Navbar from './components/Navbar';
// import { useState } from 'react';  
// import MovieDetails from './components/MovieDetails';
// import{Routes,Route} from 'react-router-dom'
                                        
// function App() {
//     const [totalResults, setTotalResults] = useState(0); // shifting the state

//   return (

//     <div className="h-screen p-3 bg-emerald-50">

//       <Navbar totalResults={totalResults} />
//       {/* <Movies setTotalResults={setTotalResults} /> */}

//       <Routes> 
//         <Route path='/movies' element={ <Movies setTotalResults={setTotalResults} />}/>
//        <Route path="/movies/:movieId" element={<MovieDetails />} />
//    </Routes>
  
//     </div>
//   );
// }

// export default App;




import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { useState } from "react";  
import MovieDetails from "./components/MovieDetails";
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {
  const [totalResults, setTotalResults] = useState(0);  

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50
     via-emerald-100 to-emerald-200">
      <Navbar totalResults={totalResults} />
      <div className="container mx-auto px-6 py-6">
        <Routes> 
           <Route path='/' element={<HomePage/>}/>
            {/* <Route path='/' element={ <Movies setTotalResults={setTotalResults} />}/> */}
          <Route path="/movies" element={<Movies setTotalResults={setTotalResults} />}/>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
