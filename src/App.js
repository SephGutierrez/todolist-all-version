import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import Todo from "./views/todo/list";
// Redux
import {Provider} from 'react-redux';
import {Store} from './redux/Store';
import Activities from './views/activitiesss/list';
import Lista from './views/hookredux/lista';

// axios
import Endpoint from './views/endpoint/list';




function App() {

return (

<div className="App">

<TodoProvider>
        <Provider store={Store}>
          <Router>
            <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/redux" element={<Activities />} />
                <Route path="/hook/redux" element={<Lista />} />
                <Route path="/endpoint" element={<Endpoint />} />
                
            </Routes>
            </Router>
        </Provider>
</TodoProvider>

</div>

);

}


export default App;


