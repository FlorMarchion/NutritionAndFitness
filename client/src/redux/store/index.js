import { configureStore } from '@reduxjs/toolkit'
import guideReducer from '../reducer/guideReducer';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        guide: guideReducer,
    },
    middleware: [thunk]
})
