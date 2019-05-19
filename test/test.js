import assert from 'assert';
import Container from '../lib/Container';
import ContainerList from '../lib/ContainerList';

describe('Container test suite', () => {
	it('Should successfully mutate Container props', (done) => {
		let testContainer = new Container({
			testProp: 'woo'
		});

		testContainer.on('change', (oldProps, newProps) => {
			assert.equal(oldProps.testProp === 'woo', true);
			assert.equal(newProps.testProp === 'changed test', true);

			done();
		});

		testContainer.set('testProp', 'changed test');
	});

	it('Container.get should return known prop value', (done) => {
		let testContainer = new Container({
			name: 'mitch'
		});

		let name = testContainer.get('name');

		assert.equal(name === 'mitch', true);
		done();
	});
});

describe('ContainerList test suite', () => {

	it('ConatinerList add should get the container which was added as a parameter', (done) => {
		let containerList = new ContainerList();
		let cont = new Container({
			test: 'woo'
		});	

		containerList.on('add', (container) => {
			assert.equal(container === cont, true);
			done();
		});
	
		containerList.push(cont);
	});

	it('ContainerList remove should get the container which was removed as a parameter', (done) => {
		let containersList = new ContainerList();
		let cont = new Container({
			test: 'woo'
		});

		containersList.on('remove', (container) => {
			assert.equal(container === cont, true);
			done();
		});

		containersList.push(cont);
		containersList.pop();
	});
});