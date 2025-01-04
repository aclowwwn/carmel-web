import React from 'react';
import Head from 'next/head';
import { ItemScreen } from '~/components/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = () => {
  return (
    <>
      <Head>
        <title>Carmel Challenge</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <ItemScreen name="challenges" />
      </AppLayout>
    </>
  );
};

export default Main