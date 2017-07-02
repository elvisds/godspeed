import _ from 'underscore';

var DRIVER_NAMES = ['Abhiram', 'Arjun', 'Arnav', 'Aryan', 'Atharv', 'Ayush', 'Krishna', 'Pranav', 'Ryan', 'Sai', 'Samarth', 'Siddharth'];

export default class Data {
  getDrivers(num_drivers) {
    return _.sample(DRIVER_NAMES, num_drivers);
  }
}