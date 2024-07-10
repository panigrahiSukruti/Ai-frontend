import { combineReducers } from "redux";
import userReducer from "./user/userSlice"; // import the userReducer from the userSlice file
import repoReducer from "./repo/repoActions"; // import the repoReducer from the repoSlice file
import followerReducer from "./followers/followerActions";

const rootReducer = combineReducers({
    user: userReducer, // added the imported userReducer to the rootReducer
    repos: repoReducer, // added the imported repoReducer to the rootReducer
    followers: followerReducer,
});

export default rootReducer;