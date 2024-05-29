import { createSlice } from '@reduxjs/toolkit';

// Function to generate a random color class
export const getRandomColorClass = () => {
  const colors = ['text-violet-300', 'text-red-300', 'text-blue-300', 'text-green-300, text-rose-300, text-amber-300'];
  return colors[Math.floor(Math.random() * colors.length)];
};;

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    colors: {}, // Store user colors here, keyed by user ID
  },
  reducers: {
    setProfileColor: (state, action) => {
      const { userId, color } = action.payload;
      state.colors[userId] = color;
    },
  },
});

export const { setProfileColor } = profileSlice.actions;
export default profileSlice.reducer;
