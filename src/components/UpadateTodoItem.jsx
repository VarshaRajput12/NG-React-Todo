import React, { useState } from "react";

function EditTodoItemForm({ onUpdateOpen }) {
  const { updateItemById, currentCheckedItem } = useTodoContext();
  const [values, setValues] = useState({
    id: currentCheckedItem.id,
    title: currentCheckedItem.title,
    dueDate: currentCheckedItem.dueDate,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, title, dueDate } = values;
    if (!id || !title || !dueDate) {
      toast.error("Missing input fields");
      return;
    }
    updateItemById(id, values);
    onUpdateOpen();
    toast.success("Updated a item");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={values.title} onChange={handleChange} />
      <input name="dueDate" value={values.dueDate} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
}
