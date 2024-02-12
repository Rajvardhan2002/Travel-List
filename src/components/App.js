import "../App.css";
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import TravelList from "./TravelList";
import Stats from "./Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Gummies", quantity: 10, packed: true },
//   { id: 4, description: "Chocolates", quantity: 15, packed: false },
// ];

export default function App() {
  ///lifting up state cuz this state is used by siblings
  const [itemsListArr, setItemsListArr] = useState([]);

  function handleAddItem(newItem) {
    console.log(newItem);
    //Now we have to do this in immutable manner
    setItemsListArr((itemsListArr) => [...itemsListArr, newItem]);
  }

  function handleDeleteItem(id) {
    // console.log(id);
    setItemsListArr((itemsListArr) =>
      itemsListArr.filter((item) => item.id !== id)
    );
  }
  function handleUpdateItems(id) {
    setItemsListArr((itemsListArr) =>
      itemsListArr.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    // console.log(itemsListArr);
  }
  function clearList() {
    const confirmed = window.confirm(
      "Are you sure want to delete all the elements in the list?"
    );
    if (confirmed) setItemsListArr([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <TravelList
        itemsListArr={itemsListArr}
        onDelItem={handleDeleteItem}
        onUpdateItem={handleUpdateItems}
        clearList={clearList}
      />
      <Stats itemsListArr={itemsListArr} />
    </div>
  );
}
