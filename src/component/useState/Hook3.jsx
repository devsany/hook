import React, { useState } from "react";

const Hook3 = () => {
  const [name, setName] = useState("");
  const [addItem, setAddItem] = useState([]);
  const [focus, setFocus] = useState(false);
  const [checkoutId, setCheckoutId] = useState("");
  const handleAdd = () => {
    setAddItem([
      ...addItem,
      {
        id: addItem.length,
        name: name,
      },
    ]);
    setFocus(true);
  };
  const handleDelete = (id) => {
    const newItems = addItem.filter((i) => i.id !== id);
    setAddItem(newItems);
  };
  const handleCheckbox = (id) => {
    console.log(id);
    setCheckoutId(id);
  };
  return (
    <div>
      <label htmlFor="name">Enter your name: </label>

      <input
        type="text"
        name="name"
        id="name"
        autoFocus
        // onFocus={focus}
        placeholder="Enter your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add item</button>
      <ol>
        {addItem &&
          addItem.map((item, i) => {
            return (
              <>
                <div key={i}>
                  <li>
                    {" "}
                    <input
                      type="checkbox"
                      onChange={() => {
                        handleCheckbox(item.id);
                      }}
                    />
                    {"  "}
                    {item.name}
                    {checkoutId === item.id ? (
                      <button
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      >
                        Delete
                      </button>
                    ) : null}
                  </li>
                </div>
              </>
            );
          })}
      </ol>
    </div>
  );
};

export default Hook3;
