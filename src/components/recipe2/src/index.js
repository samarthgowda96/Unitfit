import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const index=()=>{
return(
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'))
)
}
export default index;
