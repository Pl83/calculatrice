import { mount } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld.vue'

test('renders props.msg when passed', () => {
  const wrapper = mount(HelloWorld, {
    props: { msg: 'Hello Jest' },
  })
  expect(wrapper.text()).toContain('Hello Jest')
})
