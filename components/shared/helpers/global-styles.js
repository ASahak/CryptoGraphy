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
        width: 300px;
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
`;
