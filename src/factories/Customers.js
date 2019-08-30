export default function Customers($http) {
  const _getCustomers = function() {
    return $http({
      method: 'GET',
      responseType: 'json',
      url: 'http://localhost:3000/customers',
    });
  };

  const _getDataCustomer = function(id) {
    return $http({
      method: 'GET',
      responseType: 'json',
      url: `http://localhost:3000/customers/${id}`,
    });
  };

  const _updateCustomer = function(id, data) {
    return $http({
      method: 'PUT',
      responseType: 'json',
      url: `http://localhost:3000/customers/${id}`,
      data: data,
    });
  };

  const _deleteCustomer = function(id) {
    return $http({
      method: 'DELETE',
      responseType: 'json',
      url: `http://localhost:3000/customers/${id}`,
    });
  };

  const _registerCustomer = function(data) {
    return $http({
      method: 'POST',
      responseType: 'json',
      url: `http://localhost:3000/customers/`,
      data: data,
    });
  };

  return {
    getCustomers: _getCustomers,
    getDataCustomer: _getDataCustomer,
    updateCustomer: _updateCustomer,
    deleteCustomer: _deleteCustomer,
    registerCustomer: _registerCustomer,
  };
}
