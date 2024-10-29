// SidebarItem.js
import "./SidebarItem.css";

const SidebarItem = ({ text, icon }) => {
  return (
    <div className="sidebar-item">
      <span className="sidebar-icon">{icon}</span>
      <span className="sidebar-text">{text}</span>
    </div>
  );
};

export default SidebarItem;