import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={BookList} />
        <Route exact path="/books/:id" component={BookDetail} />
      </Switch>
    </div>
  );
}

export default App;
