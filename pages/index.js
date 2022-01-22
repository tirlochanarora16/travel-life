import { Fragment } from "react";
import Head from "next/head";
import { Provider } from "react-redux";

import NavigationMenu from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Places from "../components/Places/Places";
import Excrusion from "../components/Excursion/Excrusion";
import Form from "../components/TravelForm/Form";
import store from "../store";
import Backdrop from "../components/UI/Backdrop";

export default function Home(props) {
  return (
    <Provider store={store}>
      <Fragment>
        {/* <Backdrop /> */}
        <Head>
          <title>Travel Life</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/icon.png" type="image/png" />
        </Head>
        <NavigationMenu />
        <main>
          <Header mapboxKey={props.mapboxKey} />
          <Places />
          <Excrusion />
          <Form />
        </main>
      </Fragment>
    </Provider>
  );
}

export async function getStaticProps() {
  return {
    props: {
      mapboxKey: process.env.MAPBOX_KEY,
    },
  };
}
