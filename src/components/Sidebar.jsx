import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import SidebarOption from './SidebarOption'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import AppsIcon from '@material-ui/icons/Apps';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';










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
            <SidebarOption  Icon={InboxIcon} title=" InboxIcon" />
            <SidebarOption Icon={AppsIcon} title=" Apps" />
            <SidebarOption  Icon={DraftsIcon} title=" Drafts" />
            <SidebarOption Icon={BookmarkBorderIcon} title=" BookmarkBorder" />
            <SidebarOption  Icon={FileCopyIcon} title=" FileCopy" />
            <SidebarOption Icon={FileCopyIcon} title=" FileCopy" />
            <SidebarOption Icon={InsertCommentIcon} title=" hello faizan" />
            <SidebarOption Icon={ExpandLessIcon}  title=" ExpandLess" />
            
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title=" ExpandMore" />
            <SidebarOption  title=" hello maaz" />
            <SidebarOption  title=" hello maaz" />
            <SidebarOption  title=" hello maaz" />
            <SidebarOption  title=" hello maaz" />
        </div>
    )
}

export default Sidebar
