import React, { useState, useRef, useEffect } from "react";
import { Return, Search } from "../../svg";
import useClickOutside from "../../helpers/clickOutput";

export default function SearchMenu({ color, setShowSearchmenu }) {
  const [iconVisible, setIconVisible] = useState(true);
  const menu = useRef(null);
  const input = useRef(null);
  useClickOutside(menu, () => {
    setShowSearchmenu(false);
  });
  useEffect(() => {
    input.current.focus();
  }, []);
  return (
    <div className="header_left search_area scrollbar" ref={menu}>
      <div className="search_wrap">
        <div className="header_wrap">
          <div
            className="circle hover1"
            onClick={() => setShowSearchmenu(false)}
          >
            <Return color={color} />
          </div>
        </div>
        <div
          className="search"
          onClick={() => {
            input.current.focus();
          }}
        >
          {iconVisible && (
            <div>
              <Search color={color} />
            </div>
          )}
          <input
            type="text"
            placeholder="Search Facebook"
            ref={input}
            onFocus={() => {
              setIconVisible(false);
            }}
            onBlur={() => {
              setIconVisible(true);
            }}
          />
        </div>
      </div>
      <div className="search_history_header">
        <span>Recent Searches</span>
        <a href="">Edit</a>
      </div>
      <div className="search_history"></div>
      <div className="search_result scrollbar"></div>
    </div>
  );
}
