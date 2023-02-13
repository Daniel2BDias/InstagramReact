import { useState } from "react";

const ProfileInfo = () => {

    const [imgUser, setImgUser] = useState(undefined);
    const [nameUser, setNameUser] = useState(undefined);
    const ImgInvalida = (imgUser == undefined || imgUser == null || imgUser == "");

    const defaultName = "Son Goku";
    const nomeInvalido = (nameUser == undefined || nameUser == null || nameUser == "")

    const trocaImg = () => {
        
        const novaImgUser = prompt("Digita a URL da Imagem");
        setImgUser(novaImgUser);
    
    }
    
    const editName = () => {
        
        const novoNameUser = prompt("Digite um nome");
        setNameUser(novoNameUser);
        
    }
    
    return (
        <div class="img-headline">
          <img data-test="profile-image" onClick={trocaImg} src={ImgInvalida ? "./assets/goku.jpg" : imgUser} />
          <div>
            <h1 data-test="name">{nomeInvalido ? defaultName : nameUser}</h1>
            <p>Agora vc é o {nomeInvalido ? defaultName : nameUser}</p>
          </div>
          <div data-test="edit-name" onClick={editName} class="edit-username">
          <ion-icon name="brush"></ion-icon>
          </div>
        </div>
    )
}

export default ProfileInfo