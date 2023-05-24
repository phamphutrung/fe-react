/* eslint-disable import/no-unresolved */
import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from '@/components/GlobalStyles'
import App from '@/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GlobalStyle>
            <App />
        </GlobalStyle>
    </React.StrictMode>
)
