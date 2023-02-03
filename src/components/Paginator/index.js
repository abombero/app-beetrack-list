import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function Paginator(props) {

  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, settodosPerPage] = useState(3);


  useEffect(() => {

  }, [])

  const handleClick = (event) => {
    console.log('event', event.target.id)
    setCurrentPage(Number(event.target.id))
  }


  return (
    
    <div className="row nav">
      <div className="col-lg-4">
        <ul id="page-numbers">
             
            </ul>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    //getNewItems: (user) => dispatch(getAddData(user)),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    search: state.search,
    searchStatus: state.searchStatus,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);
