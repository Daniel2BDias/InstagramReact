const trocaImg = () => {
    const imgPerfil = "./assets/goku.jpg";
    let imgUser = prompt("Digita a URL da Imagem");

    if(imgUser === undefined || imgUser === null || imgUser === ""){
        return imgPerfil
    } else {
        return imgUser;
    }
}
const ProfileInfo = () => {
    return (
        <div class="img-headline">
          <img data-test="profile-img" onClick="trocaImg()" src={trocaImg} />
          <div>
            <h1 data-test="name">Son Goku</h1>
            <p>Goku</p>
          </div>
          <div data-test="edit-name" class="edit-username">
          <ion-icon name="brush"></ion-icon>
          </div>
        </div>
    )
}