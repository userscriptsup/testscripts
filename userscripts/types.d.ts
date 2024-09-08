// https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html

import type Browser from "webextension-polyfill";

declare namespace Userscripts {
	interface GM {
		/**
		 * An object containing information about the running user script.
		 * Note: Available without to `@grant` it.
		 */
		info: {
			/** The name of the user script engine handling this script's execution. */
			scriptHandler: "Userscripts";
			/** The version of `Userscripts` app, e.g. `"1.0.0"`. */
			version: string;
			/** The metablock for the currently running script. */
			scriptMetaStr: string;
			/** Contains data about the currently running script. */
			script: {
				description: string;
				"exclude-match": [string];
				excludes: [string];
				grant: [string];
				includes: [string];
				"inject-into": string;
				matches: [string];
				name: string;
				namespace: string;
				noframes: boolean;
				require: [string];
				/** Tip: Currently not implemented. */
				resources: [string];
				"run-at": string;
				/** The user script version value from metadata. */
				version: string;
			};
		};

		/**
		 * @param css
		 * @returns a promise, resolved if succeeds, rejected with error message if fails
		 */
		addStyle(css: string): Promise<void>;

		/**
		 * @param key
		 * @param value any can be JSON-serialized
		 * @returns a promise, resolved if succeeds, rejected with error message if fails
		 */
		setValue(key: string, value: any): Promise<void>;

		/**
		 * @param key
		 * @param defaultValue optional
		 * @returns a promise, resolved with the value that was set or defaultValue provided or undefined if succeeds, rejected with error message if fails
		 */
		getValue(key: string, defaultValue?: any): Promise<any>;

		/**
		 * @param key
		 * @returns a promise, resolved if succeeds, rejected with error message if fails
		 */
		deleteValue(key: string): Promise<void>;

		/**
		 * @returns a promise, resolved with an array of the key names of presently set values if succeeds, rejected with error message if fails
		 */
		listValues(): Promise<Array>;

		/**
		 * *Deprecated, will be removed in Userscripts v6.0
		 * @see {@link https://github.com/quoid/userscripts/issues/667}
		 * @returns a promise, resolved with Any data that is persistent as long as this tab is open if succeeds, rejected with error message if fails
		 */
		getTab(): Promise<any>;

		/**
		 * *Deprecated, will be removed in Userscripts v6.0
		 * @see {@link https://github.com/quoid/userscripts/issues/667}
		 * @param tabObj any can be JSON-serialized
		 * @returns a promise, resolved if succeeds, rejected with error message if fails
		 */
		saveTab(tabObj: any): Promise<void>;

		/**
		 * @param url
		 * @param openInBackground optional, `false` by default
		 * @returns a promise, resolved with tab data for the tab just opened if succeeds, rejected with error message if fails
		 */
		openInTab(
			url: string,
			openInBackground: boolean = false,
		): Promise<Browser.Tabs.Tab>;

		/**
		 *
		 * @param tabId optional, the caller tab by default
		 * @returns a promise, resolved if succeeds, rejected with error message if fails
		 */
		closeTab(tabId?: number): Promise<void>;

		/**
		 * *Deprecated, will be removed in Userscripts v6.0
		 * @see {@link https://github.com/quoid/userscripts/issues/655}
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent/clipboardData}
		 * @param data
		 * @param type optional, `text/plain` by default
		 * @returns a promise, resolved with a boolean value indicating succeeds or fails, rejected with error message if fails
		 */
		setClipboard(data: string, type: string = "text/plain"): Promise<boolean>;

		/**
		 *
		 * @param details
		 * @returns an object with a single property, abort, which is a Function to abort the request.
		 * Usage: `const xhr = GM.xmlHttpRequest({...}); ... xhr.abort();`
		 */
		xmlHttpRequest(details: XHRDetails): { abort(): void };
	}

	/**
	 * The `details` object for `GM.xmlHttpRequest(details)` arguments.
	 * @see {@link https://wiki.greasespot.net/GM.xmlHttpRequest#Arguments}
	 */
	interface XHRDetails {
		/**
		 * Optional, default `false`. When true, the `data` is sent as a Blob.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send#body}
		 */
		binary?: boolean;

