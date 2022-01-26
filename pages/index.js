import { Fragment } from "react";
import Head from "next/head";

import NavigationMenu from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Places from "../components/Places/Places";
import Excrusion from "../components/Excursion/Excrusion";
import Form from "../components/TravelForm/Form";
import FormContainer from "../components/TravelForm/FormContainer";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Travel Life</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icon.png" type="image/png" />
      </Head>
      <NavigationMenu />
      <main>
        <Header mapboxKey={props.mapboxKey} />
        <Form forHeader={true} />
        <Places />
        <Excrusion />
        <FormContainer />
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      mapboxKey: process.env.MAPBOX_KEY,
    },
  };
}
