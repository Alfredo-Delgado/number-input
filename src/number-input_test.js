import QUnit from 'steal-qunit';
import plugin from './number-input';

QUnit.module('number-input');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the number-input plugin');
});
