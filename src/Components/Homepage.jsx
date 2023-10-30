import React from "react";
import { useGetAllNotesQuery } from "../redux/api";
import Posts from "./Posts";
import Addnote from "./Addnote";

export default function Homepage() {
  
  const { data, isLoading } = useGetAllNotesQuery();

  return (
    <>
      <Addnote />

      <div className="container my-5">
        {isLoading ? (
          <> Loading...</>
        ) : (
          data.mynotes &&
          data.mynotes.map((ele) => {
            return <Posts key={ele._id} data={ele} />;
          })
        )}
      </div>
    </>
  );
}
