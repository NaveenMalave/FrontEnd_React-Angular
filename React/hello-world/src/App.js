import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import AppHeader from './AppHeader.js';
import AppContent from './AppContent.js';
import AppFooter from './AppFooter.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// function App() {
//   return (
    // <div className="App">
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      /* <h2>Welcome to first reactjas Application</h2> */
    //</div>
  // );
// }

    class App extends Component{
      
      constructor(){
        super();
      
      }
      render(){
        const footerProps={
          website:'https://abc.co',
          company:'rajesk',
          year:2025
        }
        return( <div className='container'>
       <AppHeader title="Addressbook App-v1.0"
       subheading="Created by Naveen"/>
       <AppContent/>
       <AppFooter website={footerProps.website} company={footerProps.company}
       year={footerProps.year}/>
        </div>
        );
      }
    }
    // function App(){
    //    var msg="weclomoe to banglore";
    //   return(
    //     <div className='App'>
    //       <h2>hello my first app</h2>
    //       <ap>{msg}</ap>
    //     </div>
    //   )
    // }
  


export default App;
