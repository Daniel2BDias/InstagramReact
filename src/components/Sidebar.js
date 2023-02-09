import ProfileInfo from "./ProfileInfo"

const Sidebar = () => {
return (
<div class="sidebar">
        <ProfileInfo foto="" nome="" />
        <div class="sidediv">
          <p>Sugestões para você</p>
          <p><span>Ver tudo</span></p>
        </div>
        <div class="follow">
          <div class="suggest">
            <div class="perfil">
              <img src="./assets/jotaro.jpg" />
              <div>
                <p><span>Kujo Jotaro</span></p>
                <p>Segue você</p>
              </div>
            </div>
            <div class="seguir">
              Seguir
            </div>
          </div>
          <div class="suggest">
            <div class="perfil">
              <img src="./assets/kratos.jpg" />
              <div>
                <p><span>Kratos</span></p>
                <p>Segue você</p>
              </div>
            </div>
            <div class="seguir">
              Seguir
            </div>
          </div>
          <div class="suggest">
            <div class="perfil">
              <img src="./assets/paarthunax.jpg" />
              <div>
                <p><span>Paarthunax</span></p>
                <p>Novo no Instagram</p>
              </div>
            </div>
            <div class="seguir">
              Seguir
            </div>
          </div>
          <div class="suggest">
            <div class="perfil">
              <img src="./assets/dogmeat.jpg" />
              <div>
                <p><span>Dogmeat</span></p>
                <p>Segue você</p>
              </div>
            </div>
            <div class="seguir">
              Seguir
            </div>
          </div>
          <div class="suggest">
            <div class="perfil">
              <img src="./assets/cabo.jpg" />
              <div>
                <p><span>Cabo Daciolo</span></p>
                <p>Segue a Deux</p>
              </div>
            </div>
            <div class="seguir">
              Seguir
            </div>
          </div>
        </div>
        <div class="terms">
          <p>
            <a>Sobre</a> • <a>Ajuda</a> • <a>Imprensa</a> • <a>API</a> •
            <a>Carreiras</a> • <a>Privacidade</a> • <a>Termos</a> •
            <a>Localizações</a> • <a>Contas mais relevantes</a> •
            <a>Hashtags</a> • <a>Idioma</a>
          </p>
        </div>
        <div class="license">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
)
}

export default Sidebar