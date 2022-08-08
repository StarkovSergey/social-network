import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '7e8f6e63-03e5-4658-aa82-7f22050eb9f3',
  },
})

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
}

export const followAPI = {
  unfollow(userID: string) {
    return instance.delete(`follow/${userID}`)
      .then((response) => response.data)
  },
  follow(userID: string) {
    return instance.post(`follow/${userID}`)
      .then((response) => response.data)
  }
}

export const profileAPI = {
  getUser(userID: string) {
    return instance.get(`profile/${userID}`)
      .then((response) => response.data)
  }
}