import { useState } from 'react'

import { Button, Autocomplete, TextField } from '@mui/material'

const App = () => {
    const [count, setCount] = useState(0)

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 }
    ]

    type FilmOptionType = {
        title: string
        year: number
    }

    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option: FilmOptionType) => option.title
    }

    return (
        <>
            trung
            <div>
                <Button variant='contained' onClick={() => setCount((count) => count + 1)}>
                    count is {count}{' '}
                </Button>

                <Autocomplete
                    {...defaultProps}
                    id='disable-close-on-select'
                    disableCloseOnSelect
                    renderInput={(params) => <TextField {...params} label='City' variant='standard' />}
                />
            </div>
        </>
    )
}

export default App
