function driversWithRevenueOver(driverObjs, revenue) {
  // driverObjs = [{name: "Sally", revenue: 400}, ...]
  const result = driverObjs.filter(function(driver) {
    return driver.revenue > revenue;
  })
  return result;
}

function driverNamesWithRevenueOver(driverObjs, revenue) {
  const resultArr = [];
  // driverObjs = [{name: "Sally", revenue: 400}, ...]
  const resultObjs = driverObjs.filter(function(driver) {
    return driver.revenue > revenue;
  })
  for (const driver of resultObjs) {
    resultArr.push(driver.name);
  }
  return resultArr;
}

function exactMatch(driversArr, attributeObj) {
  const attribute = Object.keys(attributeObj)[0];

  return driversArr.filter(function(driver) {
    return driver.attribute === attributeObj;
  })
}