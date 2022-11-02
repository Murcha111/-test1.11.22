import React from "react";
import { Link } from "react-router-dom";

export default function ListItem({ name, id, index }) {
  return (
    <>
      <Link className="link" to={`${id}/details`}>
        {name}
      </Link>
    </>
  );
}
