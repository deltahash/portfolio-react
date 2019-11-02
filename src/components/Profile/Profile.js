import React from 'react';
import WindowProfile from './WindowView/WindowView';
import MobileProfile from './MobileView/MobileView';
export default function Profile() {
  return (
    <div>
      <div className="globalWindowDisplay">
        <WindowProfile />
      </div>

      <div className="mobileDisplay">
        <MobileProfile />
      </div>
    </div>
  );
}
