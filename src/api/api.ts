import axios from 'axios'
import { UserType } from '../redux/users-reducer'
import { ProfileType } from '../redux/profile-reducer'
import { AuthStateType } from '../redux/auth-reducer'
import { FormDataType } from '../components/Login/Login'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '7e8f6e63-03e5-4658-aa82-7f22050eb9f3',
  },
})

type ResponseType<T = {}> = {
  resultCode: number
  messages: string[]
  data: T
}

type GetUsersResponse = {
  error: null | string
  totalCount: number
  items: UserType[]
}

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance.get<GetUsersResponse>(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data)
  },
  unfollow(userID: string) {
    return instance.delete<ResponseType>(`follow/${userID}`).then((response) => response.data)
  },
  follow(userID: string) {
    return instance.post<ResponseType>(`follow/${userID}`).then((response) => response.data)
  },
}

export const profileAPI = {
  getProfile(userID: string) {
    return instance.get<ProfileType>(`profile/${userID}`).then((response) => response.data)
  },
  getStatus(userID: string) {
    return instance.get<string>(`profile/status/${userID}`)
  },
  updateStatus(status: string) {
    return instance.put<ResponseType>(`profile/status`, { status })
  },
}

export const authAPI = {
  me() {
    return instance.get<ResponseType<AuthStateType>>(`auth/me`).then((response) => response.data)
  },
  login({email, password, rememberMe}: FormDataType) {
    return instance.post<ResponseType>(`auth/login`, {email, password, rememberMe})
      .then((response) => {
        console.log(response)
      })
  }
}
