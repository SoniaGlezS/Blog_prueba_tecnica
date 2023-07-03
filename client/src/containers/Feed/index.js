import FeedUI from "./FeedUI"
import { URL } from "../../utils/url"
import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export default function Feed() {
    const navigate = useNavigate()
    const [postList, setPostList] = useState([])
    const [deleted, setDeleted] = useState(false)

    useEffect(()=> {
        getPost()
    },[deleted])
    async function getPost() {
       try {
            const response = await fetch(`${URL}/post`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(async data => {
                const post = await data.json();
                setPostList(post);
                setDeleted(false)
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    async function handleDeletePost(postId, postImgUrl) {
        // Mostrar el mensaje de confirmación antes de eliminar el post
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const response = await fetch(`${URL}/post/deletePost`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id: postId,
                  imageUrl: postImgUrl,
                }),
              });
    
              if (response.status === 200) {
                // Post eliminado exitosamente
                
                await Swal.fire("Deleted!", "Your file has been deleted.", "success");
                setDeleted(true)
              } else {
                // Ocurrió un error al eliminar el post
                Swal.fire("Error!", "Failed to delete the post.", "error");
              }
            } catch (error) {
              console.log(error);
              // Ocurrió un error al hacer la solicitud
              Swal.fire("Error!", "Failed to delete the post.", "error");
            }
          }
        });
      }
    
    return (
        <FeedUI postList={postList} handleDeletePost={handleDeletePost}/>
    )
}