import React from "react";
import Nav from "./Nav";
import About from "./About";
import Info from "./Info";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CoButton from "./components/atoms/CoButton";
import CoTable from "./components/atoms/CoTable";


import CoPagination from "./components/organisms/CoPagination";

function App() {
  const colums = [
    [
      {
        text:'타이틀',
        props:{
          scope:'cols',
          rowSpan:'2',
        }
      },
      {
        text: `fdsfdsfsdfsdf`,
        props:{
          scope:'cols',
        }
      },
      {
        text:<a href='aaa'>dsfdsfsdf</a>,
        props:{
          scope:'cols',
        }
      },
      {
        text:'타이틀',
        props:{
          scope:'cols',
        }
      },
    ],
    [
      {
        text:'타이틀',
        props:{
          scope:'cols',
        }
      },
      {
        text:'타이틀',
        props:{
          scope:'cols',
        }
      },
      {
        text:'타이틀',
        props:{
          scope:'cols',
        }
      },
    ],
  ]
  return (
    <div className="App">
      <CoButton label='dfdq213123sfds' />
      <CoTable dataHead={colums} />
      <CoPagination />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/about/*" element={<About />} />
          <Route path="/info/*" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
