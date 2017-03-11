import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './number-input.less!';
import template from './number-input.stache!';

export const ViewModel = Map.extend({
  define: {
    value: {
      value: 0,
      set(value) {
        if(value > this.attr('max')) {
          return this.attr('max');
        }

        if(value < this.attr('min')) {
          return this.attr('min');
        }

        return value;
      }
    },
    max: {
      value: Infinity
    },
    min: {
      value: 0
    }
  },

  increment() {
    this.attr('value', this.attr('value') + 1);
  },

  decrement() {
    this.attr('value', this.attr('value') - 1);
  }
});

export default Component.extend({
  tag: 'number-input',
// <number-input max="50" {min}="apiMin" />
  viewModel: ViewModel,
  template
});
