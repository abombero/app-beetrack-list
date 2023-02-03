import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import api from "./utils/api";

import { composeWithDevTools } from "redux-devtools-extension";

const INITIAL_STATE = {
  data: [],
  loading: true,
  search: '',
};

// REDUCER

export function academyReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case "FETCH_DATA_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "FETCH_DATA_SUCCESS": {
      const { data } = action.payload;
      return {
        ...state,
        data,
        loading: true
      };
    }

    case "FETCH_FAILURE": {
      const { error } = action.payload;
      return {
        ...state,
        error,
        loading: false
      };
    }

    case "SEARCH_DATA": {
      const { event } = action.payload;
      return {
        ...state,
        search: event,
        loading: true
      };
    }

    case "ADD_DATA": {
      const { user } = action.payload;
      return {
        ...state,
        data: [...state.data, user],
        loading: true,
        searchStatus: true
      };
    }

    case "DELETE_DATA": {
      const { id } = action.payload;
      return {
        ...state,
        data: state.data.filter(el => el.id !== id),
        loading: true,
        searchStatus: true
      };
    }

    case "LOAD_NEW_PAGE": {
      //Clone the previous state
      let loadNewPageState = Object.assign({}, state);
      //How many pages should be added. Will always be 1 or -1
      let addPages = action.payload.page;
      //add it to the current
      loadNewPageState.currentPage += addPages;

      let perPage = loadNewPageState.countPerPage; //20 by default

      let nextProducts;
      if (addPages === 1) {
        //Moving from page 1 to 2 will cause ‘upperCount’ to be 40
        let upperCount = loadNewPageState.currentCount + perPage;
        let lowerCount = loadNewPageState.currentCount; //This hasn’t been changed. It will remain 20.

        loadNewPageState.currentCount += loadNewPageState.countPerPage;
        nextProducts = loadNewPageState.products.slice(lowerCount, upperCount);
      }

      if (addPages === -1) {
        let upperCount = loadNewPageState.currentCount; //40
        let lowerCount = loadNewPageState.currentCount - perPage; //20

        loadNewPageState.currentCount -= loadNewPageState.countPerPage;
        nextProducts = loadNewPageState.products.slice(
          lowerCount - perPage,
          upperCount - perPage
        );
      }

      loadNewPageState.filteredProducts = nextProducts;
      window.history.pushState(
        { page: 1 },
        "title 1",
        `?page=${loadNewPageState.currentPage}`
      );
      return loadNewPageState;
    }

    default: {
      return state;
    }
  }
}


// ACTIONS

const fetchDataRequestAction = () => {
  return { type: "FETCH_DATA_REQUEST"};
};

const fetchDataSuccessAction = (data) => {
  return { type: "FETCH_DATA_SUCCESS", payload: { data } };
};

const fetchFailureAction = (error) => {
  return { type: "FETCH_FAILURE", payload: error };
};

const searchDataAction = (event) => {
  return { type: "SEARCH_DATA", payload: { event } };
};

const addData = (user) => {
  return { type: "ADD_DATA", payload: { user } };
};

const deleteData = (id) => {
  return { type: "DELETE_DATA", payload: { id } };
};

const loadNewPage = (page) => {
  return { type: "DELETE_DATA", payload: { page } };
};

// THUNK

const getDataRequest = () => {
  return async function (dispatch) {
    try {
      dispatch(fetchDataRequestAction());
      const data =  await api.getData();
      dispatch(fetchDataSuccessAction(data));
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  };
};

const getSearchData = event => {
  return function(dispatch) {
     dispatch(searchDataAction(event));
  };
};

const getAddData = (user) => {
  return async function (dispatch) {
    try {
     const data =  await api.addData(user);
     dispatch(addData(data));
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  };
};

const getDeleteData = (id) => {
  return async function (dispatch) {
    try {
     const data =  await api.deleteData(id);
     dispatch(deleteData(id));
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  };
};


const store = createStore(
  academyReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export {
  store as default,
  getDataRequest,
  getSearchData,
  getAddData,
  getDeleteData
};
