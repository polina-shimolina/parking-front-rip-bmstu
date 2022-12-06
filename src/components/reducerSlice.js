import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchParking = createAsyncThunk(
    'parking/fetchParking',
    async () => {
        const response = await axios(`http://127.0.0.1:8000/api/parking/`);
        return response.data
    }
)
export const fetchParkingEl = createAsyncThunk(
    'parking/fetchParkingEl',
    async (parking_id) => {
        const response = await axios(`http://127.0.0.1:8000/api/parking/${parking_id}/`);
        return response.data
    }
)
const slice = createSlice({
    name: "toolkit",
    initialState: {
        isLoading: true,
        parking: [],
        parkingEl: null,
        parkingState: 'loading',
        parkingError: 'null',
    },
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        loadParkings(state, action) {
            state.parking = action.payload;
        },
        loadParking(state, action) {
            state.parking.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchParking.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchParking.fulfilled, (state, action) => {
                // Add user to the state array
                state.parking = action.payload
                state.isLoading = false
            })
            .addCase(fetchParking.rejected, (state, action) => {
                state.isLoading = false
            })
            .addCase(fetchParkingEl.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchParkingEl.fulfilled, (state, action) => {
                state.parkingEl = action.payload
                state.isLoading = false
            })
            .addCase(fetchParkingEl.rejected, (state, action) => {
                state.isLoading = false
            })
    },
});
export default slice.reducer;
export const {loadParkings, loadParking, setLoading} = slice.actions;