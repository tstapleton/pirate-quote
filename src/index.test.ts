import { defaultQuote, getQuote } from './index';

describe('getQuote', () => {
	test('should return the pirate quote', async () => {
		const pirateQuote = 'Ahoy mate!';
		jest.spyOn(global, 'fetch').mockResolvedValue({
			text: () => Promise.resolve(`<body><h2>${pirateQuote}</h2></body>`),
		} as Response);
		expect(await getQuote()).toBe(pirateQuote);
	});
	test('should return the default quote when it fails to parse the response', async () => {
		jest.spyOn(global, 'fetch').mockResolvedValue({
			text: () => Promise.resolve(`<body><h1>Hello, world!</h1></body>`),
		} as Response);
		expect(await getQuote()).toBe(defaultQuote);
	});
	test('should return the default quote when it fails to fetch a pirate quote', async () => {
		jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Oh snap!'));
		expect(await getQuote()).toBe(defaultQuote);
	});
});
