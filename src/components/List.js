import React from 'react';
import '../assets/css/List.css';
import Item from './Item';

function List(props){
    return(
        <div className="list">
            {
                props.items.map(item =>
                    <Item 
                        key = {item.id}
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        rating = {item.rating}
                        onupdaterating = {props.onupdaterating}
                        onremove = {props.onremove}
                    />
                )
            }
        </div>
    );
}

export default List;
