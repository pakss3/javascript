function fail(thing){
	throw new Error(thing);
}

function warn(thing){
	console.log(["WARNING:", thing].join(' '));
}

function note(thing){
	console.log(["NOTE", thing].join(' '));
}


function nativeNth(a,index){
	return a[index];
}

function isIndexed(data){
	return _.isArray(data) || _.isString(data);
}

function nth(a, index){
	if (!_.isNumber(index)) fail("Expected a number as the index");
	if (!isIndexed(a)) fail("Not supported on non-indexed type");
	if ((index < 0) || (index > a.length - 1))
		fail("Index value is out of bounds");

		return a[index];
}

function second(a){
	return nth(a,1);
}

function lameCSV(str){
	return _.reduce(str.split("\n"),function(table, row){
		table.push(_.map(row.split(","), function(c){ return c.trim(); }));
		return table;
	},[]);
}

function doWhen(cond, action){
	if(truthy(cond))
		return action();
	else
		return undefined;
}

function truthy(x){
	return (x !== false) && existy(x); ;
}

function existy(x){
	return x != null;
}