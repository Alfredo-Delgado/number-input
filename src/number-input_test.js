import QUnit from 'steal-qunit';
import { ViewModel } from 'number-input';

QUnit.module('components/number-input');

QUnit.test('Initializes the ViewModel',()=> {
  var vm = new ViewModel();
  
  QUnit.equal(vm.attr('value'), 0,
    'Default value is 0');
  QUnit.equal(vm.attr('max'), Infinity,
    'Max value is infinity');
  QUnit.equal(vm.attr('min'), 0,
    'Max value is number max value');
});

QUnit.test('.increment',() => {
  var vm = new ViewModel();

  vm.increment();
  QUnit.equal(vm.attr('value'), 1, 'Value incremented');
});

QUnit.test('.decrement',()=> {
  var vm = new ViewModel();

  vm.increment();
  vm.increment();
  vm.decrement();
  QUnit.equal(vm.attr('value'), 1, 'Value updated');
});
