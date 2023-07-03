import Header from "../../components/Header"
import moment from 'moment'
import {URL} from '../../utils/url'
import '../Complete_post/CompletePost.css'
import Footer from "../../components/Footer"

export default function CompletePostUI({postData, titleValue, contentValue, placeValue, handleEdit,isEditing,handleInputChange,handleSaveChanges,handleDeletePost, handleImage, handleShowModal,showModal,handleCloseModal}){
    const formattedDate = moment(postData.date).format('DD/MM/YYYY')
    return (
        
        <div className="row d-flex justify-content-center" id="complete_post_main_container">
            <Header/>
            <div className="p-5" id="complete_post_content">
                {isEditing ? (
                    <div className="editPost_container">
                        <form encType="multipart/form-data" method="post">
                            <input type="file" accept="image/*" name="newPostImage" id="newPostImage" className="row form-control my-2" onChange={handleImage}/>
                            <input type="text" name="postTitle" id="editPostTitle" className="row form-control my-2" value={titleValue} onChange={(e) => handleInputChange("postTitle", e.target.value)}/>
                            <textarea name="postContent" id="editPostContent"rows="20" className="row form-control my-2" value={contentValue} onChange={(e) => handleInputChange("postContent", e.target.value)}></textarea>
                            <input type="text" name="postPlace" id="editPostPlace" className="row form-control my-2" value={placeValue} onChange={(e) => handleInputChange("postPlace", e.target.value)}/>
                        </form>
                    </div>
                ) :
                    <div className="completePost_conteiner">
                        <div className="row justify-content-center">
                            <img className="img-fluid" src={`${URL}/${postData.image}`} alt="imagen"  id="complete_post_image"/>
                        </div>
                        <p className="h1 row my-3">{postData.title}</p>
                        <p className="row justify-content-end">{formattedDate}</p>
                        <p className="row" id="complete_post_text">{postData.content}</p>
                        <h5 className="row justify-content-end">{postData.place}</h5>
                    </div>
                }
                
                <div className="completePost_buttons d-flex justify-content-center">
                    {!isEditing&&<button className="btn btn-secondary m-2" onClick={handleEdit}>Editar</button>}
                    {isEditing && <button className="btn btn-secondary m-2" onClick={handleSaveChanges}>Guardar</button>}
                    <button className="btn btn-secondary m-2" onClick={handleDeletePost}>Borrar</button>
                </div>
                
                        
            </div>
            
            <Footer/>
            
        </div>
        
    )
}