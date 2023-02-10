const Cabecalho = () => {
return (
        <div class="cabecalho">
          <div class="brand">
            <div class="logo">
              <div><ion-icon name="logo-instagram"></ion-icon></div>
              <div class="borda"><img src="./assets/logo.png" /></div>
            </div>
          </div>
          <div class="pesquisa">
            <input type="search" name="Search-bar" placeholder="Pesquisar" />
          </div>
          <div class="logomobile">
            <img src="./assets/logo.png" />
          </div>
          <div class="icons-cab">
            <ion-icon class="paper" name="paper-plane-outline"></ion-icon>
            <ion-icon class="compass" name="compass-outline"></ion-icon>
            <ion-icon class="heart" name="heart-outline"></ion-icon>
            <ion-icon class="person" name="person-outline"></ion-icon>
          </div>
        </div>
      )     
}
export default Cabecalho