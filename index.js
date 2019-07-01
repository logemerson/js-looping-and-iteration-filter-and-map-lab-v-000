function driversWithRevenueOver(driverObjs, revenue) {
  // driverObjs = [{name: "Sally", revenue: 400}, ...]
  const result = driverObjs.filter(function(driver) {
    return driver.revenue > revenue;
    debugger;
  })
  return result;
}