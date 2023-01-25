import React from 'react'

import { ScrollView } from 'react-native'
import { CardCarousel, Upcoming } from '~/components'

import styles from './MoviesScreen.styles'

const mediaType = 'movie'

const MoviesScreen = () => (
  <ScrollView style={styles.container}>
    <CardCarousel type='trending' mediaType={mediaType} />
    <CardCarousel type='popular' mediaType={mediaType} />
    <Upcoming />
    <CardCarousel type='top_rated' mediaType={mediaType} />
  </ScrollView>
)

export default MoviesScreen
