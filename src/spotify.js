// End point for the user to get authorization from spotify
export const authEndpoint ="https://accounts.spotify.com/authorize";

// After getting authorization, the user returns back to the local host
const redirectUri ="http://localhost:3000/";

const clientId="f03a5107f7cb41e7809a534b076a047d";

// scopes determines the user's activity
const scopes =[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// Pulling the accesstoken out from the URL -->(using that for login into spotify)
export const getTokenFromUrl = () => {
    return window.location.hash    // Locating the position of the accesstoken which has # in the begining
    .substring(1)
    .split('&')  // splitting '&' which is at the end of the access token
    .reduce((initial,item)=>{
        var parts = item.split('=')  // splitting '=' which is next to the parts[0](str-->accesstoken)
        initial[parts[0]] = decodeURIComponent (parts[1]);  //decoding the parts[1] which is real access token(after'=')
        return initial;
    },{});
}




export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;