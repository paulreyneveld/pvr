import Head from 'next/head';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

  const [lorem, setLorem] = useState();

  const getData = async () => {
    const response = await axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text');
    setLorem(response.data);
  }

  useEffect(() => getData(), []);

  console.log(lorem);

  return (
    <div className="container mx-auto">
      <p className="mr-8 ml-8 text-white">{lorem}</p>
    </div>
  )
}
