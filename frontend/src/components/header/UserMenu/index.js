import React, { useState } from "react";
import { Link } from "react-router-dom";
import SettingPrivacy from "./SettingPrivacy";
import HelpSupport from "./HelpSupport";
import DisplayAccessibility from "./DisplayAccessibility";

export default function UserMenu({ user }) {
  const [visible, setVisible] = useState(0);
  return (
    <div className="menu">
      {visible === 0 && (
        <div>
          <Link to="profile" className="menu_header hover3">
            <img src={user?.picture} alt="" />
            <div className="menu_col">
              <span>
                {user?.first_name} {user?.last_name}
              </span>
              <span>See your profile</span>
            </div>
          </Link>
          <div className="menu_splitter"></div>
          <div className="menu_main hover3">
            <div className="small_circle">
              <i className="report_filled_icon"></i>
            </div>
            <div className="menu_col">
              <div className="menu_span1">Give feedback</div>
              <div className="menu_span2">Help us to improve facebook</div>
            </div>
          </div>
          <div className="menu_splitter"></div>
          <div
            className="menu_item hover3"
            onClick={() => {
              setVisible(1);
            }}
          >
            <div className="small_circle">
              <div className="settings_filled_icon"></div>
            </div>
            <span>Settings & Privacy</span>
            <div className="rArrow">
              <i className="right_icon"></i>
            </div>
          </div>
          <div
            className="menu_item hover3"
            onClick={() => {
              setVisible(2);
            }}
          >
            <div className="small_circle">
              <div className="help_filled_icon"></div>
            </div>
            <span>Help & Support</span>
            <div className="rArrow">
              <i className="right_icon"></i>
            </div>
          </div>
          <div
            className="menu_item hover3"
            onClick={() => {
              setVisible(3);
            }}
          >
            <div className="small_circle">
              <div className="dark_filled_icon"></div>
            </div>
            <span>Display & Accessibility</span>
            <div className="rArrow">
              <i className="right_icon"></i>
            </div>
          </div>
          <div className="menu_item hover3">
            <div className="small_circle">
              <div className="logout_filled_icon"></div>
            </div>
            <span>Logout</span>
          </div>
        </div>
      )}
      {visible === 1 && <SettingPrivacy setVisible={setVisible} />}
      {visible === 2 && <HelpSupport setVisible={setVisible} />}
      {visible === 3 && <DisplayAccessibility setVisible={setVisible} />}
    </div>
  );
}
