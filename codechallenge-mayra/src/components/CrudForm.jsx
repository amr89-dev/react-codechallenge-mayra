import React, { useState, useEffect } from "react";

const initialForm = {
  title: "",
  price: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      [e.target.price]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.price) {
      alert("Datos Incompletos");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      //console.log(form.title);
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar:" : "Agregar:"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Producto"
          onChange={handleChange}
          value={form.title}
        />
        <input
          type="text"
          name="price"
          placeholder="Precio"
          onChange={handleChange}
          value={form.price}
        />

        <input type="submit" value="Agregar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
