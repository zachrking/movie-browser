// Documentation: https://developers.themoviedb.org/3/movies/get-top-rated-movies

import { MovieType } from '../medias'

export interface UpcomingResponse {
  page: number
  results: MovieType[]
  total_results: number
  total_pages: number
}

export interface UpcomingParams {
  params: {
    api_key: string
    language?: string
    page?: number
    region?: string
  }
}
