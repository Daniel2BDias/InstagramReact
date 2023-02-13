import suggestionsInfo from "./suggestionsInfo";
import Suggestions from "./Suggestions";

const FollowSuggestions = () => {
  return (
    <>
        <div class="sidediv">
          <p>Sugestões para você</p>
          <p><span>Ver tudo</span></p>
        </div>
        <div class="follow">
          {suggestionsInfo.map(sI => <Suggestions image={sI.image} name={sI.name}/>)}
        </div>
      </>
  )
}

export default FollowSuggestions;