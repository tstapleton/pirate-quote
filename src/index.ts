const defaultQuote = `I be cuttin' off yer arse an' feedin' it to me matey.`;

export async function getQuote(): Promise<string> {
	try {
		const response = await fetch('http://gangstaname.com/quotes/pirate');
		const body = await response.text();
		const regex = /<h2[\s\w='"]*>(.*)<\/h2>/;
		const data = regex.exec(body);
		if (!data || !data[1]) {
			return defaultQuote;
		}
		return data[1];
	} catch (e) {
		// can ignore any errors getting the quote
		return defaultQuote;
	}
}
