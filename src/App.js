import React, {Component} from 'react';
import CatSelect from './Pages/CategorySelect';
import './App.css';

class App extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <CatSelect/>;
    } else if (this.state.currentPage === "Category") {
      return ;
    } else if (this.state.currentPage === "Post") {
      return ; 
    } else {
      return 
    }
  };
  render(){
      return (
        <div className="App">
          {this.renderPage()}
        </div>
      )
  }
}

export default App;
