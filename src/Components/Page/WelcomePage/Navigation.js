import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import UserProfile from '../../GoogleSingIn/UserProfile';
import { FetchRaw } from '../../FetchTxns/FetchComponent';

export function Navigation({index}) {
  const [componet,setcomponent] = useState(0)
    if(index == 1 ) {
        return <UserProfile/>
    }

    if(index == 4) {
        return <FetchRaw/>
    }

};
