const PostHead = () => {

    const imgPerfil = ["Yugi_muto.jpg", "mtg.jpg", "urso.jpg"];
    const nomePerfil = ["Muto Yugi", "Magic: The Gathering", "O Urso"];
    


    return (
        <div class="post-head">
        <div>
            {imgPerfil.map(img => `<img src="./assets/${img}" />`)}
            {nomePerfil.map(nome => `<p>${nome}</p>`)}
        </div>
        <div class="pontos">
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        </div>
            )
}