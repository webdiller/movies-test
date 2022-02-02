import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import "../styles/index.scss";
import DefaultLayout from "@/layouts/DefaultLayout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
