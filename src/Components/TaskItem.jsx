import React, { useState } from "react";

function TaskItem({ taskname, deleteItem, editItem, index }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(taskname);

  function handleSave() {
    editItem(index, editedValue);
    setIsEditing(false);
  }

  return (
    <ul className="ps-0">
      <li className='list-items d-flex justify-content-between align-items-center'>

        {isEditing ? (
          <input
            type="text"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
            className="form-control me-2"
          />
        ) : (
          <span>{taskname}</span>
        )}

        <div className="d-flex gap-2">

          {isEditing ? (
            <button className='btn btn-primary btn-sm' onClick={handleSave}>
              Save
            </button>
          ) : (
            <button
              className='btn btn-success btn-sm'
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}

          <button
            className='btn btn-danger btn-sm'
            onClick={() => deleteItem(taskname)}
          >
            Delete
          </button>

        </div>
      </li>
    </ul>
  );
}

export default TaskItem;
