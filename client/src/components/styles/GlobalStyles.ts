import * as styled from 'styled-components';

// For @styled/typescript-styled-plugin plugin to work, I need to add styled before createGlobalStyle. Otherwise, auto-formatting will not work. (css or sty also works)
const GlobalStyles = styled.createGlobalStyle`
	body,
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: monospace;
    /* Somehow, if I set display to flex, react will treat this file as a literal string, rendering it as text. */
	}

	body {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}
	a {
		text-decoration: none;
	}
`;

export default GlobalStyles;
