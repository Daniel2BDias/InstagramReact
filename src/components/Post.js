import { useState } from "react";

const Post = (props) => {

    const [like, setLike] = useState("heart-outline");
    const [save, setSave] = useState("bookmark-outline");
    const [cor, setCor] = useState("");
    const [number, setNumber] = useState(15);

    const likeUnlike = () => {
        if(like == "heart-outline"){
            setLike("heart")
            setNumber(number+1)
        } else {
            setLike("heart-outline")
            setNumber(number-1)
        }

        if(cor == ""){
            setCor("liked")
        } else {
            setCor("")
        }


    }

    const justLike = () => {
        if(like == "heart-outline"){
            setLike("heart")
            setNumber(number+1)
        }
        if(cor == ""){
            setCor("liked")
        }
    }

    const saveUnsave = () => {
        if(save == "bookmark-outline"){
            setSave("bookmark")
        } else {
            setSave("bookmark-outline")
        }
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
                {props.type === "image" ? <img onDoubleClick={justLike} data-test="post-image" src={props.content} /> : <video data-test="post-image" autoplay loop muted>
        <source src="./assets/video.mp4" type="video/mp4" />
        <source src="./assets/video.ogv" type="video/ogv" />
        Seu navegador é paia e não suporta o formato.
    </video>}
                </div>
                <div class="post-reactions">
                <div class="post-icons">
                <div class="like">
                    <span className={cor}>
                    <ion-icon data-test="like-post" onClick={likeUnlike} name={like}></ion-icon>
                    </span>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="fav">
                    <ion-icon data-test="save-post" onClick={saveUnsave} name={save}></ion-icon>
                </div>
        </div>
                <div class="curtido">
                    <img src={props.imagelike} />
                    <p>
                    Curtido por <span>{props.likename}</span> e 
                    <span data-test="likes-number" class="likeCount"> outras {number} pessoas</span>
                    </p>
                </div>
                <div class="comments"></div>
                </div>
            </div>
    )
}

export default Post