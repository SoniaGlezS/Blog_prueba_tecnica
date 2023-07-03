import PostSectionUI from "./PostSectionUI"

export default function PostSection ({postList, handleDeletePost}) {
    
    return (
        <PostSectionUI postList={postList} handleDeletePost={handleDeletePost}/>
    )
}