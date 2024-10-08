import React from "react";
import Image from "next/image";
import {ShowImage} from "./Functions"
import { ImageLink } from "./Datas";

function MailInput() {
  return (
    <div clssName="">
      <div>
        <div>
          <ShowImage alt={"Mail Logo"} itemLinks={ImageLink.MailLogo} widths={300} heights={300}  />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default MailInput;
