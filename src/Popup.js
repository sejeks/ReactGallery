import React, { useState, useImperativeHandle } from "react";

function Popup(props, ref) {
    const [isVisible, setIsVisible] = useState(false);
    const [url, setUrl] = useState('');

    useImperativeHandle(ref, () => ({
      show: (url) => {
        setIsVisible(true);
        setUrl(url);
      },
      hide: () => {
        setIsVisible(false);
      }
    }));

    const popup = (
        <div className="popup" onClick={() => ref.current.hide()}>
            <img src={url} alt=" "/>
        </div>
    );

    return isVisible ? popup : null;
}

export default React.forwardRef(Popup);