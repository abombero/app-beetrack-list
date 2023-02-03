import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaPlusCircle } from "react-icons/fa";
import { StyledAdd, StyledRowModal, StyledForm } from "./styled";
import { FaRegWindowClose } from "react-icons/fa";
// Redux
import { connect } from "react-redux";
import { getAddData } from "../../store";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Add(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [formAdd, setForm] = useState([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleChangeUrl = (event) => {
    const { value } = event.target;
    setPhoto(value);
  };

  const handleChangeDescription = (event) => {
    const { value } = event.target;
    setDescription(value);
  };

  const handleSubmit = (event) => {
    setIsOpen(false);
    event.preventDefault();
    props.getNewItems({ name: name, photo: photo, description: description });
  };

  return (
    <>
      <StyledAdd>
        <p className="btn-add" onClick={openModal}>
          <span>
            <FaPlusCircle />
          </span>{" "}
          Nuevo Contacto
        </p>
      </StyledAdd>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledRowModal className="row">
          <div className="container">
            <div className="col-lg-12 mx-auto">
              <p className="header">Agregar nuevo contacto</p>
            </div>
          </div>
        </StyledRowModal>
        <div className="row">
          <div className="container">
          <StyledForm onSubmit={handleSubmit} className="was-validated" novalidate>
            <label for="exampleInputEmail1">URL Imagen de perfil <span>*</span></label>
            <input
              type="text"
              id="exampleInputEmail1"
              class="form-control"
              placeholder="url"
              name="url"
              onChange={handleChangeUrl}
              required
            />
            <label for="exampleInputEmail1">Nombre <span>*</span></label>
            <input
              type="text"
              class="form-control"
              placeholder="nombre"
              name="nombre"
              onChange={handleChangeName}
              required
            />
            <label for="exampleInputEmail1">Descripcion <span>*</span></label>
            <textarea
              type="text"
              class="form-control"
              placeholder="descripcion"
              name="descripcion"
              onChange={handleChangeDescription}
              required
            />
            <div className="btnContainer"><button type="submit" value="Guardar">Guardar</button></div>
          </StyledForm>
          </div>
        </div>
      </Modal>

      {/* 
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            class="form-control"
            placeholder="url"
            name="url"
            onChange={handleChangeUrl}
          />
          <input
            type="text"
            class="form-control"
            placeholder="nombre"
            name="nombre"
            onChange={handleChangeName}
          />
          <input
            type="text"
            class="form-control"
            placeholder="descripcion"
            name="descripcion"
            onChange={handleChangeDescription}
          />
          <input type="submit" value="Guardar"></input>
        </form>

        <button onClick={closeModal}>close</button>
      </Modal> */}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewItems: (user) => dispatch(getAddData(user)),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    search: state.search,
    searchStatus: state.searchStatus,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
