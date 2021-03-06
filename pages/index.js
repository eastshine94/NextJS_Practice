import { Divider, Header, Loader } from 'semantic-ui-react';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ItemList from '../src/component/ItemList';

export default function Home({ list }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="홈 입니다." />
      </Head>
      {router.isFallback ? (
        <div style={{ padding: '300px 0' }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      ) : (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      list: data
    }
  };
}
