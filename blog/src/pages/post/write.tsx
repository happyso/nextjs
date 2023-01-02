import Layout from 'components/Layout'
import Link from 'next/link'
import React, { Ref, useRef, useState } from 'react'

export default function Write() {
    const idRef = useRef<HTMLInputElement>(null)
    const titleRef = useRef<HTMLInputElement>(null)
    const contentRef = useRef<HTMLTextAreaElement>(null)

    const [showLink, setShowLink] = useState(false)

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const id = idRef.current?.value
        const title = titleRef.current?.value
        const content = contentRef.current?.value

        fetch('/api/post/write', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id,
                title,
                content,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Fetch error')
            })
            .then((data) => {
                setShowLink(true)
                alert(data.message)
            })
            .catch((error) => alert(`request error: ${error}`))
    }
    return (
        <Layout>
            <h1>Write a post</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="id"
                    placeholder="id"
                    required
                    ref={idRef}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                />
                <br />
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    required
                    ref={titleRef}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                />
                <br />
                <textarea
                    name="content"
                    placeholder="content"
                    required
                    ref={contentRef}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                ></textarea>
                <br />
                <input
                    type="submit"
                    value="Create"
                    className="bg-gray-50 border border-gray-300 text-gray-900 p-2.5"
                />
            </form>
            {showLink && (
                <Link href={`/posts/${idRef.current?.value}`}>
                    Created Post
                </Link>
            )}
        </Layout>
    )
}
