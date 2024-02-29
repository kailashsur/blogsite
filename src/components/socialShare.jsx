"use client"
import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from 'next-share';


export default function SocialShare({ slug, title }) {
    const [cURL, setcUrl] = React.useState("")

    React.useEffect(() => {
        setcUrl(window.location.href)
    }, [slug])


    return (
        <div className=' px-6 w-full flex justify-end items-center gap-2 py-4'>
            <WhatsappShareButton

                url={cURL} title={title} >
                <WhatsappIcon size={20} round />
            </WhatsappShareButton>
            <LinkedinShareButton

                url={cURL} title={title} >
                <LinkedinIcon size={20} round />
            </LinkedinShareButton>

            <FacebookShareButton

                url={cURL} title={title} >
                <FacebookIcon size={20} round />
            </FacebookShareButton>

            <RedditShareButton

                url={cURL} title={title} >
                <RedditIcon size={20} round />
            </RedditShareButton>



        </div>
    )
}