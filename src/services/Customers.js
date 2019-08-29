export default function Customers($http) {
  const _getCustomers = function () {
    return $http({
        method: 'GET',
        responseType: 'json',
        url: 'http://localhost:3000/customers',
    });
};

  return {
    getCustomers: _getCustomers
  }
}
