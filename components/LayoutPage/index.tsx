import { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';

interface ILayoutPageProps {
  children: ReactNode,
  pageTitle: string,
}

const LayoutPage = (props: ILayoutPageProps) => {
  const { children, pageTitle } = props;
  return (
    <div>
      <Head>
        <title>{`CongliCorp | ${pageTitle}`}</title>
        <meta name="description" content="Ini adalah website yang luar binasa..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default LayoutPage;