		/**
		 * Optional. Data to send in the request body. Usually for `POST` method requests.
		 * If the `data` field contains form-encoded data, you usually must also set the header `'Content-Type': 'application/x-www-form-urlencoded'` in the `headers` field.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send#body}
		 */
		data?: string;

		/**
		 * Optional. A set of headers to include in the request.
		 * If the `data` field contains form-encoded data, you usually must also set the header `'Content-Type': 'application/x-www-form-urlencoded'` in the `headers` field.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader}
		 */
		headers?: { [x: string]: string };

		/**
		 * Required. The HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods}
		 */
		method?: string;

		/**
		 * A string specifying the MIME type to use instead of the one specified by the server. If the server doesn't specify a type, `XMLHttpRequest` assumes `"text/xml"`.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/overrideMimeType}
		 */
		overrideMimeType?: string;

		/**
		 * The optional password to use for authentication purposes; by default, this is the `null` value.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open#password}
		 */
		password?: string;

		/**
		 * Specifies the type of the response.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType}
		 */
		responseType?: string;

		/**
		 * The time in milliseconds a request can take before automatically being terminated.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout}
		 */
		timeout?: number;

		/**
		 * The URL of the resource to send the request to.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open#url}
		 */
		url: string;

		/**
		 * The optional user name to use for authentication purposes; by default, this is the `null` value.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open#user}
		 */
		user?: string;

		/**
		 * Fired when a request has been aborted, for example because the program called `abort()`.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort_event}
		 */
		onabort?: (response: XHRResponse) => void;

		/**
		 * Fired when the request encountered an error.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/error_event}
		 */
		onerror?: (response: XHRResponse) => void;

		/**
		 * Fired when an `XMLHttpRequest` transaction completes successfully.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event}
		 */
		onload?: (response: XHRResponse) => void;

		/**
		 * Fired when a request has completed, whether successfully (after `load`) or unsuccessfully (after `abort` or `error`).
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/loadend_event}
		 */
		onloadend?: (response: XHRResponse) => void;

		/**
		 * Fired when a request has started to load data.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/loadstart_event}
		 */
		onloadstart?: (response: XHRResponse) => void;

		/**
		 * Fired periodically when a request receives more data.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/progress_event}
		 */
		onprogress?: (response: XHRResponse) => void;

		/**
		 * Fired whenever the `readyState` property changes.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readystatechange_event}
		 */
		onreadystatechange?: (response: XHRResponse) => void;

		/**
		 * Fired when progress is terminated due to preset time expiring.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout_event}
		 */
		ontimeout?: (response: XHRResponse) => void;
	}

	/**
	 * Properties based on a standard `XMLHttpRequest` object.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#instance_properties}
	 */
	interface XHRResponse {
		/**
		 * Returns a number representing the state of the request.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState}
		 */
		readyState: number;

		/**
		 * Returns the response body.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response}
		 */
		response: any;

		/**
		 * All the response headers, separated by CRLF, as a string, or `null` if no response has been received.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders}
		 */
		responseHeaders: string;

		/**
		 * Returns a string that contains the response to the request as text, or `null` if the request was unsuccessful or has not yet been sent.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText}
		 */
		responseText: string;

		/**
		 * Returns the response type.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType}
		 */
		responseType: XMLHttpRequestResponseType;

		/**
		 * Returns the serialized URL of the response or the empty string if the URL is null.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseURL}
		 */
		responseURL: string;

		/**
		 * Returns the HTTP response status code of the request.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status}
		 */
		status: number;

		/**
		 * Returns a string containing the response string returned by the HTTP server. Unlike `status`, this includes the entire text of the response message ("`OK`", for example).
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/statusText}
		 */
		statusText: string;

		/**
		 * The time in milliseconds a request can take before automatically being terminated.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout}
		 */
		timeout: number;

		/**
		 * Returns `true` if cross-site `Access-Control` requests should be made using credentials such as cookies or authorization headers; otherwise `false`.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials}
		 */
		withCredentials: boolean;
	}
}
