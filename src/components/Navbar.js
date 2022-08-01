/**
 * @Author: frank zhang
 * @Date:   2022-07-31 21:05:18
 * @Last Modified by:   frank zhang
 * @Last Modified time: 2022-07-31 21:16:08
 */

import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage("planets")}>Planets</button>
      <button onClick={() => setPage("people")}>People</button>
    </nav>
  );
};
export default Navbar;
