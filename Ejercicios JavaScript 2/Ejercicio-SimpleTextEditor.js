function processData(input) {
    //Enter your code here
    let ops = input.split('\n')
    let n = ops.shift();
    let rs = "";
    let rsPrevious = [];
    
    for(let i = 0; i < n; i++) {     
      let [action, value] = ops[i].split(' ');
      
      if(action == 1){
        rsPrevious.push(rs);
        rs = rs.concat(value);  
      } else if(action == 2) {
        rsPrevious.push(rs);
        rs = rs.slice(0, rs.length - value);
      } else if(action == 3) {
        console.log(rs[value - 1]);
      } else if(action == 4) {
        rs = rsPrevious.pop();
      }
    }
      
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});