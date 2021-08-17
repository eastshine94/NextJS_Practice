import axios from 'axios';
import Head from 'next/head';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/component/Item';

function Post({ item }) {
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description} />
      </Head>
      {!item ? (
        <div style={{ padding: '300px 0' }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      ) : (
        <Item item={item} />
      )}
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '495' } }, { params: { id: '488' } }],
    fallback: true
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      item: data
    }
  };
}
