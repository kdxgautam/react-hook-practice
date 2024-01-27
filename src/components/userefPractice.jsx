import React, { useState } from "react";

const userefPractice = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    inputRef.current.focus();
    // inputRef.current.value = 'some value'           //dont use
  }

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </>
  );
};

//Changing a ref does not trigger a re-render.
//useRef returns a ref object with a single current property initially set to the initial value you provided.
//Changing a ref does not trigger a re-render, so refs are not appropriate for storing information you want to display on the screen. Use state for that instead. Read more about choosing between useRef and useState.
//You can read or write refs from event handlers or effects instead.
//If you have to read or write something during rendering, use state instead.

export default userefPractice;
