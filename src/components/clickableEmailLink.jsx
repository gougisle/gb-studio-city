import React from "react";
import { publicInfo } from "../utils/publicContent";

export default function ClickableEmailLink() {
  return <a href="mailto:info@gbstudiocity.com">{publicInfo.email}</a>;
}
