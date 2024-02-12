import { useState } from "react";
export default function TravelList({
  itemsListArr,
  onDelItem,
  onUpdateItem,
  clearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItemListArr = [];
  if (sortBy === "input") sortedItemListArr = itemsListArr;
  if (sortBy === "description")
    sortedItemListArr = itemsListArr
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItemListArr = itemsListArr
      .slice()
      .sort((raj, rahul) => Number(raj.packed) - Number(rahul.packed));
  return (
    <div className="list">
      {sortedItemListArr.length > 0 ? (
        <ul>
          {sortedItemListArr.map((items) => (
            <li key={items.id}>
              <input type="checkbox" onClick={() => onUpdateItem(items.id)} />
              <span
                style={items.packed ? { textDecoration: "line-through" } : {}}
              >
                {items.quantity + "  "}
                {items.description}
              </span>
              <button onClick={() => onDelItem(items.id)}>❌</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Please Add items💼 in the list📃 from 👆 </p>
      )}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        {itemsListArr.length > 0 ? (
          <button onClick={clearList}>Clear List</button>
        ) : null}
      </div>
    </div>
  );
}
