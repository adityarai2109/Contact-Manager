import { HashRouter as Router , Route , Switch } from 'react-router-dom'
import { Provider } from './context'
import Header from './components/layout/header.js'
import Contacts from './components/contacts/contacts.js'
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import Test from './components/tests/Test'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (
    
    <Provider>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact}/>
              <Route exact path="/contact/edit/:id" component={EditContact}/>
              <Route exact path="/about" component={About}/> 
              <Route exact path="/test" component={Test}/> 
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
    
  ); 
}

/*
parameters
"about/:id"
*/

export default App;
