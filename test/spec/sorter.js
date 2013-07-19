describe("Sorter", function () {

	var s,
	m_data,
	m_data2,
	m_data3,
	s_data,
	s_data2,
	s_data3,
	result;

	beforeEach(function () {

		s = new Sorter();
		m_data = [3, 1, 0, 2];
		s_data = [0, 1, 2, 3];
		
		m_data2 = [3, 1, 0, 2];
		s_data2 = [0, 1, 2, 3];
		
		m_data3 = [{
				id : 1
			}, {
				id : 3
			}, {
				id : 2
			}, {
				id : 0
			}
		];

		s_data3 = [{
				id : 0
			}, {
				id : 1
			}, {
				id : 2
			}, {
				id : 3
			}
		];

	});

	afterEach(function () {
		console.log('result: ', result);
	});

	describe("sort Numbers and Strings", function () {
		
		it("should return first element", function () {
			s.addData(m_data);
			result = s.shift();
			expect(result).toEqual(m_data.shift());
		});
		
		it("should return last element", function () {
			s.addData(m_data);
			result = s.pop();
			expect(result).toEqual(m_data.pop());
		});
		
		it("should sort array with number-elements in ascending order", function () {
			s.addData(m_data, '', 'asc');
			result = s.getAll();
			expect(result.length).toEqual(s_data.length);
			for (var e = 0; e < s_data.length; e++) {
				expect(result[e]).toEqual(s_data[e]);
			}
		});
		
		it("should sort array with number-elements in descending order", function () {
			s.addData(m_data, '', 'desc');
			result = s.getAll();
			expect(result.length).toEqual(s_data.length);
			s.forEach(function (element, index, array) {
				expect(element).toEqual(s_data[s_data.length-1-index]);
			});
		});
		
		it("should every element should match condition",function(){
			s.addData(m_data);
			result = s.getAll();
			var checkValue = s.every(function(element,index,array){
				return element >= 0;
			});
			expect(checkValue).toBe(true);
		});
		
	});

	describe("sort Objects", function () {
		
		it("should loop over each element", function () {
			s.addData(m_data3, 'id', 'asc');
			result = '';
			s.forEach(function (element, index, array) {
				expect(element.id).toEqual(s_data3[index].id);
			});
		});
		
		it("should sort array with object-elements in ascending order", function () {
			s.addData(m_data3, 'id', 'asc');
			result = s.getAll();
			expect(result.length).toEqual(s_data2.length);
			for (var e = 0; e < s_data.length; e++) {
				expect(result[e]).toEqual(s_data3[e]);
			}
		});
		
		it("should sort array with object-elements in descending order", function () {
			s.addData(m_data3, 'id', 'desc');
			result = s.getAll();
			expect(result.length).toEqual(s_data2.length);
			s.forEach(function (element, index, array) {
				expect(element.id).toEqual(s_data3[s_data3.length-1-index].id);
			});
		});
		
		it("should return right first indexes", function () {
			s.addData(m_data3, 'id', 'asc');
			result = '';
			s.forEach(function (element, index, array) {
				var calIndex = s.indexOf(element.id,'id');
				expect( calIndex ).toEqual(index);
			});
		});
		
		it("should return right last index", function () {
			s.addData(m_data3, 'id', 'asc');
			s.push({ id: 1},true);
			s.sort('id','asc');
			result = s.getAll();
			var calLastIndex = s.lastIndexOf(1,'id');
			var calFirstIndex = s.indexOf(1,'id');
			expect( calLastIndex ).toEqual(calFirstIndex+1);
		});
		
		it("every element should match condition",function(){
			s.addData(m_data3);
			result = s.getAll();
			
			var checkValue = s.every(function(element,index,array){
				return element.id >= 0;
			});
			expect(checkValue).toBe(true);
			
			checkValue = s.every(function(element,index,array){
				return element < 10;
			},'id');
			expect(checkValue).toBe(true);
			
			checkValue = s.every(function(element,index,array){
				return element < 3;
			},'id');
			expect(checkValue).toBe(false);
		});
		
		it("some element should match condition",function(){
			s.addData(m_data3);
			result = s.getAll();
			
			var checkValue = s.some(function(element,index,array){
				return element.id === 1;
			});
			expect(checkValue).toBe(true);
			
			checkValue = s.some(function(element,index,array){
				return element < 1;
			},'id');
			expect(checkValue).toBe(true);
			
			checkValue = s.some(function(element,index,array){
				return element < 0;
			},'id');
			expect(checkValue).toBe(false);
		});
		
		it("should return array with matched elements",function(){
			s.addData(m_data3,'id','asc');
			result = '';
			
			var resultArray = s.filter(function(element,index,array){
				return element === 2;
			},'id');
			expect(resultArray.length).toBe(1);
			
			
			resultArray = s.filter(function(element,index,array){
				return element >= 2 && element <= 3;
			},'id');
			expect(resultArray.length).toBe(2);
			expect(resultArray[0].id).toBe(2);
			expect(resultArray[1].id).toBe(3);
		});
		
	});

});
