import "./App.css";
import SidebarItem from "./components/sidebarItem/SidebarItem";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <div className="sidebar">
        <SidebarItem text="Home" icon={<i className="fa-solid fa-house"></i>} />
        <SidebarItem text="Explore" icon={<i className="fa-solid fa-compass"></i>} />
        <SidebarItem text="Notifications" icon={<i className="fa-solid fa-bell"></i>} />
        <SidebarItem text="Messages" icon={<i className="fa-solid fa-envelope"></i>} />
        <SidebarItem text="Lists" icon={<i className="fa-solid fa-list"></i>} />
        <SidebarItem text="Bookmarks" icon={<i className="fa-solid fa-bookmark"></i>} />
        <SidebarItem text="Communities" icon={<i className="fa-solid fa-users"></i>} />
        <SidebarItem text="Profile" icon={<i className="fa-solid fa-user"></i>} />
        <SidebarItem text="More" icon={<i className="fa-solid fa-ellipsis-h"></i>} />
        <button className="post-button">Post</button>
        <div className="profile-section">
          <img src="" alt="Profile" className="profile-img" />
          <h1 className="profile-name">Mariam Abulail</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>React</h2>
        <p>The library for web and native user interfaces</p>
        <div className="post">
          <h4>Happy 10th birthday to React!</h4>
          <p>React is celebrating a decade of innovation and open-source excellence!</p>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar">
        <div className="trends">
          <h3>Trends for you</h3>
          <p>#ReactJS</p>
          <p>#JavaScript</p>
          <p>#WebDevelopment</p>
        </div>
        <div className="suggestions">
          <h3>Who to follow</h3>
          <div className="suggestion">
            <span>@freeCodeCamp</span>
            <button className="follow-btn">Follow</button>
          </div>
          <div className="suggestion">
            <span>@reactjs</span>
            <button className="follow-btn">Follow</button>
          </div>
          <div className="suggestion">
            <span>@nodejs</span>
            <button className="follow-btn">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;