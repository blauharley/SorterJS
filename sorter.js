
function Sorter() {}

(function () {

	var _data;

	var sortOpts = {
		asc : function (val, val2) {
			return val < val2;
		},
		desc : function (val, val2) {
			return val > val2;
		}
	};

	function copyArray(array) {
		return array ? Array.prototype.slice.call(array, array) : [];
	}
	/*
	 *  @obj is an JSON object
	 *  @keys is an array with the order of keys matching the key-order of obj
	 */
	function getValueByKey(obj, keys) {

		var val = obj;
		keys = copyArray(keys);

		if (!keys.length) {
			return val;
		}
		while (keys.length && val) {
			var key = keys.shift();
			val = val[key]; // go to the value
		}

		return val;
	}

	function setValueByKey(obj, keys, val) {

		keys = copyArray(keys);

		if (!keys.length) {
			return val;
		}
		while (keys.length - 1) {
			var key = keys.shift();

			obj = obj[key]; // go to the value
		}

		obj[keys.shift()] = val;
		return obj;
	}

	function swap(eleIdx, eleIdx2, array) {
		var tmp = array[eleIdx];
		array[eleIdx] = array[eleIdx2];
		array[eleIdx2] = tmp;
	}

	function insertionSort(array, keys, checker) {

		checker = sortOpts[checker];

		for (var k = 0; k < array.length - 1; k++) {
			for (var i = k + 1; i > 0 && checker(getValueByKey(array[i], keys), getValueByKey(array[i - 1], keys)); i--) {
				swap(i, i - 1, array);
			}
		}
	}

	function isOrderSet(order) {
		return order && (order === 'asc' || order === 'desc');
	}

	function getKeyArrayBySplitSign(keys, splitSign) {
		return keys ? keys.split(splitSign) : [];
	}

	Sorter.prototype.sort = function (keys, order) {
		keys = getKeyArrayBySplitSign(keys, '.');
		insertionSort(_data, keys, order);
	};

	Sorter.prototype.addData = function (data, keys, order) {
		if (isOrderSet(order)) {
			_data = copyArray(data);
			this.sort(keys, order);
		} else {
			_data = copyArray(data);
		}
	};

	Sorter.prototype.indexOf = function (val, keys) {
		keys = getKeyArrayBySplitSign(keys, '.');
		for (var i = 0; i < _data.length; i++) {
			if (getValueByKey(_data[i], keys) === val)
				return i;
		}
	};

	Sorter.prototype.lastIndexOf = function (val, keys) {
		keys = getKeyArrayBySplitSign(keys, '.');
		for (var i = _data.length - 1; i >= 0; i--) {
			if (getValueByKey(_data[i], keys) === val)
				return i;
		}
	};

	Sorter.prototype.shift = function () {
		return _data.shift();
	};

	Sorter.prototype.push = function (ele) {
		return _data.push(ele);
	};

	Sorter.prototype.unshift = function (ele) {
		return _data.unshift(ele);
	};

	Sorter.prototype.pop = function () {
		return _data.pop();
	};
	
	Sorter.prototype.get = function (index,keys) {
		keys = getKeyArrayBySplitSign(keys, '.');
		var copyedElem = (_data[index] && _data[index].constructor === Object) ? Object.create(_data[index]) : _data[index];
		return copyedElem;
	};
	
	Sorter.prototype.getAll = function () {
		return _data
	};

	Sorter.prototype.forEach = function (func) {
		if (Array.prototype.forEach) {
			_data.forEach(func);
		} else {
			for (var index = 0; index < _data.length; index++) {
				func(_data[index], index, _data);
			}
		}
	};

	Sorter.prototype.every = function (func, keys) {

		keys = getKeyArrayBySplitSign(keys, '.');

		for (var index = 0; index < _data.length; index++) {
			var returnedVal = func(getValueByKey(_data[index], keys), index, _data);
			if (!returnedVal) {
				return false;
			}
		}

		return true;
	};

	Sorter.prototype.some = function (func, keys) {

		keys = getKeyArrayBySplitSign(keys, '.');

		for (var index = 0; index < _data.length; index++) {
			var returnedVal = func(getValueByKey(_data[index], keys), index, _data);
			if (returnedVal) {
				return true;
			}
		}

		return false;
	};

	Sorter.prototype.filter = function (func, keys) {

		keys = getKeyArrayBySplitSign(keys, '.');
		var newArray = [];
		
		for (var index = 0; index < _data.length; index++) {
			var returnedVal = func(getValueByKey(_data[index], keys), index, _data);
			if (returnedVal) {
				var copyedElem = (_data[index].constructor === Object) ? Object.create(_data[index]) : _data[index];
				newArray.push(copyedElem);
			}
		}
		
		return newArray;
	};
	// !!! last point
	Sorter.prototype.map = function (func, keys) {

		keys = getKeyArrayBySplitSign(keys, '.');
		var newArray = [];

		for (var index = 0; index < _data.length; index++) {
			var returnedVal = func(getValueByKey(_data[index], keys), index, _data);
			//var alteredElem = setValueByKey(_data[index], keys, returnedVal);
			newArray.push(returnedVal);
		}

		return newArray;
	};

	Sorter.prototype.reduce = function (func, keys, startValue) {

		keys = getKeyArrayBySplitSign(keys, '.');

		if (startValue) {
			_data.unshift(startValue);
		}

		var prevValue = getValueByKey(_data[0], keys);
		var result = prevValue;

		for (var index = 1; index < _data.length; index++) {
			var nextValue = getValueByKey(_data[index], keys);
			prevValue = func(prevValue, nextValue, index, _data);
			result = prevValue;
		}

		return result;
	};

	Sorter.prototype.reduceRight = function (func, keys, startValue) {

		keys = getKeyArrayBySplitSign(keys, '.');

		if (startValue) {
			_data.push(startValue);
		}

		var prevValue = getValueByKey(_data[_data.length - 1], keys);
		var result = prevValue;

		for (var index = _data.length - 2; index >= 0; index--) {
			var nextValue = getValueByKey(_data[index], keys);
			prevValue = func(prevValue, nextValue, index, _data);
			result = prevValue;
		}

		return result;
	};

})();
