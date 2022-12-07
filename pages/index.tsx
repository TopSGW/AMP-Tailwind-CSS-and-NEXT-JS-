import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Test from '../components/test';
import BodyPart1 from '../components/BodyPart1';
import BodyPart2 from '../components/BodyPart2';
import BodyPart3 from '../components/BodyPart3';
import BodyPart4 from '../components/BodyPart4';
import BodyPart5 from '../components/BodyPart5';
import BodyPart6 from '../components/BodyPart6';
// import Up from '../components/Up'
export const config = { amp: true }
export default function Home() {
  return (
    <>
      <Header/>
      <BodyPart1/>
      <BodyPart2/>
      <BodyPart3/>
      <BodyPart4/>
      <BodyPart5/>
      <BodyPart6/>
    </>
  )
}
