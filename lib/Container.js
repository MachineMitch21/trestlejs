import EventEmitter from './EventEmitter';
import _ from 'lodash';

function Container(initialProps) {
	this.props = initialProps;

	_.extend(this, new EventEmitter());

	this.set = function(propName, prop) {
		let oldProps = Object.assign({}, this.props);
		this.props = Object.assign(this.props, { [propName]: prop });
		this.emit('change', oldProps, this.props);
	};

	this.get = function(propName) {
		return this.props[propName];
	};
}

export default Container;