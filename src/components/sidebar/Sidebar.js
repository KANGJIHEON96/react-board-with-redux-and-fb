import "./sidebar.css";
import {
  RssFeed,
} from "@material-ui/icons";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            
            <span className="sidebarListItemText">게시물 리스트</span>
          </li>
        </ul>
        <button className="sidebarButton">보기</button>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
}