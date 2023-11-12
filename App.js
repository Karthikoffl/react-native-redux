import React from "react";

import store from "./context/store";
import { Provider } from "react-redux";
import Counter from "./components/Counter";

const App = () => {
  // const add = useDispatch(increment());
  // const remove = useDispatch(decrement());

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
