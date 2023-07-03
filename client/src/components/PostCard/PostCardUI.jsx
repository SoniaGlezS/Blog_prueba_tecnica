
import './PostCard.css'
import {Link} from 'react-router-dom'
import moment from 'moment'
import {URL} from '../../utils/url'
import {Trash} from 'react-bootstrap-icons'

export default function PostCardUI({postData,handleDeletePost}){
    const formattedDate = moment(postData.date).format('DD/MM/YYYY')
    return(
        <article className='d-flex m-3' id='post_card_container'>
            <Link to={`/${postData.id_post}`}>
                <div className="post_image p-3">
                    <img src={`${URL}/${postData.image}`} alt="senderistas" id='postCard_image'/>
                </div>
            </Link>
            <div className="post_content d-flex flex-column p-3">
                <p className="post_date align-self-end">{formattedDate}</p>
                <Link to={`/${postData.id_post}`}>
                    <p className="h2">{postData.title}</p>
                </Link>
                <p className="post_text">{postData.content.substring(0,50)}...</p>                
                <p className="post_place">{postData.place}</p>
                <Trash className='align-self-end' size={30} onClick={()=>{handleDeletePost(postData.id_post,postData.image)}}/>
            </div>
        </article>
    )
}