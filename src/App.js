// import SignUpPage from "./Components/SignUpPage";
// import LoginPage from "./Components/LoginPage";
// import Path from "./Components/Path";
// import "./App.css";
// import "./Style/SourceCode.css";
// import { Chat } from "@material-ui/icons";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ChatCard from "./Components/ChatCard";
// import { useState,useEffect } from "react";
// import SourceCode from "./Components/SourceCode";
// import OssPlan from "./Components/OssPlan";
// import IoTCode from "./Components/IoTCode";
// import IoTHardWare from "./Components/IoTHardWare";
// import ViewProduct1 from './ViewProduct/ViewProduct1';
// import ViewProduct2 from './ViewProduct/ViewProduct2';
// import ViewProduct3 from './ViewProduct/ViewProduct3';
// import ViewProduct4 from './ViewProduct/ViewProduct4'
// import {useDispatch} from "react-redux"
// import axios from 'axios';
// import { setUser } from "./redux/authslices";


// function App() {
//   const [state, setState] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const getSession = async () => {
//       try {
//         const response = await axios
//           .get("/api/session/getSession")
//           .then((response) => dispatch(setUser(response.data)))

//           .catch((err) => console.log(err));

//         console.log(response);
//       } catch (error) {
//         // Handle error response
//         console.error(error);
//       }
//     };
//     getSession();
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         {/***********************Conditional rerendering for CharCard page***********************/}
//          { state ? <ChatCard /> : null}

//         <button onClick={() => setState(!state)} className="chatIconDiv">
//           <Chat className="chatIcons" />
//         </button>

//         <Routes>
//           <Route path="/" element={<Path />}></Route>

//           <Route path="/signin" element={<LoginPage/>}></Route>
//           <Route path="/signup" element={<SignUpPage />}></Route>
//           <Route path="/sourcecode" element={<SourceCode />}></Route>
//           <Route path="/ossplan" element={<OssPlan />}></Route>
//           <Route path="/ChatCard" element={<ChatCard />}></Route>
//           <Route path="/IotCode" element={<IoTCode/>}></Route>
//           <Route path="/iotHardWare" element={<IoTHardWare/>}></Route>

//           <Route path="/iotHardWare" element={<IoTHardWare/>}></Route>
//           <Route path="/viewProduct1" element={<ViewProduct1 />}></Route>
//           <Route path="/viewProduct2" element={<ViewProduct2 />}></Route>
//           <Route path="/viewProduct3" element={<ViewProduct3 />}></Route>
//           <Route path="/viewProduct4" element={<ViewProduct4 />}></Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




import DashboardPage from "./Components/DashboardPage";
function App(){
  return(
    <div>
        <DashboardPage/>
    </div>
  )
}

export default App;


























