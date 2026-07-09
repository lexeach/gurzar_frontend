/* ============================================================
   Enterprise CRUD Selectors
============================================================ */

import { createSelector } from "@reduxjs/toolkit";

/* ============================================================
BASE
============================================================ */

export const createCrudSelectors = (moduleName, adapterSelectors) => {

    const selectModule = (state) => state[moduleName];

    /* ========================================================
       ENTITY SELECTORS
    ======================================================== */

    const selectAll = createSelector(
        selectModule,
        adapterSelectors.selectAll
    );

    const selectEntities = createSelector(
        selectModule,
        adapterSelectors.selectEntities
    );

    const selectIds = createSelector(
        selectModule,
        adapterSelectors.selectIds
    );

    const selectTotal = createSelector(
        selectModule,
        adapterSelectors.selectTotal
    );

    const selectById = (state, id) =>
        adapterSelectors.selectById(
            selectModule(state),
            id
        );

    /* ========================================================
       UI STATE
    ======================================================== */

    const selectLoading = createSelector(
        selectModule,
        (state) => state.loading
    );

    const selectSaving = createSelector(
        selectModule,
        (state) => state.saving
    );

    const selectDeleting = createSelector(
        selectModule,
        (state) => state.deleting
    );

    const selectSuccess = createSelector(
        selectModule,
        (state) => state.success
    );

    const selectError = createSelector(
        selectModule,
        (state) => state.error
    );

    /* ========================================================
       PAGINATION
    ======================================================== */

    const selectPagination = createSelector(
        selectModule,
        (state) => state.pagination
    );

    const selectPage = createSelector(
        selectPagination,
        (pagination) => pagination.page
    );

    const selectPageSize = createSelector(
        selectPagination,
        (pagination) => pagination.pageSize
    );

    const selectRecordCount = createSelector(
        selectPagination,
        (pagination) => pagination.total
    );

    /* ========================================================
       FILTERS
    ======================================================== */

    const selectFilters = createSelector(
        selectModule,
        (state) => state.filters
    );

    const selectSort = createSelector(
        selectModule,
        (state) => state.sort
    );

    const selectSelected = createSelector(
        selectModule,
        (state) => state.selected
    );

    /* ========================================================
       DERIVED
    ======================================================== */

    const selectHasSelection = createSelector(
        selectSelected,
        (selected) => selected.length > 0
    );

    const selectSelectedCount = createSelector(
        selectSelected,
        (selected) => selected.length
    );

    const selectIsEmpty = createSelector(
        selectTotal,
        (total) => total === 0
    );

    return {

        /* Entity */

        selectAll,

        selectEntities,

        selectIds,

        selectTotal,

        selectById,

        /* State */

        selectLoading,

        selectSaving,

        selectDeleting,

        selectSuccess,

        selectError,

        /* Pagination */

        selectPagination,

        selectPage,

        selectPageSize,

        selectRecordCount,

        /* Filters */

        selectFilters,

        selectSort,

        selectSelected,

        /* Derived */

        selectHasSelection,

        selectSelectedCount,

        selectIsEmpty,

    };

};

export default createCrudSelectors;