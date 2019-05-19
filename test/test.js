import assert from 'assert';
import Container from '../lib/Container';

describe('Container test suite', () => {
	it('Should successfully mutate Container props', () => {
		let testContainer = new Container({
			testProp: 'woo'
		});

		testContainer.on('change', (oldProps, newProps) => {
			assert.equal(oldProps.testProp === 'woo', true);
			assert.equal(newProps.testProp === 'changed test', true);
		});

		testContainer.set('testProp', 'changed test');
	});

	it('Container.get should return known prop value', () => {
		let testContainer = new Container({
			name: 'mitch'
		});

		let name = testContainer.get('name');

		assert.equal(name === 'mitch', true);
	});
});