import React from 'react';
import "./Sidebar.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div>
        {/* Twitter icon*/}
        <TwitterIcon/>

        <SidebarOption text="Home"/>
        <SidebarOption text="Explore"/>
        <SidebarOption text="Notifications"/>
        <SidebarOption/>
        <SidebarOption/>
        {/* SidebarOption */}
        {/* SidebarOption */}
        {/* SidebarOption */}
        {/* SidebarOption */}
        {/* SidebarOption */}
        {/* SidebarOption */}

        </div>
    )
}

export default Sidebar;
