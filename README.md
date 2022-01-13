# Getting Started with Create React App

npm i react-router-dom

npm install -g sass
https://sass-lang.com/install


https://cdnjs.com/libraries/font-awesome
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css



# Redux
### Redux + Plain JS template
npx create-react-app my-app --template redux

### If you use npm:
npm install react-redux


# store
https://github.com/zalmoxisus/redux-devtools-extension#usage

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 
useDispatch
useSelect
useForm

# FIREBASE
https://firebase.google.com/


# Middlewares
se encarga se hacer una tarea síncrona esperar que se resuelva y llamar dispatch para retornar nuevo state


# THUNK
https://www.npmjs.com/package/redux-thunk

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk))


# ALERTAS ERRORES
https://sweetalert2.github.io/#download

npm install sweetalert2
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>


## https://momentjs.com/
npm install moment --save

Subida de imágenes en
### claudinary
https://cloudinary.com/ 
### postman