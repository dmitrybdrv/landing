import {AppDispatch, RootState} from "../app/store.ts";
import {createAsyncThunk} from '@reduxjs/toolkit'

/**
 * createAppAsyncThunk - "обёртка" для createAsyncThunk. Упраздняет часть типизации
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState
    dispatch: AppDispatch
    rejectValue: string | null
}>()