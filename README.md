SorterJS
==========

<b>SorterJS</b> is a js-class that can be used for sorting numbers, string and objects within an Array-structure.
The js-class also supports all well know SorterJS-functions like:

<p><b>SorterJS.prototype.indexOf</b></p>
<p><b>SorterJS.prototype.push</b></p>
<p><b>SorterJS.prototype.forEach</b></p>

<p>and a great deal of more functions. Please see below</p>

<h3>Examples:</h3>

<h4>1.Sorting Number-Elements in ascending and descending order</h4>
<blockquote>
<p>var data = [3,0,2,1];</p>

<p>var s = new SorterJS(data);</p>

<p>s.sort('asc');</p>

<p>s.getAll(); // -> [0,1,2,3]</p>


<p>s.sort('desc');</p>

<p>s.getAll(); // -> [3,2,1,0]</p>

</blockquote>

<p>------------------------------------------------------------------------------</p>

<h4>2.Sorting Object-Elements in ascending and descending order</h4>
<blockquote>
<p>var data = [{id:3},{id:0},{id:2},{id:1}];</p>

<p>var s = new SorterJS(data);</p>

<p>s.sort('asc','id');</p>

<p>s.getAll(); // -> [{id:0},{id:1},{id:2},{id:3}]</p>

<p>s.sort('desc','id');</p>

<p>s.getAll(); // -> [{id:3},{id:2},{id:1},{id:0}]</p>

</blockquote>

<p>------------------------------------------------------------------------------</p>

<h4>3.Sorting Sub-Object-Elements in ascending and descending order</h4>
<blockquote>
<p>var data = [{name:{ first: 'Max' }},{name:{ first: 'Jack' }},{name:{ first: 'John' }},{name:{ first: 'Albert' }}];</p>

<p>var s = new SorterJS(data);</p>

<p>s.sort('asc','name.first');</p>

<p>s.getAll(); <i style="color:#DDDDDD">// -> [{name:{ first: 'Albert' }},{name:{ first: 'Jack' }},{name:{ first: 'John' }},{name:{ first: 'Max' }}];</i></p>

<p>s.sort('desc','name.first');</p>

<p>s.getAll(); // -> [{name:{ first: 'Max' }},{name:{ first: 'John' }},{name:{ first: 'Jack' }},{name:{ first: 'Albert' }}];</p>
</blockquote>

<h3>Function-Documentation</h3>

The class offers following methods:

<b></b> takes following params:


<p><b>SorterJS.prototype.indexOf</b></p>
<blockquote>

	<p>@param <i>value</i> can be everything. But when the class contains Number-Elements, <i>value</i> should be a Number as well.</p>
	
	<p>@param <i>offset</i> is a Number that can be set when the search should start not at index 0.</p>
	
	<p>@param <i>keys</i> is a string that can be given over when handling with object-elements like the 3.Example. Do not forget the dot when there a sub-objects.</p>

	<p><b>indexOf( in value:void, in offset:Number, in keys:String ) : Number</b></p>
	
	<p>Example</p>
	<p>var data = [{id:3},{id:0},{id:2},{id:1}];</p>

	<p>var s = new SorterJS(data);</p>
	<p>s.indexOf(0,0,'id'); // ->  1 </span></p>
	<p>s.indexOf(1,0,'id'); // ->  3 </p>
	<p>s.indexOf(-3,0,'id'); // ->  -1 </p>
	<p>s.indexOf(3,1,'id'); // ->  -1 </p>
	
</blockquote>


<p><b>SorterJS.prototype.lastIndexOf</b></p>
<blockquote>

	<p>@param <i>value</i> can be everything. But when the class contains Number-Elements, <i>value</i> should be a Number as well.</p>

	<p>@param <i>keys</i> is a string that can be given over when handling with object-elements like the 3.Example. Do not forget the dot when there a sub-objects.</p>

	<p><b>lastIndexOf( in value:void, in offset:Number, in keys:String ) : Number</b></p>
	
	<p>Example</p>
	<p>var data = [{id:3},{id:0},{id:2},{id:3}];</p>

	<p>var s = new SorterJS(data);</p>
	<p>s.lastIndexOf(3,2,'id'); // ->  1 </span></p>
	<p>s.lastIndexOf(1,null,'id'); // ->  3 </p>
	<p>s.lastIndexOf(-3,null,'id'); // ->  -1 </p>
	
</blockquote>


<p><b>SorterJS.prototype.unshift</b></p>
<blockquote>

<p><b>unshift</b> is used to insert an element at the beginning. <b>unshift</b> returns the new size of the data-structure.</p>

<p>unshift( in element:void ) : Number</p>
</blockquote>


<p><b>SorterJS.prototype.push</b></p>
<blockquote>

<p><b>push</b> is used to insert an element at the end. <b>push</b> returns the new size of the data-structure.</p>

<p>push( in element:void ) : Number</p>
</blockquote>


<p><b>SorterJS.prototype.pop</b></p>
<blockquote>

<p><b>pop</b> is used to get last element.</p>

<p>pop() : void</p>
</blockquote>


<p><b>SorterJS.prototype.shift</b></p>
<blockquote>

<p><b>shift</b> is used to return first element of the data-structure. <b>shift</b> can return every type of element that was inserted into the data-structure.</p>

<p>shift() : void</p>
</blockquote>


<p><b>SorterJS.prototype.forEach</b></p>
<blockquote>

<p><b>forEach</b> is used to iterate over every element. </p>
<p>@param <i>func</i> is a function-object that is called for every element. <i>func</i> should look like this: <i>function(element, index, array){}</i></p>

<p>forEach( func:Function )</p>
</blockquote>


<p><b>SorterJS.prototype.every</b></p>
<p><b>SorterJS.prototype.some</b></p>
<p><b>SorterJS.prototype.filter</b></p>
<p><b>SorterJS.prototype.map</b></p>
<p><b>SorterJS.prototype.reduce</b></p>
<p><b>SorterJS.prototype.reduceRight</b></p>

