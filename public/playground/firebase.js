import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDo2Fxl1zfaCO1wI1y1ykfF2Ln46VgSQpY",
    authDomain: "todo-app-17991.firebaseapp.com",
    databaseURL: "https://todo-app-17991.firebaseio.com",
    projectId: "todo-app-17991",
    storageBucket: "todo-app-17991.appspot.com",
    messagingSenderId: "899683549315"
  }

  firebase.initializeApp(config)

  let firebaseRef = firebase.database().ref()

    firebaseRef.set({
        appName: 'Todo App',
        user: {
            name: 'Max',
            age: 22
        } 
    }).then(() => {
        console.log('success')
    }, (e) => {
        console.log(e)
    })


  firebaseRef.child('user').set({
      name: 'Mike'
  })

  firebaseRef.set({
      appName: 'New name',
      version: '1.0'
  })