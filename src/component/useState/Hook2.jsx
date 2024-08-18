import React, { useState } from "react";

const Hook2 = () => {
  const [name, setName] = useState({ fname: "", lname: "" });
  return (
    <div>
      my first name is :{name.fname} <br />
      and my last name is :{name.lname} <br />
      <input
        type="text"
        value={name.fname}
        onChange={(e) => setName({ ...name, fname: e.target.value })}
      />
      <input
        type="text"
        value={name.lname}
        onChange={(e) => setName({ ...name, lname: e.target.value })}
      />
    </div>
  );
};

export default Hook2;
