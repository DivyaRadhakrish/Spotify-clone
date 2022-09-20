// Initially the dataLayer will have the following information

export const initialState ={
    user : null,
    playlists : [] ,
    playing:false,
    item:null, //song you are listening to, which is null at initial state
    token:null,

}

const reducer = (state,action) => {
    console.log(action);

// dispatching information to the datalayer with action(i.e. type and payload)
switch(action.type){
    case "SET_USER":     // the type of the action is Setting the user to the user(which is null in the initialstate, now it is set as user)
        return{
            ...state,    //Keep whatever in the current state
            user:action.user, 
        };
    case "SET_TOKEN":
        return{
            ...state,
            token:action.token,
        };
    case "SET_PLAYLISTS":
        return{
            ...state,
            playlists:action.playlists,
        };
    case "SET_DISCOVER_WEEKLY":
        return{
            ...state,
            discover_weekly:action.discover_weekly,
        };


{/**If there is nothing matches with the case return default */}
    default:
        return state;
}

};

export default reducer;