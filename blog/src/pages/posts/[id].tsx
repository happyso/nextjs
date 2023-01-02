import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import { useRouter } from 'next/router'
import html from 'remark-html'
import Date from 'components/Date'
export async function getStaticPaths() {
    const paths = getAllPostIds()
    // const paths = [
    //     {
    //         params: {
    //             id: 'ssg-ssr',
    //         },
    //     },
    // ]
    return {
        paths,
        fallback: true,
    }
}

interface ParamInterface {
    params: ParamId
}
type ParamId = {
    id: string
}

export async function getStaticProps({ params }: ParamInterface) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData,
        },
    }
}

interface PostInterface {
    postData: postData
}
type postData = {
    id: string
    title: string
    date: string
    contentHtml: string
}

export default function Post({ postData }: PostInterface) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <Layout>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <br />
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
        </Layout>
    )
}
