/**
 * @Author: frank zhang
 * @Date:   2022-07-31 20:48:28
 * @Last Modified by:   frank zhang
 * @Last Modified time: 2022-07-31 21:14:30
 */
import { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
function App() {
  const [page, setPage] = useState("planets");
  return (
    <div className='App'>
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage}/>
      <div className='content'>
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default App;
