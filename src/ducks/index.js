import { combineReducers } from "redux";
import Upload from "./upload";
import Categories from "./categories";
import Utils from "./utils";
import Manufacturer from './manufacturer'
import Reseller from './resellers'
import Machine from './machines'

export default combineReducers({ Upload, Categories, Utils, Manufacturer, Reseller, Machine });
