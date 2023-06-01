import userApi from '@/api/modules/user.api'
import { setAuthModal } from '@/redux/features/authModalSlice'
import { setUser } from '@/redux/features/userSlice'
import { LoadingButton } from '@mui/lab'
import { Alert, Box, Button, Stack, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

// eslint-disable-next-line react/prop-types
function SignInForm({ switchAuthState }) {
    const dispatch = useDispatch()
    const [isLoginRequest, setIsLoginRequest] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const signForm = useFormik({
        initialValues: {
            password: '',
            username: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().min(4, 'username minimum 4 character').required('username is required'),
            password: Yup.string().min(6, 'password minimum 6 character').required('password is required')
        }),
        onSubmit: async (values) => {
            setErrorMessage(undefined)
            setIsLoginRequest(true)
            const { response, error } = await userApi.signIn(values)
            setIsLoginRequest(false)

            if (response) {
                signForm.resetForm()
                dispatch(setAuthModal(false))
                dispatch(setUser(response))
                toast.success('Sign In successfully!')
            }
            if (error) {
                setErrorMessage(error.message)
                toast.error(error.message)
            }
        }
    })

    return (
        <Box component={'form'} onSubmit={signForm.handleSubmit}>
            <Stack spacing={3}>
                <TextField
                    type='text'
                    placeholder='username'
                    name='username'
                    fullWidth
                    value={signForm.values.username}
                    onChange={signForm.handleChange}
                    color='success'
                    error={signForm.touched.username && signForm.errors.username !== undefined}
                    helperText={signForm.touched.username && signForm.errors.username}
                />
                <TextField
                    type='password'
                    placeholder='password'
                    name='password'
                    fullWidth
                    value={signForm.values.password}
                    onChange={signForm.handleChange}
                    color='success'
                    error={signForm.touched.password && signForm.errors.password !== undefined}
                    helperText={signForm.touched.password && signForm.errors.password}
                />
                <Box>
                    <LoadingButton
                        size='large'
                        type='submit'
                        fullWidth
                        onClick={signForm.onSubmit}
                        loading={isLoginRequest}
                        variant='contained'
                        sx={{ marginBottom: 1 }}
                    >
                        Sign In
                    </LoadingButton>
                    <Button size='large' fullWidth onClick={switchAuthState}>
                        Sign Up
                    </Button>
                </Box>
                {errorMessage && (
                    <Box sx={{ margin: 2 }}>
                        <Alert severity='error' variant='outlined'>
                            {errorMessage}
                        </Alert>
                    </Box>
                )}
            </Stack>
        </Box>
    )
}

export default SignInForm
