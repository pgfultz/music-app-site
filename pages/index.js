import React from 'react';
import Head from 'next/head'

import { Titulo } from './styles';

const Home = () => (
  <>
  <Head>
    <title>Music App</title>
  </Head>
  
  <Titulo>Hello World!</Titulo>
  </>
);

export default Home;