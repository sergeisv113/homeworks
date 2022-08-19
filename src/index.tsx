import React from 'react'
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './p1-main/m1-ui/u1-app/App'
import * as serviceWorker from './serviceWorker'

/*ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
)*/
const container = document.getElementById("root") as HTMLElement
const rootContainer = ReactDOM.createRoot(container)
rootContainer.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
