import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/redux/store'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import GlobalStyle from '@/components/GlobalStyles'
import App from '@/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle>
                <App />
            </GlobalStyle>
        </Provider>
    </React.StrictMode>
)
