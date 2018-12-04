import { Selector } from 'testcafe';

fixture `Getting Started`
	.page `https://devexpress.github.io/testcafe/example`;

test('Given entering \'Jhon Smith\' in developer name when clicks on Submit button Then Thank you message displays correctly', async t=> {
	await t
		.typeText('#developer-name', 'Jhon Smith')
		.click('#submit-button')
		.expect(Selector('#article-header').innerText).eql('Thank you, Jhon Smith!');
}); 
