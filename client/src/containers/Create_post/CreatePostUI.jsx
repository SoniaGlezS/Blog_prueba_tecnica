import Footer from "../../components/Footer"
import Header from "../../components/Header"
import '../Create_post/CreatePost.css'
export default function CreatePostUI({handleImage, handleInputChange, handleSubmit}){
    return (
        <>
        <div className="" id="new_post_main_container">
            <Header/>
            <div className="newPost_container p-5">
                <form encType="multipart/form-data" method="post">
                    <input type="file" accept="image/*" name="newPostImage" id="newPostImage" className="row form-control my-2" onChange={handleImage}/>
                    <input type="text" name="newPostTitle" id="newPostTitle" className="row form-control my-2" placeholder="Escribe un título para tu post..." onChange={(e) => handleInputChange("newPostTitle", e.target.value)}/>
                    <textarea name="newPostContent" id="" cols="30" rows="10" className="row form-control my-2" placeholder="Escribe el contenido de tu post..." onChange={(e) => handleInputChange("newPostContent", e.target.value)}></textarea>
                    <input type="text" name="newPostPlace" id="newPostPlace" className="row form-control my-2" placeholder="Provincia..." onChange={(e) => handleInputChange("newPostPlace", e.target.value)}/>
                    <button className="btn btn-secondary my-2" id="saveNewPostButton" onClick={handleSubmit}>Guardar</button>
                </form>
            </div>
            <Footer/>
        </div>
        </>
        
    )
}