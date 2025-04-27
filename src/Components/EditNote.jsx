import React, { useEffect, useState } from "react";

export default function EditNote() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const handleEdit = async () => {};

  return (
    <>
      <div>
        <form onSubmit={handleEdit} className="mx-5 my-5">
          <div className="mb-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label">
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
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
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
  );
}
