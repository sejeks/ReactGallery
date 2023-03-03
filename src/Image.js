import React from "react";
// import './index.css';

function Image(props) {
  const image = (
    <div
      className="images"
      key={"img" + props.index}
      onClick={() => props.popup.current.show(props.imageUrl)}
    >
      <img src={props.imageUrl} alt=" " />
    </div>
  );

  return props.imageUrl ? image : null;
}

export default Image;
