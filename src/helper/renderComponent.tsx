import { Provider } from "react-redux";
import { store } from "store/store";
import Theme from "theme";

export const renderComponent = (Component: JSX.Element) => {
  return (
    <Provider store={store}>
      <Theme>{Component}</Theme>
    </Provider>
  );
};
