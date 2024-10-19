import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <div className="w-screen box-border">
      {/* provide the redux store */}
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
