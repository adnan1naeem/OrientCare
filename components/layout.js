import React from 'react'
import Head from "next/head"

function layout({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Your page description" />
        </Head>
    )
}

export default layout