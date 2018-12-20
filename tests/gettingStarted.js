import { Selector } from 'testcafe';

fixture `Getting Started`
	// .page `https://devexpress.github.io/testcafe/example`;
	.page `http://www.quepeliculaver.com`;

test('Title displays correct text 1', async t=> {
	await t
		// .typeText('#developer-name', 'Jhon Smith')
		// .click('#submit-button')
		
		.expect(Selector('body > div.wrapper.ng-scope > div.hero > div > p.hero-title').innerText).eql('20 películas preseleccionadas para competir por el Oscar a Mejores efectos visuales en 2019')
		.takeScreenshot('my-fixture/thank-you-page.png');
}); 

// test('Title displays correct text', async t=> {
// 	await t
// 		// .typeText('#developer-name', 'Jhon Smith')
// 		// .click('#submit-button')
// 		.expect(Selector('body > div.wrapper.ng-scope > div.hero > div > p.hero-title').innerText).eql('20 películas preseleccionadas para competir por el Oscar a Mejores efectos visuales en 2019');
// }); 

// test('Title displays correct text 2', async t=> {
// 	await t
// 		// .typeText('#developer-name', 'Jhon Smith')
// 		// .click('#submit-button')
// 		.expect(Selector('body > div.wrapper.ng-scope > div.hero > div > p.hero-title').innerText).eql('20 películas preseleccionadas para competir por el Oscar a Mejores efectos visuales en 2019');
// }); 

// test('Title displays correct text 3', async t=> {
// 	await t
// 		// .typeText('#developer-name', 'Jhon Smith')
// 		// .click('#submit-button')
// 		.expect(Selector('body > div.wrapper.ng-scope > div.hero > div > p.hero-title').innerText).eql('20 películas preseleccionadas para competir por el Oscar a Mejores efectos visuales en 2019');
// }); 

// test('Title displays correct text 4', async t=> {
// 	await t
// 		// .typeText('#developer-name', 'Jhon Smith')
// 		// .click('#submit-button')
// 		.expect(Selector('body > div.wrapper.ng-scope > div.hero > div > p.hero-title').innerText).eql('20 películas preseleccionadas para competir por el Oscar a Mejores efectos visuales en 2019');
// }); 

// test('Title displays correct text 5', async t=> {
// 	await t
// 		// .typeText('#developer-name', 'Jhon Smith')
// 		// .click('#submit-button')
// 		.expect(Selector('body > div.wrapper.ng-scope > div.hero > div > p.hero-title').innerText).eql('20 películas preseleccionadas para competir por el Oscar a Mejores efectos visuales en 2019');
// }); 

