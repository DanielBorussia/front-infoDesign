import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }


    ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
    ul { list-style: none; }
    a{
        text-decoration : none;
    }

    body {
        height: 100vh;
        margin: 0 auto;
        overscroll-behavior: none;
        width: 100%; 
    }

    .my-swal {
        z-index: 2000;
    }

    #app {
        box-shadow: 0 0 10px rgba(0, 0, 0, .05);
        overflow-x: hidden;
        height: 100%;
        width: 100%;
        padding-bottom: 10px;
        background: #f5f5f5;
    }

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-track{
        background: #e0e0e0;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }
`