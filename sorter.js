
function SorterJS(data) {
	this._data = data ? Array.prototype.slice.call(data) : [];
}

(function () {

	var sortOpts = {
		asc : function (val, val2) {
			return val < val2;
		},
		desc : function (val, val2) {
			return val > val2;
		}
	};
	
	var KEY_SPLIT_SIGN = '.';
	
	function isNumber(ele){
    	return ele !== null && !isNaN(ele);
	}

	function copyElement(ele){
		var copyedElem = (ele && ele.constructor === Object) ? Object.create(ele) : ele;
		return copyedElem;
	}
	
	function copyArray(array) {
		return array ? Array.prototype.slice.call(array) : [];
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
	/*
	* @data is an array that can contain elements of any type
	* @keys is a string that can be used when handling with object-elements. When there are sub-objects you can separate the properties by a dot ('pro.sub_pro').
	* @order is a string that is used for sorting the elements in ascending order or in descenting order. The @order can be set to 'asc' or 'desc'.
	*/
	SorterJS.prototype.addData = function (data, keys, order) {
		if (isOrderSet(order)) {
			this._data = copyArray(data);
			this.sort(order,keys);
		} else {
			this._data = copyArray(data);
		}
	};
	/*
	* sort accepts the same params except for it does not support data to be given over
	*/
	SorterJS.prototype.sort = function (order,keys) {
		keys = getKeyArrayBySplitSign(keys, KEY_SPLIT_SIGN);
		insertionSort(this._data, keys, order);
	};
	/*
	* indexOf does the same as Array.prototype.indexOf. It searches for a @val in a data-structure at the left-beginning and returns the index if @val is found otherwise -1
	* @val should be the same type as the elements themself. Nevertheless @val can also be every type but without guarantee that @val is ever found
	* @keys is a string that can be used when handling with object-elements.	
	*/
	SorterJS.prototype.indexOf = function (val, offset, keys) {
		keys = getKeyArrayBySplitSign(keys, KEY_SPLIT_SIGN);
		var pos = (isNumber(offset) && offset > 0) ? offset : 0;
		for (var i = pos; i < this._data.length; i++) {
			if (getValueByKey(this._data[i], keys) === val)
				return i;
		}
		return -1;
	};
	/*
	* lastIndexOf does the same as Array.prototype.lastIndexOf. It searches for a @val in a data-structure at the right-beginning and returns the index if @val is found otherwise -1
	* @val should be the same type as the elements themself. Nevertheless @val can also be every type but without guarantee that @val is ever found
	* @keys is a string that can be used when handling with object-elements.	*/
	SorterJS.prototype.lastIndexOf = function (val, offset, keys) {
		keys = getKeyArrayBySplitSign(keys, KEY_SPLIT_SIGN);
		var pos = (isNumber(offset) && offset < this._data.length) ? offset : this._data.length - 1;
		for (var i = pos; i >= 0; i--) {
			if (getValueByKey(this._data[i], keys) === val)
				return i;
		}
		return -1;
	};
	/*
	* shift does the same as Array.prototype.shift. It returns the first element
	*/
	SorterJS.prototype.shift = function () {
		return this._data.shift();
	};
	/*
	* push does the same as Array.prototype.push. It inserts an element @ele at the end of the data-structure 
	*/
	SorterJS.prototype.push = function (ele) {
		return this._data.push(ele);
	};
	/*
	* unshift does the same as Array.prototype.unshift. It inserts an element @ele at the beginning of the data-structure and returns the new length
	*/
	SorterJS.prototype.unshift = function (ele) {
		return this._data.unshift(ele);
	};
	/*
	* indexOf does the same as Array.prototype.pop. It returns the last element
	*/
	SorterJS.prototype.pop = function () {
		return this._data.pop();
	};
	/*
	* get returns a copied element that lies on the given @index.
	* @keys is a string that should be used when handling with object-elements.
	*/
	SorterJS.prototype.get = function (index, keys) {
		keys = getKeyArrayBySplitSign(keys, KEY_SPLIT_SIGN);
		return copyElement(this._data[index]);
	};
	/*
	* getAll returns a copy of all elements
	*/
	SorterJS.prototype.getAll = function () {
		return copyArray(this._data);
	};
	/*
	* forEach does the same as Array.prototype.forEach. It iterates over each element.
	* @func is a callback-function that should look like this: function(element, index, array){}
	*/
	SorterJS.prototype.forEach = function (func) {
		if (Array.prototype.forEach) {
			this._data.forEach(func);
		} else {
			for (var index = 0; index < this._data.length; index++) {
				func(this._data[index], index, copyArray(this._data));
			}
		}
	};
	/*
	* every does the same as Array.prototype.every. It returns true when all elements match the condition within @func.
	* @func is a callback-function that should look like this: function(element, index, array){}
	* @keys is a string that should be used when handling with object-elements.
	*/
	SorterJS.prototype.every = function (func, keys) {

		keys = getKeyArrayBySplitSign(keys, KEY_SPLIT_SIGN);

		for (var index = 0; index < this._data.length; index++) {
			var returnedVal = func(getValueByKey(this._data[index], keys), index, copyArray(this._data));
			if (!returnedVal) {
				return false;
			}
		}

		return true;
	};
	/*
	* some does the same as Array.prototype.some. It returns true when at least one element matches the condition within @func.
	* @func is a callback-function that should look like this: function(element, index, array){}
	* @keys is a string that should be used when handling with object-elements.
	*/
	SorterJS.prototype.some = function (func, keys) {

		keys = getKeyArrayBySplitSign(keys, KEY_SPLIT_SIGN);

		for (var index = 0; index < this._data.length; index++) {
			var returnedVal = func(getValueByKey(this._data[index], keys), index, copyArray(this._data));
			if (returnedVal) {
				return true;
			}
		}

		return false;
	};
	/*
	* filter does the same as Array.prototype.filter. It returns a new array with elements that matched the condition within @func
	* @func is a callback-function that should look like this: function(element, index, array){}
	* @keys is a string that should be used when handling with object-elements.
	*/
	SorterJS.prototype.filter = function (func, keys) {

		keys = getKeyArrayBySplitSign(keys, KEY_SPLIT_SIGN);
		var newArray = [];

		for (var index = 0; index < this._data.length; index++) {
			var returnedVal = func(getValueByKey(this._data[index], keys), index, copyArray(this._data));
			if (returnedVal) {
				var copyedElem = (this._data[index].constructor === Object) ? Object.create(this._data[index]) : this._data[index];
				newArray.push(copyedElem);
			}
		}

		return newArray;
	};
	/*
	* map does the same as Array.prototype.map. It returns a new array with customized elements that can be altered within @func
	* @func is a callback-function that should look like this: function(element, index, array){}
	* @keys is a string that should be used when handling with object-elements.
	*/
	SorterJS.prototype.map = function (func, keys) {

		keys = getKeyArrayBySplitSign(keys, KEY_SPLIT_SIGN);
		var newArray = [];

		for (var index = 0; index < this._data.length; index++) {
			var returnedVal = func(getValueByKey(this._data[index], keys), index, copyArray(this._data));
			newArray.push(returnedVal);
		}

		return newArray;
	};
	/*
	* reduce does the same as Array.prototype.reduce. It returns a number or string. It starts at the left-beginning. In most cases reduce is used for adding all number-elements together and return the sum.
	* @func is a callback-function that should look like this: function(previous_element, next_element, index, array){}
	* @keys is a string that should be used when handling with object-elements.
	*/
	SorterJS.prototype.reduce = function (func, keys, startValue) {

		keys = getKeyArrayBySplitSign(keys, KEY_SPLIT_SIGN);

		if (startValue) {
			this._data.unshift(startValue);
		}

		var prevValue = getValueByKey(this._data[0], keys);
		var result = prevValue;

		for (var index = 1; index < this._data.length; index++) {
			var nextValue = getValueByKey(this._data[index], keys);
			prevValue = func(prevValue, nextValue, index, copyArray(this._data));
			result = prevValue;
		}

		return result;
	};
	/*
	* reduceRight does the same as Array.prototype.reduceRight. It returns a number or string. It starts at the right-beginning. In most cases reduce is used for adding all number-elements together and return the sum.
	* @func is a callback-function that should look like this: function(previous_element, next_element, index, array){}
	* @keys is a string that should be used when handling with object-elements.
	*/
	SorterJS.prototype.reduceRight = function (func, keys, startValue) {

		keys = getKeyArrayBySplitSign(keys, KEY_SPLIT_SIGN);

		if (startValue) {
			this._data.push(startValue);
		}

		var prevValue = getValueByKey(this._data[this._data.length - 1], keys);
		var result = prevValue;

		for (var index = this._data.length - 2; index >= 0; index--) {
			var nextValue = getValueByKey(this._data[index], keys);
			prevValue = func(prevValue, nextValue, index, copyArray(this._data));
			result = prevValue;
		}

		return result;
	};

})();
