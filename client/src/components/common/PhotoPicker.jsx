import React from "react";
import ReactDOM from "react-dom";
function PhotoPicker({ onChange }) {
  const component = (
    <input type="file" hidden id="photo-picker" onChange={onChange} />
  );

  return ReactDOM.createPortal(
    component,
    document.getElementById("photo-picker-elemnet")
  );
}
//bên document.js khi render nhét thg photo-picker vào thg element trên
export default PhotoPicker;
