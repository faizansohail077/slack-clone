import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import SidebarOption from './SidebarOption'
import InsertCommentIcon from '@material-ui/icons/InsertComment';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>clever faizan</h2>
                    <h3>
                        <FiberManualRecordIcon />
                    faizzy
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title=" hello faizan" />
            <SidebarOption  title=" hello maaz" />
            <SidebarOption Icon={InsertCommentIcon} title=" hello faizan" />
            <SidebarOption  title=" hello maaz" />
            <SidebarOption Icon={InsertCommentIcon} title=" hello faizan" />
            <SidebarOption  title=" hello maaz" />
            <SidebarOption Icon={InsertCommentIcon} title=" hello faizan" />
            <SidebarOption  title=" hello maaz" />
            <SidebarOption Icon={InsertCommentIcon} title=" hello faizan" />
            <SidebarOption  title=" hello maaz" />
            <SidebarOption Icon={InsertCommentIcon} title=" hello faizan" />
            <SidebarOption  title=" hello maaz" />
            <hr/>
            <SidebarOption Icon={InsertCommentIcon} title=" hello faizan" />
            <SidebarOption  title=" hello maaz" />
        </div>
    )
}

export default Sidebar
