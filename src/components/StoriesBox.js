import storyInfo from "./storyInfo";
import Story from "./Story";



const Stories = () => {
return (
        <div class="stories">
          {storyInfo.map(s => <Story image={s.image} text={s.text}/>)}
          <ion-icon
            class="icon-stories"
            name="chevron-forward-circle"
          ></ion-icon>
        </div>
        )
}
export default Stories