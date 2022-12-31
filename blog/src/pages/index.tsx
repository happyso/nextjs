import { InferGetStaticPropsType } from 'next'
import { getSortedPostsData } from '../../lib/posts'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'

export async function getStaticProps() {
    // const response = await fetch('http://localhost:6600/api/posts')
    // const json = await response.json()

    // return {
    //     props: {
    //         allPostsData: json.allPostsData,
    //     },
    // }
    const allPostsData = getSortedPostsData()

    return {
        props: {
            allPostsData,
        },
    }
}

interface PostInterface {
    id: string
    date: string
    title: string
}

export default function Home({
    allPostsData,
}: {
    allPostsData: PostInterface[]
}) {
    return (
        <Layout home={true}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>I love coding 😍</p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                    .)
                </p>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData &&
                        allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                {title}
                                <br />
                                {id}
                                <br />
                                {date}
                            </li>
                        ))}
                </ul>
            </section>
        </Layout>
    )
}
