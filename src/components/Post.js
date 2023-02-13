import { useState } from "react";

const Post = (props) => {

    const [like, setLike] = useState(undefined);
    const [save, setSave] = useState(undefined);
    const [unlike, setUnlike] = useState(undefined);
    const [unsave, setUnsave] = useState(undefined);

    const altLike = `<ion-icon data-test="like-post" onClick={unlikeThis} class"red" name="heart"></ion-icon>`;
    const altSave = `<ion-icon data-test="save-post" onClick={unsaveThis} name="bookmark"></ion-icon>`;

    const likeThis = () => {
        
    }

    const unlikeThis = () => {

    }

    const saveThis = () => {

    }

    const unsaveThis = () => {

    }

    return (
        <div data-test="post" class="post">
                <div class="post-head">
                <div>
                    <img src={props.image} />
                    <p>{props.name}</p>
                </div>
                <div class="pontos">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
                </div>
                <div class="post-content">
                {props.type === "image" ? <img data-test="post-image"src={props.content} /> : <video data-test="post-image" autoplay loop muted>
        <source src="./assets/video.mp4" type="video/mp4" />
        <source src="./assets/video.ogv" type="video/ogv" />
        Seu navegador é paia e não suporta o formato.
    </video>}
                </div>
                <div class="post-reactions">
                <div class="post-icons">
                <div class="like">
                    <ion-icon data-test="like-post" onClick={likeThis} class="like-icon" name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="fav">
                    <ion-icon data-test="save-post" onClick={saveThis} name="bookmark-outline"></ion-icon>
                </div>
        </div>
                <div class="curtido">
                    <img src={props.imagelike} />
                    <p>
                    Curtido por <span>{props.likename}</span> e 
                    <span data-test="likes-number" class="likeCount"> outras 7 pessoas</span>
                    </p>
                </div>
                <div class="comments"></div>
                </div>
            </div>
    )
}

export default Post