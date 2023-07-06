import Layout from '@/components/layout'
import { AuthContext } from '@/context/AuthContext'
import { StateContext } from '@/context/StateContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthContext>
        <StateContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StateContext>
      </AuthContext>
    </>
  )
}
