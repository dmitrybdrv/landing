import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createAppAsyncThunk} from "../utils/createAppAsyncThunk.ts";
import {DataType, sendApi, StatusCode} from "../api/mainApi.ts";
import {errorHandler} from "../utils/errorHandler.ts";

const sendEmail = createAppAsyncThunk<any, DataType>
('app/sendEmail', async (arg, {dispatch, rejectWithValue}) => {
    try {
        dispatch(appActions.setLoading(true))
        const res = await sendApi.sendMail(arg)
        if (res.status === StatusCode.Success) {
            return {message: res.data.message, email: arg.email}
        } else if (res.status === StatusCode.ClientError) {
            return {message: res.data.error}
        } else if (res.status === StatusCode.ServerError) {
            return {message: res.data.error}
        }
    } catch (e) {
        const err = errorHandler(e)
        return rejectWithValue(err)
    } finally {
        dispatch(appActions.setLoading(false))
    }
})

const unsubscribe = createAppAsyncThunk<any, {id: string}>
('app/unsubscribe', async (arg, {dispatch, rejectWithValue}) => {
    try {
        dispatch(appActions.setLoading(true))
        const res = await sendApi.unsubscribe({id: arg.id})
        if (res.status === StatusCode.Success) {
            return {message: res.data.message}
        } else if (res.status === StatusCode.ClientError) {
            return {message: res.data.error}
        } else if (res.status === StatusCode.ServerError) {
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
    messages: string | null,
    error: string | null,
    loading: boolean,
}
const initialState = {
    messages: null,
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
            .addCase(sendEmail.fulfilled, (state, action) => {
                state.messages = action.payload.message
            })
            .addCase(unsubscribe.fulfilled, (state, action) => {
                state.messages = action.payload.message
            })

            .addMatcher((action) => {
                return action.type.endsWith('pending')
            }, (state) => {
                state.error = ''
                state.messages = ''
                state.loading = true
            })
            .addMatcher((action) => {
                return action.type.endsWith('fulfilled')
            }, (state) => {
                state.loading = false
            })
            .addMatcher((action) => {
                return action.type.endsWith('rejected')
            }, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

export const {reducer: appReducer, actions: appActions} = slice
export const appThunk = {sendEmail, unsubscribe}