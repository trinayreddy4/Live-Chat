import React, { useState } from 'react';
import styles from './SideBar.module.css';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ChatsList from '../ChatsList/ChatsList';
import ChatItem from '../ChatItem/ChatItem';

const SideBar = () => {
    const [conversations,setConversations]=useState([
        {
            name:"Test#1",
            lastMessage:"Last Message #1",
            timeStamp:"today"
        },
        {
            name:"Test#2",
            lastMessage:"Last Message #2",
            timeStamp:"today"
        },
        {
            name:"Test#3",
            lastMessage:"Last Message #3",
            timeStamp:"today"
        }
    ])
  return (
    <div className={`${styles.sideBarContainer}`}>
        <div className={`${styles.sbHeader}`}>
            <IconButton>
                <AccountCircleIcon/>            
            </IconButton>
            <IconButton>
                <PersonAddIcon/>
            </IconButton>
            <IconButton>
                <GroupAddIcon/>            
            </IconButton>
            <IconButton>
                <AddCircleIcon/>            
            </IconButton>
            <IconButton>
                <NightlightIcon/>            
            </IconButton>
        </div>
        <div className={`${styles.sbSearch}`}>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input type='text' placeholder='Search' className={`${styles.searchBar}`}/>
        </div>
        <div className={`${styles.sbChats}`}>
            {conversations.map((con)=>{
                return <ChatItem chat={con}/>
            })}
        </div>
    </div>
  )
}

export default SideBar
