export default function Stats({ itemsListArr }) {
  const length = itemsListArr.length;
  const packed = itemsListArr.filter((item) => item.packed === true).length;
  let percent;
  if (length !== 0) {
    percent = Math.round((packed / length) * 100);
  } else {
    percent = 0;
  }
  return (
    <div className="stats">
      {percent === 100 ? (
        <p>Everything is done✅! You are ready to go👍</p>
      ) : (
        <p>
          💼You have {length} items in your list and you have already packed{" "}
          {packed} out of them ({percent}%)!
        </p>
      )}
    </div>
  );
}
