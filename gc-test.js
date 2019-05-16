function getAttributes(number){
  var attributes = [];
  if(number % 2 == 0){
    attributes.push('even');
  }else{
    attributes.push('odd');
  }
  if(number % 3 == 0){
    attributes.push('multiple-of-three');
  }
  return attributes;
}

function buildData(){
  var data = [];
  for(var i=1;i<=100;i++){
    data.push([i,getAttributes(i)]);
  }
  return data;
}

function printData(data){
  console.log('number,attributes')
  for(var i=0;i<data.length;i++){
    console.log(data[i][0] + ',"' + data[i][1].join(",") + '"')
  }
}

var data = buildData();
printData(data);
