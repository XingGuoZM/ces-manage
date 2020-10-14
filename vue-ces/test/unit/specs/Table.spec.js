import Vue from 'vue'
import Table from '@/components/page/Table/index.vue'

describe('Table.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Table)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.hello h1').textContent)
    //   .toEqual('Welcome to Your Vue.js App')
  })
})
