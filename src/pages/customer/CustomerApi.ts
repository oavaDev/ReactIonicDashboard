import Customer from './Customer';

export function searchCustomer() {
  if (!localStorage['customers']) {
    localStorage['customers'] = '[]';
  }
  let customers = localStorage['customers'];
  customers = JSON.parse(customers);
  return customers;
}

export const searchCustomerById = (id: string) => {
  let customers = searchCustomer();
  let result = customers.find((customer: any) => customer.id === id);
  return result;
};

export const removeCustomer = (id: string) => {
  let customers = searchCustomer();
  let index = customers.findIndex((customer: any) => customer.id === id);
  customers.splice(index, 1);
  localStorage['customers'] = JSON.stringify(customers);
};

export function saveCustomer(customer: Customer) {
  let customers = searchCustomer();
  if (customer.id) {
    let index = customers.findIndex((c: any) => c.id === customer.id);
    customers[index] = customer;
  } else {
    customer.id = String(Math.round(Math.random() * 100000));
    customers.push(customer);
  }
  localStorage['customers'] = JSON.stringify(customers);
}
