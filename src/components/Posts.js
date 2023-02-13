import userInfo from "./userInfo";
import Post from "./Post";

const PostBody = () => {
    return (
        <>
        {userInfo.map(user => <Post image={user.image} name={user.name} content={user.content} type={user.type} imagelike={user.imageLike} likename={user.likeName}/>)}
        </>
        )
}


export default PostBody;