import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import css from 'styled-jsx/css';
import { Loader } from 'semantic-ui-react';
import Footer from '../src/component/Footer';
import Top from '../src/component/Top';
import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';

/**
 * 페이지 전환시 레이아웃을 유지할 수 있다.
 * 페이지 전환시 상태값을 유지할 수 있다.
 * componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
 * 추가적인 데이터를 페이지로 주입시켜주는게 가능
 * 글로벌 CSS 를 이곳에 선언
 */
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  /**
   * pre-rendering 시 api 호출 부분이 있으면 페이지 이동 시에 약간의 시간이 소모됨
   * 이 때, loading 창을 보여주기 위해 해당 부분 추가
   */
  useEffect(() => {
    const onRouteChangeStart = () => {
      setIsLoading(true);
    };
    const onRouteChangeComplete = () => {
      setIsLoading(false);
    };
    router.events.on('routeChangeStart', onRouteChangeStart);
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart);
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router]);

  return (
    <>
      <style jsx>
        {`
          .loading {
            position: fixed;
            width: 100%;
            height: 100%;
            padding: 300px;
            background-color: #0e0e0e;
            opacity: 0.5;
            z-index: 100;
          }
        `}
      </style>

      {isLoading && (
        <div className="loading">
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      <div style={{ width: 1000, margin: '0 auto' }}>
        <Lable />
        <Top />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

const cssLabel = css`
  color: var(--color-red-10);
`;
function Lable() {
  return (
    <>
      <style jsx>{cssLabel}</style>
      <div>this is Label.</div>
    </>
  );
}

export default MyApp;
