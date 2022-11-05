import React, { useState, useEffect } from "react";

export default function SimulateError() {

    const [repo, setRepo] = useState();
  return (
    <div>{repo.name}</div>
  )
}
