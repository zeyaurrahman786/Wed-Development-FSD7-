import React, { useState } from "react";

const App = () => {

  const [input, SetInput] = useState();
  const [data, SetData] = useState([]);


  function fun1(e) {
    SetInput(e.target.value);
    // console.log(e.target.value);
  }


  const add = () => {
    SetData([...data, input]);
    SetInput("");
  };


  function delet(id) {
    let newA = data.filter((val, index) => {
      return index != id;
    });
    SetData(newA);
  }


  return (
    <div>
      <input
        onChange={fun1}
        type="text"
        name=""
        value={input}
        placeholder="Enter your todo"
      />
      <button onClick={add}> add</button>

      {data.map((a, b) => {
        return (
          <>
            <li> {a}</li>
            <button onClick={() => delet(b)}> delet</button>
          </>
        );
      })}
      
    </div>
  );
};

export default App;