import React from 'react'
import StartupCard from "@/src/components/StartupCard";

const CardDisplay = ({ query, post }) => { // Add query and post as props
    return (
        <section className="section_container">
            <p className="text-30-semibold">
                {query ? `Search Result for "${query}"` : "All Startups"}
            </p>

            <ul className="mt-7 card_grid">
                {post?.length > 0 ? (
                    post.map((post) => ( // Added type annotation in the component props instead
                        <StartupCard key={post?._id} post={post}/>
                    ))
                ) : (
                    <p className="no-result">No Startup found</p>
                )}
            </ul>
        </section>
    )
}

export default CardDisplay