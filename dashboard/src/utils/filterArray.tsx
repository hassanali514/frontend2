

export const filterArr = (arr: any, val: String) => {
  console.log(val, "abc");
  const arr2: any = [];
  arr.forEach((value: any, ind: number, arr: any) => {
    arr2.push({
      text: value[val],
      value: value[val]
    })
  })
  var map = new Map();
  for (let value of arr2) {
    map.set(value["text"], value);
  }
  var iteratorValues = map.values();
  var uniqueValues = [...iteratorValues];
  // console.log(uniqueValues,"unique")
  return uniqueValues;
}