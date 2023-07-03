import PostCard from "../PostCard"
import '../PostSection/PostSection.css'

export default function PostSectionUI ({postList,handleDeletePost}) {
    return (
        <section className="d-flex flex-column" id="post_section_container">
            {postList.length > 0 && postList.map((post,i)=>{
                return <PostCard key={i} postData={{...post}} handleDeletePost={handleDeletePost}/>
            })}
        </section>
     
    )
}