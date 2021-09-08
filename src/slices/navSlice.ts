import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
interface NavState {
  origin: string | null
  destination: string | null
  travelTimeInformation: string | null
}

// Define the initial state using that type
const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<string>) => {
      state.origin = action.payload
    },
    setDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload
    },
    setTravelTimeInformation: (state, action: PayloadAction<string>) => {
      state.travelTimeInformation = action.payload
    },
  },
})

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions

export const selectOrigin = (state: RootState) => state.nav.origin

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
//
// export default counterSlice.reducer
export const reducer = navSlice.reducer
