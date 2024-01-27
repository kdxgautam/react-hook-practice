import React from "react";

const useCallbackpractice = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  //similar to useMemo
  //only runs when number changes and not when dark chnages
  //usecallback allows us to use getItems as a function and pass parameters to it
  //use memo simply returns and doesn't give us getItems as a function
  //usememo only returns the value of the function it doesn't return the function

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default useCallbackpractice;
