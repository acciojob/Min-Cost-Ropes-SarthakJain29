function mincost(arr){ 
	arr.sort();
	let cost = 0;
	let i = 0;
	while(arr.length > 1){
		let sum = arr[i] + arr[i+1];
		cost += sum;
		arr.shift();
		arr.shift();
		arr.unshift(sum);
		arr.sort();
	}
	return cost;
  
}

module.exports=mincost;
