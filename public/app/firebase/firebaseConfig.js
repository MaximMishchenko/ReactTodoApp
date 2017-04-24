import firebase from 'firebase'

try {
    const config = {
        apiKey: "AIzaSyDo2Fxl1zfaCO1wI1y1ykfF2Ln46VgSQpY",
        authDomain: "todo-app-17991.firebaseapp.com",
        databaseURL: "https://todo-app-17991.firebaseio.com",
        projectId: "todo-app-17991",
        storageBucket: "todo-app-17991.appspot.com",
        messagingSenderId: "899683549315"
    }
    firebase.initializeApp(config)
} catch (error) {
    console.log(error)
}

  export let firebaseRef = firebase.database().ref()

  export default firebase