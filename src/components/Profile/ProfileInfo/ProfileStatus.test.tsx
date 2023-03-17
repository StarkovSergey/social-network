import { ProfileStatus } from './ProfileStatus'
import { create } from 'react-test-renderer'

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status="Mordor" updateStatus={() => {}} />)
    const instance = component.getInstance()
    // @ts-ignore
    expect(instance?.state?.statusText).toBe('Mordor')
  })

  test('after creation span with status should be displayed', async () => {
    const component = create(<ProfileStatus status="Mordor" updateStatus={() => {}} />)
    const root = component.root
    const span = await root.findByType('span')
    expect(span).not.toBeNull()
  })
})

test('after creation input with status should not be displayed', () => {
  const component = create(<ProfileStatus status="Mordor" updateStatus={() => {}} />)
  const root = component.root
  expect(() => {
    // eslint-disable-next-line testing-library/await-async-query
    const input = root.findByType('input')
  }).toThrow()
})

test('after creation span with status should contains correct status', async () => {
  const component = create(<ProfileStatus status="Mordor" updateStatus={() => {}} />)
  const root = component.root
  const span = await root.findByType('span')
  expect(span.children[0]).toBe('Mordor')
})

test('input should be displayed in edit mode instead of span', async () => {
  const component = create(<ProfileStatus status="Mordor" updateStatus={() => {}} />)
  const root = component.root
  const span = await root.findByType('span')
  span.props.onClick()
  const input = await root.findByType('input')
  expect(input.props.value).toBe('Mordor')
})

test('callback should be called', async () => {
  const mockCallback = jest.fn()
  const component = create(<ProfileStatus status="Mordor" updateStatus={mockCallback} />)
  const instance = component.getInstance()
  //@ts-ignore
  instance.deactivateEditMode()

  expect(mockCallback.mock.calls.length).toBe(1)
})
