import React from "react";
import WindowProfile from "./WindowView/WindowView";
import MobileProfile from "./MobileView/MobileView";
export default function Profile() {
  return (
    <div>
      <div class="globalWindowDisplay">
        <WindowProfile />
      </div>

      <div class="mobileDisplay">
        <MobileProfile />
      </div>
    </div>
  );
}
