'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Form from '@components/Form';

const CreatePrompt = () => {
    const router = useRouter();
    const { data:session } = useSession();

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    const CreatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            // this route can be located in the folder api/prompt/new/route.js 
            const response = await fetch('/api/prompt/new', 
            {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag,
                })
            })

            if (response.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }   

    return (
        /** call Form.jsx */
        <Form
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={CreatePrompt}
        />
        
    )
}

export default CreatePrompt