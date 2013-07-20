SorterJS
==========

<b>SorterJS</b> is a js-class that can be used for sorting numbers, string and objects within an SorterJS-structure.
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

	<p>@param <i>keys</i> is a string that can be given over when handling with object-elements like the 3.Example. Do not forget the dot when there a sub-objects.</p>

	<p><b>indexOf( in value:void, in keys:String ) : Number</b></p>
	
	<p>Example</p>
	<p>var data = [{id:3},{id:0},{id:2},{id:1}];</p>

	<p>var s = new SorterJS(data);</p>
	<p>s.indexOf(0,'id'); // ->  1 </span></p>
	<p>s.indexOf(1,'id'); // ->  3 </p>
	<p>s.indexOf(-3,'id'); // ->  -1 </p>
	
</blockquote>

<p><b>SorterJS.prototype.lastIndexOf</b></p>
<p><b>SorterJS.prototype.shift</b></p>
<p><b>SorterJS.prototype.unshift</b></p>
<p><b>SorterJS.prototype.push</b></p>
<p><b>SorterJS.prototype.pop</b></p>
<p><b>SorterJS.prototype.forEach</b></p>
<p><b>SorterJS.prototype.every</b></p>
<p><b>SorterJS.prototype.some</b></p>
<p><b>SorterJS.prototype.filter</b></p>
<p><b>SorterJS.prototype.map</b></p>
<p><b>SorterJS.prototype.reduce</b></p>
<p><b>SorterJS.prototype.reduceRight</b></p>

<blockquote>

	<p>@param <i>objs</i> is an SorterJS that contains JSON-objects</p>

	<p>@param <i>template</i> it an string that contains the notations, you can see at the Notation-Examples above.</p>

	<p><b>transformTemplate( in objs:SorterJS, in template:String ) : SorterJS</b></p>

</blockquote>

