import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// as you can see in the fetch request in the page.jsx under profile fetch(`/api/users/${session?.user.id}/posts`)
// we have the dynamic id. now this is the same to the file structure of this file api/users/[id]/posts
// we can access that id of the user through params which we specified below
export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        
        // find all posts of specific user/creator 
        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator');
        console.log(prompts)
        return new Response(JSON.stringify(prompts), {status: 200});
    } catch (error) {
        return new Response('Failed to fetch all prompts.', {status: 500});

    }
}