import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./stores/index.ts";
import { Provider } from "react-redux";
import "sensorario-design-system/style/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
