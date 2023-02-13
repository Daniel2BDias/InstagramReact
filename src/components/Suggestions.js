const Suggestions = (props) => {
    return (
        <div class="suggest">
            <div class="perfil">
              <img src={props.image} />
              <div>
                <p><span>{props.name}</span></p>
                <p>Segue você</p>
              </div>
            </div>
            <div class="seguir">
              Seguir
            </div>
          </div>
    )
}

export default Suggestions;