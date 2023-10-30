import React, { useEffect, useState } from "react";
import { useNotedetailsQuery, useEditNoteMutation } from "../redux/api";
import { useNavigate, useParams } from "react-router-dom";

export default function EditNote() {
  const params = useParams();
  const navigate = useNavigate();
  let id = params.id;

  const { data,  isLoading } = useNotedetailsQuery(id);
  const [editNote ] = useEditNoteMutation();

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    if (data && data.note) {
      settitle(data.note.title);
    }
    if (data && data.note) {
      setdescription(data.note.description);
    }
  }, [data]);

  const handleEdit = async () => {
    await editNote({ id, title, description });
    navigate("/")
  };

  return (
    <>
      {isLoading ? (
        <div>Loading ... </div>
      ) : (
        <>
          <div>
            <form onSubmit={handleEdit} className="mx-5 my-5">
              <div className="mb-3 ">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="exampleFormControlInput1"
                  value={title}
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label">
                  Body
                </label>
                <textarea
                  className="form-control "
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={description}
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
