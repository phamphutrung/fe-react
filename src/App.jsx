import { ThemeProvider } from '@emotion/react'
import { useSelector } from 'react-redux'
import themeConfigs from './configs/theme.config'
import { ToastContainer } from 'react-toastify'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import routes from './routes/router'
import PageWrapper from './components/common/PageWrapper'

const App = () => {
    const { themeMode } = useSelector((state) => state.themeMode)

    return (
        <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                pauseOnHover
                theme={themeMode}
            />
            <CssBaseline />

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        {routes.map((route, index) =>
                            route.index ? (
                                <Route
                                    key={index}
                                    index
                                    element={
                                        route.state ? (
                                            <PageWrapper state={route.state}>{route.element}</PageWrapper>
                                        ) : (
                                            route.element
                                        )
                                    }
                                />
                            ) : (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        route.state ? (
                                            <PageWrapper state={route.state}>{route.element}</PageWrapper>
                                        ) : (
                                            route.element
                                        )
                                    }
                                />
                            )
                        )}
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
