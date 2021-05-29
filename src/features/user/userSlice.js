import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name:null,
    email:null,
    photo:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserLoginDetails:(state,actions)=>{ 
            state.name= actions.payload.name;
            state.email = actions.payload.email;
            state.photo = actions.payload.photo;
            // console.log('Inn here',state.name);
        },
        setSignOutState:state=>{
            state.name=null;
            state.email=null;
            state.photo=null;
        }
    }
})

export const {setUserLoginDetails,setSignOutState} = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
