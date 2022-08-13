import { followSuccess, setUsers, toggleIsFollowingInProgress, UsersPageType, usersReducer, UserType } from './users-reducer'

let startState: UsersPageType

beforeEach(() => {
  startState = {
    users: [
      {
        id: '1',
        photos: {
          small: 'small-photo-url',
          large: 'large-photo-url',
        },
        followed: false,
        name: 'Brendan M',
        status: 'I am a boss',
        location: { city: 'SPb', country: 'Russia' },
      },
      {
        id: '2',
        photos: {
          small: 'small-photo-url',
          large: 'large-photo-url',
        },
        followed: true,
        name: 'Milada M',
        status: 'I am a boss too',
        location: { city: 'Hobbiton', country: 'Shire' },
      },
      {
        id: '3',
        photos: {
          small: 'small-photo-url',
          large: 'large-photo-url',
        },
        followed: false,
        name: 'Vera M',
        status: 'I am a boss too',
        location: { city: 'Minas-Tirith', country: 'Gondor' },
      },
    ],
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
  }
})

test('following should work properly', () => {
  const endState = usersReducer(startState, followSuccess('1'))
  expect(endState.users[0].followed).toBeTruthy()
})

test('unfollowing should work properly', () => {
  const endState = usersReducer(startState, followSuccess('2'))
  expect(endState.users[0].followed).toBeFalsy()
})

test('users should be set correctly', () => {
  const newUsers: UserType[] = [{
    id: '4',
    photos: {
      small: 'small-photo-url',
      large: 'large-photo-url',
    },
    followed: false,
    name: 'Andrew',
    status: 'I am a dancer!',
    location: { city: 'SPb', country: 'Russia' },
  }]

  const endState = usersReducer(startState, setUsers(newUsers))
  expect(endState.users.at(-1)?.id).toBe('4')
})
