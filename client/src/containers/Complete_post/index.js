import CompletePostUI from "./CompletePostUI";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../../utils/url";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function CompletePost() {
  const { id_post } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [placeValue, setPlaceValue] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postImageUrl, setPostImageUrl] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getPostData(id_post);
  }, []);

  const getPostData = async (id_post) => {
    try {
      await fetch(`${URL}/post/${id_post}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (response) => {
        if (response.status === 200) {
          const responseJson = await response.json();
          setPostData(responseJson[0]);
          setTitleValue(responseJson[0].title);
          setContentValue(responseJson[0].content);
          setPlaceValue(responseJson[0].place);
          setPostImage(responseJson[0].image);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleInputChange = (fieldName, value) => {
    switch (fieldName) {
      case "postTitle":
        setTitleValue(value);
        break;
      case "postContent":
        setContentValue(value);
        break;
      case "postPlace":
        setPlaceValue(value);
        break;
      default:
        break;
    }
  };
  function handleEdit() {
    setIsEditing(true);
  }

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        const imageUrl = ev.target.result;
        setPostImage(file);
        setPostImageUrl(`${URL}/${imageUrl}`);
      };
      fileReader.readAsDataURL(file);
    } else {
      setPostImage(postData.image);
    }
  }
  const handleSaveChanges = async (event) => {
    event.preventDefault();
    console.log("entra en la función");
    try {
      const formData = new FormData();
      formData.append("title", titleValue);
      formData.append("content", contentValue);
      formData.append("place", placeValue);
      formData.append("image", postImage);
      formData.append("id", id_post);
      await fetch(`${URL}/post/editPost`, {
        method: "PATCH",
        body: formData,
      }).then((data) => {
        if (data.status === 200) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Datos grabados con exito',
            showConfirmButton: false,
            timer: 1500
          })
          navigate("/");
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  async function handleDeletePost() {
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
              id: postData.id_post,
              imageUrl: postData.image,
            }),
          });

          if (response.status === 200) {
            // Post eliminado exitosamente
            navigate("/");
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
    <CompletePostUI
      postData={postData}
      titleValue={titleValue}
      contentValue={contentValue}
      placeValue={placeValue}
      handleEdit={handleEdit}
      isEditing={isEditing}
      handleInputChange={handleInputChange}
      handleSaveChanges={handleSaveChanges}
      handleDeletePost={handleDeletePost}
      handleImage={handleImage}
      handleShowModal={handleShowModal}
      showModal={showModal}
      handleCloseModal={handleCloseModal}
    />
  );
}
