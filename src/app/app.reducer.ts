import * as uiReducer from './common/reducers/ui.reducer';
import * as authReducer from './auth/reducers/auth.reducer';

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
    ui: uiReducer.State;
    auth: authReducer.State;
}

export const reducers: ActionReducerMap<State> = {
    ui: uiReducer.uiReducer,
    auth: authReducer.authReducer,
}

export const getUIState = createFeatureSelector<uiReducer.State>('ui');
export const getIsLoading = createSelector(getUIState, uiReducer.getIsLoading);

export const getAuthState = createFeatureSelector<authReducer.State>('auth');
export const getAuthStatus = createSelector(getAuthState, authReducer.getAuthStatus);