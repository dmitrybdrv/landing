import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createAppAsyncThunk} from "../utils/createAppAsyncThunk.ts";
import {DataType, sendApi} from "../api/mainApi.ts";
import {errorHandler} from "../utils/errorHandler.ts";


/**
 * Thunk для запроса на сервер - на получение письма
 */
const sendEmail = createAppAsyncThunk<{message: string}, DataType>
('app/sendEmail', async (arg, {dispatch, rejectWithValue}) => {
    try {
        dispatch(appActions.setLoading(true))
        const res = await sendApi.sendMail(arg)
        return {message: res.data.message ?? ''}
    } catch (e) {
        const err = errorHandler(e)
        return rejectWithValue(err)
    } finally {
        dispatch(appActions.setLoading(false))
    }
})

/**
 * Thunk для запроса на сервер - на отписку от получение писем
 */
const unsubscribe = createAppAsyncThunk<{message: string}, { id: string }>
('app/unsubscribe', async (arg, {dispatch, rejectWithValue}) => {
    try {
        dispatch(appActions.setLoading(true))
        const res = await sendApi.unsubscribe({id: arg.id})
        return {message: res.data.message ?? ''}
    } catch (e) {
        const err = errorHandler(e)
        return rejectWithValue(err)
    } finally {
        dispatch(appActions.setLoading(false))
    }
})

type initialStateType = {
    message: string,
    error: string,
    loading: boolean,
}
const initialState = {
    message: '',
    error: '',
    loading: false,
} as initialStateType

/**
 * slice - редьюсер - логика обработки thunk`s
 */
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
                state.message = action.payload.message
            })
            .addCase(unsubscribe.fulfilled, (state, action) => {
                state.message = action.payload.message
            })

            .addMatcher((action) => {
                return action.type.endsWith('pending')
            }, (state) => {
                state.error = ''
                state.message = ''
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