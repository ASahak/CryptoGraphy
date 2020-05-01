import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
      @import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');
      html,
      body {
        font-family: Dosis, serif;
        background-image: url('./assets/images/backgroundEncrypt.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        padding: 0;
        margin: 0;
        position: relative;
      }
      body.bg-none {
        background-image: none;
        background-color: #fff;
      }
      body.still-loading:after {
        content: '';
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
        background-image: url(./assets/images/loading.gif);
        background-position: center;
        background-size: 40%;
        background-repeat: no-repeat;
        background-color: #fff;
        transition: .5s;
        opacity: 1;
      }
      body.still-animation-leave:after {
        opacity: 0;
      }
      * {
        box-sizing: border-box;
      }
      #portal {
        position: fixed;
        right: 0;
        max-width: 300px;
        max-height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    
    .spinner {
      margin: 0;
      height: 16px;
      width: 30px;
      display: flex;
      align-items: center;
      text-align: center;
    }
    
    .spinner > div {
      width: 8px;
      height: 8px;
      border-radius: 100%;
      display: inline-block;
      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      background: rgba(0,0,0,.3);
    }
     
    .spinner .bounce1 {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }
    
    .spinner .bounce2 {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
    
    @-webkit-keyframes sk-bouncedelay {
      0%,
      80%,
      100% {
        -webkit-transform: scale(0)
      }
      40% {
        -webkit-transform: scale(1.0)
      }
    }
    
    @keyframes sk-bouncedelay {
      0%,
      80%,
      100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      40% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
      }
    }
`;
