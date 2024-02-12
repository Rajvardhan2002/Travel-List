import { useState } from "react";
export default function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setdescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    onAddItem(newItem);
    setQuantity(1);
    setdescription("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for trip?🤔</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map(
          (indexValue) => (
            <option value={indexValue} key={indexValue}>
              {indexValue}
            </option>
          )
        )}
      </select>
      <input
        type="text"
        placeholder="Items...."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
