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
        app: {
            name: 'Todo App',
            version: '0.1'
        },
        isRunning: true,
        user: {
            name: 'Max',
            age: 22
        }
    }).then(() => {
        console.log('success')
    }, (e) => {
        console.log(e)
    })

    let todosRef = firebaseRef.child('todos')

    todosRef.on('child_added', (snapshot) => {
        console.log('added',snapshot.key, snapshot.val())
    })

    todosRef.on('child_changed', (snapshot) => {
        console.log('changed', snapshot.key, snapshot.val())
    })

    todosRef.on('child_removed', (snapshot) => {
        console.log('deleted', snapshot.key, snapshot.val())
    })

    todosRef.push({
        text: 'Walk the dog!!'
    })

    todosRef.push({
        text: 'Watch film'
    })



    