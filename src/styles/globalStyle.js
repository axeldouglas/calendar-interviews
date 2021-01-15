import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, 
    *:before, 
    *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
        
        background: #F7F7F7;
    }
`;

export default GlobalStyle;
