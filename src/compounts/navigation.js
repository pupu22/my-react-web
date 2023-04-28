import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
    {
      label: "Navigation One",
      key: 'home',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'ExpandCards',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'ExpandCards',
      icon: <SettingOutlined />
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: 'alipay',
    },
  ];

  function Navigation(){
    const navigate = useNavigate();
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
      navigate(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;

  }

  export default Navigation;