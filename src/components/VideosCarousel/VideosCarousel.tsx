import React from 'react'
import { FlatList, Pressable, View } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import Modal from 'react-native-modal'
import { Section } from '~/components'
import { MovieVideo } from '~/models'
import styles from './VideosCarousel.styles'

const VideosCarousel = ({ videos }: { videos: MovieVideo[] }) => {
  const [showModal, setShowModal] = React.useState(false)
  const [selectedVideo, setSelectedVideo] = React.useState<MovieVideo>()

  const videosSortedByTrailerFirst = React.useMemo(
    () =>
      videos.sort((a, b) => {
        if (a.type === 'Trailer') return -1
        if (b.type === 'Trailer') return 1
        return 0
      }),
    [videos]
  )

  const closeModal = () => setShowModal(false)

  const renderItem = React.useCallback(
    ({ item }: { item: MovieVideo }) => (
      <Pressable
        onPress={() => {
          setShowModal(true)
          setSelectedVideo(item)
        }}
      >
        <View style={styles.videoContainer} pointerEvents='none'>
          <YoutubePlayer
            key={item.key}
            height={styles.youtubePlayer.height}
            play={false}
            videoId={item.key}
          />
        </View>
      </Pressable>
    ),
    []
  )

  return (
    <>
      <Section title='Videos' removeMargin>
        <FlatList
          data={videosSortedByTrailerFirst}
          renderItem={renderItem}
          maxToRenderPerBatch={2}
          initialNumToRender={1}
          horizontal
        />
      </Section>
      <Modal
        hasBackdrop={true}
        isVisible={showModal}
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
        style={styles.modal}
      >
        <View style={styles.modalVideoContainer}>
          <YoutubePlayer
            height={styles.modalYoutubePlayer.height}
            play={true}
            videoId={selectedVideo?.key}
          />
        </View>
      </Modal>
    </>
  )
}

export default VideosCarousel
