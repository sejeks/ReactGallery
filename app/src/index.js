import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gallery from './Gallery';

ReactDOM.render(<Gallery imageUrls={window.urls} />, document.getElementById("root"));

