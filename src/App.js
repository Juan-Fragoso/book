import React, {Component} from 'react';
import './assets/css/App.css';
import './assets/css/Menu.css';
import './assets/css/List.css';
import Menu from './components/Menu';
import List from './components/List';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
       books:[
        {id:0, rating:4, title: 'Harry Pother y el caliz de fuego', image: 'libro01.jpg'},
        {id:1, rating:2, title: 'The shining', image: 'libro02.jpg'},
        {id:2, rating:3, title: 'Codigo Da Vinci', image: 'libro03.jpg'},
        {id:3, rating:1, title: 'El principito', image: 'libro04.jpg'},
        {id:4, rating:3, title: 'Sobrenatural', image: 'libro05.jpg'}
      ],
      copyBooks: []
    };
  }

  componentDidMount(){
    this.initBooks();
  }

  initBooks = () => {
    this.setState((state,props) => ({
      copyBooks: [... state.books]
    }));
  }

  onAdd = (item) => {
    let temp = [... this.state.books];
    const id = temp[temp.length - 1].id + 1;
    item['id'] = id;
    temp.push(item);
    this.setState({books: [...temp]});
    this.initBooks();
  }
  onSearch = (query) => {
    if(query === ''){
      this.initBooks();
    } else {
      const temp = [... this.state.books];
      let res =[];

      temp.forEach(item => {
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
      this.setState({copyBooks: [... res]});
    }
  }

  onUpdateRating = (item) => {
    var temp = [... this.state.books];
    const index = temp.findIndex(x => x.id === item.id);

    //temp[index].title = item.title;
    //temp[index].image = item.image;
    //temp[index].rating = item.rating;

    this.setState({books: [...temp]});
    this.initBooks();
  }

  onRemove =(id) =>{
    var temp = [... this.state.books];
    const res = temp.filter(item =>item.id != id);

    this.setState({books: [... res]});
    this.initBooks();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="app">
            <Menu title="Libros" onadd={this.onAdd} onsearch={this.onSearch} />
              <List items={this.state.copyBooks} onupdaterating={this.onUpdateRating} onremove ={this.onRemove} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
