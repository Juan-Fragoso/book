import React, { Component } from 'react';
import Search from './Search';
import BookAdd from './BookAdd';
import '../assets/css/Menu.css';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {newItemPanel: false}
        this.addbook = this.addbook.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    addbook(){
        this.setState({newItemPanel: true});
        console.log('book true');
    }
    onCancel(){
        this.setState({newItemPanel: false});
    }

    render(){
        return(
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                         {this.props.title}
                    </div>
                    <div className="search">
                        <Search onsearch={this.props.onsearch} />
                    </div>
                    <div className="actions">
                         <button onClick={this.addbook} className="button btn-blue"> Anadir nuevo libro</button>
                    </div>
                </div>
                {
                    (this.state.newItemPanel)? 
                    <BookAdd oncancel={this.onCancel} onadd={this.props.onadd} />
                    :
                    ''
                }
                
            </div>
         );
    }
}

export default Menu;