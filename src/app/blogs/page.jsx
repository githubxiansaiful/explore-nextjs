import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='mb-20'>
            <div className='bg-[gray] py-[150px] mb-[60px]'>
                <h1 className='text-4xl font-bold text-center'>Our Blogs</h1>
            </div>
            <div className="container">
                <div className='grid grid-cols-3 gap-8'>
                    {
                        posts.map((post) =>
                            <div key={post.slug} className='border px-5 py-5 rounded-xl space-y-3'>
                                <div className='rounded-xl bg-slate-600 h-[220px] flex items-center text-center justify-center'>
                                    <p className='text-center text-white'>IMAGE</p>
                                    </div>
                                <h2 className='text-xl'>{post.title}</h2>
                                <p>{post.description}</p>
                                <Link href={`/blogs/${post.slug}`} className='btn btn-primary'>Read More</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

const posts = [
    {
        "slug": "tips-for-ielts-speaking",
        "title": "Top 10 Tips for IELTS Speaking",
        "description": "Learn the best strategies to excel in the IELTS speaking test with these top 10 tips."
    },
    {
        "slug": "ielts-reading-practice",
        "title": "Effective IELTS Reading Practice Techniques",
        "description": "Discover effective techniques to improve your IELTS reading skills and boost your score."
    },
    {
        "slug": "ielts-writing-tasks",
        "title": "Mastering IELTS Writing Tasks 1 and 2",
        "description": "A comprehensive guide to mastering IELTS writing tasks 1 and 2, with sample questions and answers."
    },
    {
        "slug": "celpip-listening-tips",
        "title": "CELPIP Listening Test: Tips and Tricks",
        "description": "Enhance your listening skills for the CELPIP test with these practical tips and tricks."
    },
    {
        "slug": "celpip-speaking-strategies",
        "title": "CELPIP Speaking: Strategies for Success",
        "description": "Get the best strategies to ace the CELPIP speaking test and achieve a high score."
    },
    {
        "slug": "celpip-writing-tasks",
        "title": "How to Excel in CELPIP Writing Tasks",
        "description": "Learn how to excel in CELPIP writing tasks with this step-by-step guide and sample responses."
    },
    {
        "slug": "pte-academic-overview",
        "title": "Overview of the PTE Academic Test",
        "description": "An overview of the PTE Academic test, including format, sections, and scoring."
    },
    {
        "slug": "pte-speaking-tips",
        "title": "Essential Tips for PTE Speaking",
        "description": "Boost your PTE speaking score with these essential tips and practice techniques."
    },
    {
        "slug": "pte-writing-tasks",
        "title": "PTE Writing: Task Types and Preparation Tips",
        "description": "Understand the types of writing tasks in PTE and how to prepare effectively for them."
    },
    {
        "slug": "pte-listening-skills",
        "title": "Improving Your PTE Listening Skills",
        "description": "Tips and strategies to improve your listening skills for the PTE Academic test."
    }
]


export default page;