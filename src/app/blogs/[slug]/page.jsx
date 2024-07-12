const page = ({ params }) => {

    const { title, description } = posts.find((post) => post.slug == params.slug)

    return (
        <div className="container py-10">
            <div className="space-y-4">
                <h2 className='text-4xl'>{title}</h2>
                <p>{description}</p>
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