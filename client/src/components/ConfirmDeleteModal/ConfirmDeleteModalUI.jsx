import '../ConfirmDeleteModal/ConfirmDeleteModal.css'


export default function ConfirmDeleteModalUI({handleCloseModal,handleDeletePost}){
    return(
        <div className="modal-dialog modal-dialog-centered d-flex flex-column p-3" id='confirm_modal_container'>
            <div className="modal-content align-items-center gap-4">
                <button type="button" className="btn-close align-self-end" aria-label="Close" onClick={handleCloseModal}></button>
            </div>
            <div className="modal-body h-3 w-100 d-flex my-2">
                <p>¿Estás seguro de que quieres borrar este post?</p>
            </div>
            <div className="modal-footer gap-5">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                <button type="button" className="btn btn-primary" onClick={handleDeletePost}>Confirmar</button>
            </div>
        </div>
    )

}