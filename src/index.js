import React from 'react';
import { createRoot } from 'react-dom/client';
// import Accordian from './accordion/Accordian';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


// ReactDOM.render(<><App /></>,document.getElementById("root"));

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
<BrowserRouter>
<App />
</BrowserRouter>

);