import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperList } from "./operation";
import { produce } from "immer";

const camperSlice = createSlice({
  name: "camperData",
  initialState: {
    campers: {
      data: [],
      campersCount: 0,
      promoImages: []
    },
    isLoading: false,
    showedVans: 4,
    favoritesIDs: [],
    filters: { location: null, details: [], camperType: "" },
  },
  reducers: {
    switchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    showMore: (state, action) => {
      state.showedVans = action.payload;
    },
    toggleFavorite: (state, action) => {
      const _id = action.payload;
      if (!state.favoritesIDs.includes(_id)) {
        state.favoritesIDs = [...state.favoritesIDs, _id].sort((a, b) => {
          return a - b;
        });
      } else {
        state.favoritesIDs = [...state.favoritesIDs].filter((id) => id !== _id);
      }
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = {};
    },
  },

    extraReducers: (builder) => {
    builder
      .addCase(fetchCamperList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCamperList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers.data = action.payload.data.map((camper) => ({
          ...camper,
          favorite: false, // Встановіть початкове значення в 'false'
        }));
      })
      .addCase(fetchCamperList.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  switchLoading,
  showMore,
  toggleFavorite,
  setFilters,
  resetFilters
} = camperSlice.actions;
export const camperReducer = camperSlice.reducer;