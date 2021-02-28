import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface Window{
      ApiUrl:'http://localhost:3000/api'
    }
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
