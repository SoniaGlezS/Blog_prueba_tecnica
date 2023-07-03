import Header from "../../components/Header";
import { useNavigate } from "react-router";
import PostSection from "../../components/PostSection";
import '../Feed/Feed.css'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function FeedUI({postList,handleDeletePost}){

    return (
        <>
        <div className="row d-flex" id="feed_main_container">
            <Header/>
            <Navbar/>
            <PostSection postList={postList} handleDeletePost={handleDeletePost}/>
            <Footer/>
        </div>
        </>
        
    )
}