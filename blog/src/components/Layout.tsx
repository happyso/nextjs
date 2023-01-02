import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { ReactNode } from 'react'

const name = 'Kim Soyoung'
export const siteTitle = 'TECH BLOG'

export default function Layout({
    children,
    home,
}: {
    children: ReactNode
    home?: boolean
}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <div className="relative w-32 h-32">
                            {' '}
                            <Image
                                priority
                                src="/images/profile.png"
                                className="rounded-full"
                                fill
                                alt={name}
                            />
                        </div>

                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <div className="relative w-40 h-40">
                                <Image
                                    priority
                                    src="/images/profile.png"
                                    className="rounded-full"
                                    fill
                                    alt={name}
                                />
                            </div>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">{name}</Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    )
}
