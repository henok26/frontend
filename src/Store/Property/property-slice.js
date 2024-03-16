import {createSlice} from '@reduxjs/toolkit'
const propertySlice=createSlice({
//slice name
name:"property",
//initial state for the property slice
initialState:{
    properties:[],
    totalProperties:0,
    searchParams:{},//parameters used to search
    error:null,//error state
    loading:false,//loading sate for the property
},
reducers:{
    getRequest(state){
        state.loading=true;
    },
    getProperties(state,action){
        state.properties=action.payload.data;
        state.totalProperties=action.payload.all_properties;
        state.totalProperties=action.payload.all_properties;
        state.loading=false;

    },
    //
},

})

