'use client';

// we use useSearchcParams because in order to edit a prompt,
// in the search bar of browser, we have to put the id on the last
// slash. for instance http://localhost:3000/update-prompt/[id], so we get that id
// by using useSearchcParams
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Form from '@components/Form';

const EditPrompt = () => {
    const router = useRouter();

    const { id: promptId } = router.query;

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });
    
    // the useEffect below will execute whenever the promptId changes.
    useEffect(() => {
        // calls  GET endpoint in the route.js under /api/prompt/[id]
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`)

            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag,
            })
        }
        // we only wanna call the above function IF promptId exist
        if (promptId) getPromptDetails()

    }, [promptId])

    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if(!promptId) return alert("Prompt ID not found");

        try {
            // this route can be located in the folder api/prompt/new/route.js 
            const response = await fetch(`/api/prompt/${promptId}`, 
            {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
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
            type="Edit"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={updatePrompt}
        />
        
    )
}

export default EditPrompt;  