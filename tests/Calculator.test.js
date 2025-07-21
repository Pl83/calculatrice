import { mount } from '@vue/test-utils'
import Calculator from '../src/components/AddNumber.vue'

describe('Calculator.vue', () => {
  it('adds two numbers correctly', async () => {
    const wrapper = mount(Calculator)

    // Find inputs and set their values
    const inputs = wrapper.findAll('input')
    await inputs[0].setValue('5')
    await inputs[1].setValue('3')

    // Click the button
    await wrapper.find('button').trigger('click')

    // Check the result
    expect(wrapper.find('h3').text()).toBe('Result: 8')
  })

  it('shows "Invalid input" when input is not a number', async () => {
    const wrapper = mount(Calculator)

    const inputs = wrapper.findAll('input')
    await inputs[0].setValue('foo')
    await inputs[1].setValue('3')

    await wrapper.find('button').trigger('click')

    expect(wrapper.find('h3').text()).toBe('Result: Invalid input')
  })
})
