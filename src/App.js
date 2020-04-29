import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import './App.css';
 
const unityContent = new UnityContent(
  "Build/FlappyBirdWebGL.json",
  "Build/UnityLoader.js"
);
 
const App = () => {
  return <div
  style={{
    width: "100vw",
    height: "100%"
  }}
>
<h3 style={{margin:"20px 10px"}}>Instructions: Tap/Click on screen to move bird</h3>
<Unity unityContent={unityContent} /></div>;
}

export default App;


