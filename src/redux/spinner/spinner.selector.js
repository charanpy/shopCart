import { createSelector } from 'reselect';


const spinnerLoading = state => state.spinner;

export const selectSpinnerLoading = createSelector(
            [spinnerLoading],
            spinner => spinner.loading
);