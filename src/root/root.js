import React from "react";
import { Route, Routes} from "react-router-dom";
import Param from "../params";
import Main from "../components/main/index.js";
import Header from '../components/header/index.js'

function Root() {
  return (
     <Routes>
       <Route path="/" element={<Header/>}>
          <Route path="home" element={<Main/>}></Route>
          <Route path="home/:id" element={<Param/>}></Route>
       </Route>
     </Routes>
  )
}

export default Root;