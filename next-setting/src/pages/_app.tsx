import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from 'components/Layout'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
    //getLayout 이 있다면 그걸 실행하고 아니면 원래 페이지를 리턴
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
