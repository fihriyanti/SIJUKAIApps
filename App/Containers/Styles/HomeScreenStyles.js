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
    // marginTop: Metrics.doubleSection,
    height: 80,
    width: Metrics.images.ikon,
    resizeMode: 'contain'
  },
  image:{
    flex: 1,
    justifyContent: "center"
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
  bgInput: { 
    backgroundColor: 'white', 
    opacity: 0.7, 
    borderRadius: 30, 
    paddingHorizontal: 20,
    marginBottom: 20
  },
  btnLogin: {
    backgroundColor: '#1D3B54',
    borderRadius: 25,
    marginBottom: 20
  },
  txtLogin: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  btnSign: {
    backgroundColor: 'white', 
    opacity: 0.8, 
    borderRadius: 30, 
    paddingHorizontal: 20,
    marginBottom: 20
  },
  txtSign: {
    color: '#1D3B54',
    fontSize: 25,
    fontWeight: 'bold',
  },
})