import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
   // pages/index.tsx
    <div className="bg-blue-500 text-white p-4">
      Welcome to my Next.js app with Tailwind CSS!
    </div>
  )
}

export default Home
