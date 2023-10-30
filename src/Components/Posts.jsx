import React from "react";
import { useDeleteNoteMutation, useIsCompletedMutation } from "../redux/api";
import { Link } from "react-router-dom";

export default function Posts({ data }) {
  // console.log(data._id);
  const [deleteNote,] = useDeleteNoteMutation();

  const [isCompleted] = useIsCompletedMutation();

  const handleDelete = async (id) => {
    await deleteNote({ id });
  };

  const handleCompleted = async (id) => {
    await isCompleted(id);
  };

  return (
    <div>
      <div className="card border my-3">
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <button
            onClick={() => {
              handleCompleted(data._id);
            }}
            type="button"
            className={
              data.isCompleted ? "btn btn-success" : "btn btn-primary"
            }>
            {data.isCompleted ? "Completed" : "Complete"}
          </button>

          <Link to={`/note/${data._id}`}>
            <button type="button" className="btn btn-primary mx-3">
              Edit
            </button>
          </Link>

          <button
            onClick={() => {
              handleDelete(data._id);
            }}
            type="button"
            className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
