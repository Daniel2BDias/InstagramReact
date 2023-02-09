import PostIcons from "./PostIcons";


const PostBody = () => {
    return (
        <div>
            <div class="post">
                <div class="post-head">
                <div>
                    <img src="./assets/Yugi_muto.jpg" />
                    <p>Muto Yugi</p>
                </div>
                <div class="pontos">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
                </div>
                <div class="post-content">
                <img src="./assets/magonegro.jpg" />
                </div>
                <div class="post-reactions">
                <PostIcons />
                <div class="curtido">
                    <img src="./assets/Seto_Kaiba.jpg" />
                    <p>
                    Curtido por <span>Kaiba Seto</span> e
                    <span>outras 4.3 mi pessoas</span>
                    </p>
                </div>
                <div class="comments"></div>
                </div>
            </div>
            <div class="post">
                <div class="post-head">
                <div>
                    <img src="./assets/mtg.jpg" />
                    <p>Magic: The Gathering</p>
                </div>
                <div class="pontos">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
                </div>
                <div class="post-content">
                <img src="./assets/urdragon.jpg" />
                </div>
                <div class="post-reactions">
                <PostIcons />
                <div class="curtido">
                    <img src="./assets/konami.jpg" />
                    <p>
                    Curtido por <span>Konami</span> e
                    <span>outras 1.32 mi pessoas</span>
                    </p>
                </div>
                <div class="comments"></div>
                </div>
            </div>
            <div class="post">
                <div class="post-head">
                <div>
                    <img src="./assets/urso.jpg" />
                    <p>O Urso</p>
                </div>
                <div class="pontos">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
                </div>
                <div class="post-content">
                <video autoplay loop muted>
                    <source src="./assets/video.mp4" type="video/mp4" />
                    <source src="./assets/video.ogv" type="video/ogv" />
                    Seu navegador é paia e não suporta o formato.
                </video>
                </div>
                <div class="post-reactions">
                <PostIcons />
                <div class="curtido">
                    <img src="./assets/salmao.jpg" />
                    <p>
                    Curtido por <span>Salmão</span> e
                    <span>outras 32.432 pessoas</span>
                    </p>
                </div>
                <div class="comments"></div>
                </div>
            </div>
          </div>
    )
}


export default PostBody