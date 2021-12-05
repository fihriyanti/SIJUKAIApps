import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    // backgroundColor: '#0E637F',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.ikon,
    width: Metrics.images.ikon,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  footer: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    position: 'absolute',
    bottom: 5
  },
  linearGradient: {
    flex: 1,
  },
})