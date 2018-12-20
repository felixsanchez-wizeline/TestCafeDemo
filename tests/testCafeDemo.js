import { Selector } from 'testcafe';

fixture `Getting Started`
	.page `http://www.quepeliculaver.com`;

test('Title displays correct text 1', async t=> {
	await t
		.expect(Selector('body > div.wrapper.ng-scope > div.hero > div > p.hero-title').innerText).eql('20 películas preseleccionadas para competir por el Oscar a Mejores efectos visuales en 2019')
		.takeScreenshot('my-fixture/thank-you-page.png');
}); 