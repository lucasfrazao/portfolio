import api from './api'
import { IResponseRepository } from '../utils/props'

interface GET_DTO {
  user: string
}

export const userService = {
  async get({ user }: GET_DTO) {
    return api.get<IResponseRepository[]>(
      `users/${user}/repos?page=1&per_page=30&sort=updated`
    )
  }
}
