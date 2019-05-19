import EventEmitter from './EventEmitter';
import _ from 'lodash';

let ContainerList = function() {
	this._containers = [];

	_.extend(this, new EventEmitter());

	this.push = function(container) {
		let len = this._containers.push(container);
		this.emit('add', container);
		return len;
	}

	this.unshift = function(container) {
		let len = this._containers.unshift(container);
		this.emit('add', container);
		return len;
	}

	this.pop = function() {
		let container = this._containers.pop();
		this.emit('remove', container);
		return container;
	}

	this.shift = function() {
		let container = this._container.shift();
		this.emit('remove', container);
		return container;
	}

	this.each = function(callback) {
		this._containers.forEach((container) => {
			callback(container);
		});
	}
}

export default ContainerList;