import React, { useEffect, useState } from "react";
import {StyledSearch} from './styled';
import { FaSearch } from "react-icons/fa";

// Redux
import { connect } from "react-redux";
import { getSearchData } from "../../store";


function Search(props){

  const handleNameFilter = event => {
    const { searchData } = props;
    const name = event.target.value;
     searchData(name)
  }
  


  return (
    <>
    <StyledSearch class="form-group">
      <FaSearch className="form-control-feedback" />
      <input type="text" class="form-control" placeholder="Search" onChange={handleNameFilter} />
    </StyledSearch>
   </>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchData: name => dispatch(getSearchData(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);