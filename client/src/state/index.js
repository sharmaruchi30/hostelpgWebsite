import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: "",
    token: "",
    houses: [],
};


export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setLogin: (state , action ) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = "";
            state.token = "";
        },
        setHouseLists: (state, action) =>{
            state.houses = action.payload.houses;
        },
        setUserBookmarks: (state, action) => {
            if (state.user!== ""){
                state.user.bookmarks = action.payload.bookmarks;
            }
            else{
                console.error("error user not initialized")
            }
            
        }
    }
})


export const {setLogin, setLogout, setHouseLists , setUserBookmarks} = authSlice.actions;
export default authSlice.reducer;