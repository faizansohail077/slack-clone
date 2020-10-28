import React, { useEffect, useState } from 'react'
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
import AddIcon from '@material-ui/icons/Add';
import db from './Firebase'
import { useStateValue } from './Context/StateProvider'

function Sidebar() {
    const [channels, setChannels] = useState([])
    const [{ user }] = useStateValue()


    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name
            })))
        ))
    }, [])



    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>clever faizan</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title=" hello faizan" />
            <SidebarOption Icon={InboxIcon} title=" InboxIcon" />
            <SidebarOption Icon={AppsIcon} title=" Apps" />
            <SidebarOption Icon={DraftsIcon} title=" Drafts" />
            <SidebarOption Icon={BookmarkBorderIcon} title=" BookmarkBorder" />
            <SidebarOption Icon={FileCopyIcon} title=" FileCopy" />
            <SidebarOption Icon={FileCopyIcon} title=" FileCopy" />
            <SidebarOption Icon={InsertCommentIcon} title=" hello faizan" />
            <SidebarOption Icon={ExpandLessIcon} title=" ExpandLess" />

            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title=" ExpandMore" />
            <SidebarOption title=" hello maaz" />
            <SidebarOption title=" hello maaz" />
            <SidebarOption title=" hello maaz" />
            <SidebarOption title=" hello maaz" />
            <SidebarOption Icon={AddIcon} addChannelOption title=" Add channel" />

            {
                channels.map(channel => (
                    <SidebarOption title={channel.name} id={channel.id} />
                ))
            }


        </div>
    )
}

export default Sidebar
