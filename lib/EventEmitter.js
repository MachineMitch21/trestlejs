
function EventEmitter() {
	this._listeners = new Map();

	this.on = function(eventName, listenerCb) {
		if (!this._listeners.has(eventName)) {
			this._listeners.set(eventName, [listenerCb]);
		} else {
			this._listeners.get(eventName).push(listenerCb);
		}
	};

	this.off = function(eventName) {
		let listenersArr = this._listeners.get(eventName);

		if (listenersArr === undefined) return;

		if (arguments.length > 1) {
			for (let i = listenersArr.length; i >= 0; i--) {
				for (let j = 1; j < arguments.length; j++) {
					if (listener === arguments[j]) {
						listenersArr.splice(i, 1);
					}
				}
			}
		} else {
			listenersArr = [];
		}
	};

	this.emit = function(eventName) {
		let listenersArr = this._listeners.get(eventName);
		if (listenersArr === undefined) return;

		let args = Array.from(arguments).slice(1);
		listenersArr.forEach(listener => {
			listener.apply(listener, args);
		});
	};
}

export default EventEmitter;