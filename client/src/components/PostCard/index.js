import PostCardUI from "./PostCardUI";

export default function PostCard({postData,handleDeletePost}){
    
    return(
        <PostCardUI postData={postData} handleDeletePost={handleDeletePost}/>
    )
}