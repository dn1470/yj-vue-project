import * as firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyB9TY0c-r7tH4eBDLtpnPbXyKf1O945eYc',
  authDomain: 'yj-smoothies.firebaseapp.com',
  databaseURL: 'https://yj-smoothies.firebaseio.com',
  projectId: 'yj-smoothies',
  storageBucket: 'yj-smoothies.appspot.com',
  messagingSenderId: '785792881391',
  appId: '1:785792881391:web:9b607cb4917d11fa14811a',
  measurementId: 'G-G29Z9JYTHW'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()
