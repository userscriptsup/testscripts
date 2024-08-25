// https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html

import { Userscripts } from "./types";

declare global {
	const GM: Userscripts.GM;

	/** An alias for `GM.info`. */
	const GM_info: typeof GM.info;

	/** An alias for `GM.xmlHttpRequest`, works exactly the same. */
	const GM_xmlhttpRequest: typeof GM.xmlHttpRequest;
}
