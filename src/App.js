import './App.css';
import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';
import Login from './views/login'
import './custom.css'

class App extends React.Component{
  render(){
    return(
      <div>
         <Login/>
      </div>
    )
  }
}
/*function App() {
  return (
    <div>
      hello world!
    </div>
  );
}*/

export default App;
