import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { candidateData } from "../../types/candidate.d"
// import axios from "axios"


type InitialState = {
    loading: boolean
    users: candidateData[]
    error: string
}


const initialState: InitialState = {
    loading: false,
    users: [],
    error: ''
}

// Generate pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    // return axios.get('http://localhost:4000/api/v1/candidates')
    //     .then(response => response.data)
    let res : any = await fetch("http://localhost:4000/api/v1/login/admin",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:{}
    });     
    res = await res.json();
    return res
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(
            fetchUsers.fulfilled,
            (state, action: PayloadAction<candidateData[]>) => {
                state.loading = false
                state.users = action.payload
                state.error = ''
            }
        )
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message || 'something went wrong'
        })

    }
})

export default userSlice.reducer
