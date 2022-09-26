import type { NextPage } from "next";
import React from "react";
import styles from '../styles/Home.module.css'
import TradingCollection from "../components/tradingCollection/TradingCollection";
import User from "../components/user/User";
import { GET_TRENDING_COLLECTIONS } from "../services/tendingCollectionQueries";
import { createApolloClient } from "../services/createApolloClient";

const Home: NextPage = ({ trendingCollections }: any) => {
  const edges = trendingCollections.edges;

  return (
    <div className={styles.main}>
      <User></User>
      <TradingCollection edges={edges}></TradingCollection>
    </div>
  );
};

export async function getServerSideProps() {
  const client = createApolloClient();
  const { data } = await client.query({query:GET_TRENDING_COLLECTIONS });
  return {
    props: {
      trendingCollections: data.trendingCollections,
    },
  };
}

export default Home;
