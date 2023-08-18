import * as THREE from "three";
import { GLTFLoader } from "./node_modules/three/examples/jsm/loaders/GLTFLoader.js";

import WebGL from "three/addons/capabilities/WebGL.js";

if (!WebGL.isWebGLAvailable()) {
    const warning = WebGL.getWebGLErrorMessage();
    const warningElement = document.getElementById("warning");
    warningElement.appendChild(warning);
    warningElement.classList.add("webgl-warning-visible");
  }
