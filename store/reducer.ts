import { combineReducers } from "redux";
import themeReducer from "./slice/theme";
import userReducer from "./slice/userProfile";
import cameraSettingsReducer from "./slice/camera";

const reducer = combineReducers({
  themeReducer,
  userReducer,
  cameraSettingsReducer,
});

export default reducer;
