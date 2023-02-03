import React, { useEffect } from "react";


// Redux
import { connect } from "react-redux";
import { getDataRequest } from "../../store";

// Components
import Header from '../Header';
import Table from '../Table';
import Nav from '../Nav';

import Paginator from '../Paginator';

function App(props) {


  useEffect(() => {
    try {
      props.getDataItems();
    } catch (error) {
      console.log("error al cargar master dataset");
    }
  }, []);


  return (
    <>
    <Header/>
    <div className="container">
      
      <Nav />
      <Table />
      <Paginator />
    </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    productsItems: state.data,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDataItems: () => dispatch(getDataRequest())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

