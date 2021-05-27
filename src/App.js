import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container fluid='false' className="App">
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/movie/:id' component={MovieDetail}/>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
