// https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html

import { Userscripts } from "./types";

declare global {
	const GM: Userscripts.GM;

	/** An alias for `GM.info`. */
	const GM_info: typeof GM.info;

	/** Legacy Synchronous `GM_xmlhttpRequest` */
	const GM_xmlhttpRequest: Userscripts.GM_xmlhttpRequest;
}
