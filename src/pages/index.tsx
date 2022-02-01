import Head from 'next/head'
import { Layout } from '@/components/Layout'

export default function Home() {
  const siteTitle = 'Site Title!!'
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="font-bold">{siteTitle}</h1>
      </main>
    </Layout>
  )
}
