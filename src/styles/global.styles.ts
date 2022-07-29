import { createGlobalStyle } from 'styled-components'
import '@elastic/eui/dist/eui_theme_dark.css';

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

    body {
        background-color: grey;
        padding: 100px;
        font-size: 1.3em;
    }

	h1, h2 {
		margin: 0;
	}

	fieldset {
		margin: 0;
		padding: 0;
		border: 0;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;
	}

    p {
        margin-bottom: 20px;
    }

    pre {
        padding: 10px;
        margin-bottom: 20px;
        background-color: darkgray;
        color: black;
    }
`
