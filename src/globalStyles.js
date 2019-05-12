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
		font: normal 17px/1.2 -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
		background: lightgray;
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
`;

export default GlobalStyle;
