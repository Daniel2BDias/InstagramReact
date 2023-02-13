const Story = (props) => {
    return (
            <div class="content">
                <div class="img-content">
                    <img src={props.image} />
                </div>
            <div class="names"><p>{props.text}</p></div>
          </div>
    )
};

export default Story;