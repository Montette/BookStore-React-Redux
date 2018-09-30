
import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import adminPanelReducer from './AdminPanelReducer';


const rootReducer = combineReducers({
  dataReducer,
  adminPanelReducer
});

export default rootReducer;