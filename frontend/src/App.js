import React from 'react';
//import * as XLSX from 'xlsx';
import {BrowserRouter,Route} from "react-router-dom";
import './App.css';
import { Provider } from 'react-redux';
import store  from './store';

import Homepage from './components/basic/homepage/homepage';
import Dashboard from './components/dashboard/backbone';
import TraineeRegister from './components/trainee/register/traineeregister';
import MainPortal from './components/trainee/examPortal/portal';

function App() {
//     const readExcel = (file) => {
//       const promise = new Promise((resolve,reject) =>{

//         const filereader = FileReader();
//         filereader.readAsArrayBuffer(file)

//         filereader.Onload = (e) => {
//           const bufferArray = e.target.result;
          
//           const wb =  XLSX.read(bufferArray, {type: "buffer"})
//           const wsname = wb.SheetNames[0];
//           const ws = wb.Sheets[wsname];
//           const data = XLSX.utils.Sheet_to_json(ws);

//           resolve(data);
//         };

//         filereader.onerror = (error) => {
//           reject(error);
//         };
//       });

//       promise.then((d) =>{
//         console.log(d);
//       });
//     }


  return (
    <Provider store={store}>
      <BrowserRouter>
        <nav>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/user" component={Dashboard}/>
          <Route path="/user/:options" component={Dashboard}/>
          <Route exact path="/trainee/register" component={TraineeRegister}/>
          <Route exact path="/trainee/taketest" component={MainPortal}/>
        </nav>
      </BrowserRouter>
      {/* <div>
        <input type="file" onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}/>
      </div>  */}
    </Provider> 
    
  );
}

export default App;
