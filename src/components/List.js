// import { useState } from "react";

export default function List(props) {
    const {ordered, items} = props;

    const itemList = items.map(item => {
        return (<li key={item.id} className="list-item">{`${item.name} - $${item.price}`}</li>);
    });

    // Example
    const fruits = ["Apple", "Orange", "Banana"];
    const fruitList = fruits.map((fruit, index) => {
        return (<li key={index} className="list-item">{fruit}</li>);
    });

    return ordered ? (
        <div className="list">
            <ol>
                {itemList}
            </ol>
            <ol>
                {fruitList}
            </ol>
        </div>
    ) : (
        <div className="list">
            <ul>
                {itemList}
            </ul>
            <ul>
                {fruitList}
            </ul>
        </div>
    );
}