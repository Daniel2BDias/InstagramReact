import ProfileInfo from "./ProfileInfo";
import FollowSuggestions from "./FollowSuggestions";

const Sidebar = () => {
return (
<div class="sidebar">
        <ProfileInfo />
        <FollowSuggestions/>
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