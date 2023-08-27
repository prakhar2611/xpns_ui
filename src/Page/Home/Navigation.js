import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import UserProfile from '../../Components/Home/UserProfile';
import { FetchRaw } from '../../Components/Home/FetchComponent';
import { FetchByVPA } from '../../Components/Home/FetchByVPA';
//import {Sync } from '../../Components/Home/Sync'


export function Navigation({index}) {
  const [componet,setcomponent] = useState(0)
    if(index == 1 ) {
        return <UserProfile/>
    }
    if(index == 2) {
        return <FetchByVPA/>
    }
    if(index == 4) {
        return <FetchRaw screen="fetch" />
    }
    if(index == 5) {
        return <FetchRaw screen="sync" />
    }

};
