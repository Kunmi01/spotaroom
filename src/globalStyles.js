import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		padding: 0;
		font: normal 17px/1.2 sans-serif;;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

	a, button {
		border: 0;
		cursor: pointer;
    }

    a {
		color: inherit;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    a:focus,
	button:focus {
		outline: none;
    }
`;

export default GlobalStyle;
