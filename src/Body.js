import React, { useEffect, useState } from "react";
import P from "prop-types";

Body.propTypes = {
  text: P.string.isRequired,
};

export default function Body({ text }) {
  return <span>{text}</span>;
}
