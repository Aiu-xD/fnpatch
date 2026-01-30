import { generateTGuess } from "tguess";
/**
 * Generate Arkose `tguess` without running an HTTP server.
 *
 * @param {Object} params
 * @param {string} params.guess           Value used as the `guess` argument
 * @param {string} params.dapibUrl        URL to the Arkose `dapib.js` script
 * @param {string} params.sessionToken    Arkose session token
 * @returns {Promise<string>}             Generated `tguess`
 */
async function getTGuess({ guess, dapibUrl, sessionToken }) {
	if (!guess || !dapibUrl || !sessionToken) {
		throw new Error("Missing data");
	}

	const scriptContent = await (await fetch(dapibUrl)).text();
	if (!scriptContent) {
		throw new Error("Invalid dapib url");
	}

	return await generateTGuess(scriptContent, {
		sessionToken,
		guess,
	});
}

export default { getTGuess };
