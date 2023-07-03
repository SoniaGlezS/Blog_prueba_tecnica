import ConfirmDeleteModalUI from "./ConfirmDeleteModalUI";

export default function ConfirmDeleteModal({handleCloseModal,handleDeletePost}){
    
    return(
       <ConfirmDeleteModalUI handleCloseModal={handleCloseModal} handleDeletePost={handleDeletePost}/>
    )
}