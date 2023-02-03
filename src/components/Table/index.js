import React, { useEffect } from "react";


import { TableStyled, TableThStyled, AvatarStyled } from "./styled";
import imgAvatar from '../../assets/avatar.jpg'
// Redux
import { connect } from "react-redux";
import { getDeleteData } from "../../store";



function Table(props) {
  const dataUser = props.data;
  
  const handleDelete = id => {
    props.getDeleteData(id)
  }


  return (
    <TableStyled className="table table-bordered bg-light">
      <thead>
        <tr>
          <TableThStyled scope="col">Nombre</TableThStyled>
          <TableThStyled scope="col">Descripcion</TableThStyled>
        </tr>
      </thead>
      <tbody>
        {dataUser.map((el) => (
          <>
            <tr className="light">
              <td>
                <AvatarStyled className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      {el.photo === "" ?  <img src={imgAvatar} class="avatar rounded-circle" width="70" height="70" /> :  <img src={el.photo} class="avatar rounded-circle" width="70" height="70" /> }
                    </div>
                    <div className="col-lg-7">
                      <p className="name">{el.name}</p>
                      <p className="" onClick={() => handleDelete(el.id)}>Eliminar</p>
                    </div>
                  </div>
                </AvatarStyled>
              </td>
              <td className="description">{el.description}</td>
            </tr>
          </>
        ))}
      </tbody>
    </TableStyled>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    searchData: id => dispatch(getDeleteData(id))
  };
};


const mapStateToProps = (state) => {
  return {
    data: state.data.filter(contact => contact.name.toLowerCase().includes(state.search)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Table);
