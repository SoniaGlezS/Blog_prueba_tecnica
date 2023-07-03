import { useState } from "react";
import CreatePostUI from "./CreatePostUI";
import {URL} from '../../utils/url'
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function CreatePost() {
    const navigate = useNavigate()
    const [postTitle, setPostTitle] = useState("")
    const [postContent, setPostContent] = useState("")
    const [postPlace, setPostPlace] = useState("")
    const [postImage, setPostImage] = useState("")
    const [postImageUrl, setPostImageUrl] = useState("")

    const handleInputChange =  (fieldName,value) => {
        
        switch(fieldName) {
            case "newPostTitle":
                setPostTitle(value)
                break;
            case "newPostContent":
                setPostContent(value)
                break;
            case "newPostPlace":
                setPostPlace(value)
                break;
            default:
                break;
        }
    }
    
    function handleImage (e) {
        const file = e.target.files[0]
        if (file) {
            const fileReader = new FileReader()
            fileReader.onload = (ev) => {
                const imageUrl = ev.target.result
                setPostImage(file);
                setPostImageUrl(`${URL}/${imageUrl}`);
            }
            fileReader.readAsDataURL(file)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("title", postTitle);
        formData.append("content", postContent);
        formData.append("place", postPlace);
        formData.append("image", postImage);
        await fetch (`${URL}/createPost`, {
            method: 'POST',
            body: formData
            
        })
        .then(data => {
            if(data.status === 200) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Post grabado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate('/')
            }
        })
    }

    return (
        <CreatePostUI handleInputChange={handleInputChange} handleImage={handleImage} handleSubmit={handleSubmit}/>
    )
}