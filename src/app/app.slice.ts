import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createAppAsyncThunk} from "../utils/createAppAsyncThunk.ts";
import {DataType, sendApi, StatusCode} from "../api/mainApi.ts";
import {errorHandler} from "../utils/errorHandler.ts";

const sendEmail = createAppAsyncThunk<any, DataType>
('app/sendEmail', async (arg, {dispatch, rejectWithValue}) => {
    try {
        dispatch(appActions.setLoading(true))
        const res = await sendApi.sendMail(arg)
        if(res.status === StatusCode.Success) {
            return {message: res.data.message}
        } else if (res.status === StatusCode.ClientError) {
            return {message: res.data.error}
        }else if (res.status === StatusCode.ServerError) {
            return {message: res.data.error}
        }

    } catch (e) {
        const err = errorHandler(e)
        return rejectWithValue(err)
    } finally {
        dispatch(appActions.setLoading(false))
    }
})

type initialStateType = {
    messages:  string,
    error: string | null,
    loading: boolean,
}
const initialState = {
    messages: '',
    error: null,
    loading: false,
} as initialStateType



const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendEmail.pending, (state) => {
                state.messages = ''
            })
            .addCase(sendEmail.fulfilled, (state, action) => {
            state.messages = action.payload.message
        })
    }
})

export const {reducer: appReducer, actions: appActions} = slice
export const appThunk = {sendEmail}