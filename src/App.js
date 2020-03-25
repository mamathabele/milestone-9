import React from 'react';
import logo from './logo.png';
import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu, Breadcrumb} from 'antd';
import { Input } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { Card } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const { Meta } = Card;


const { Search } = Input;


const { Header, Content, Footer } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" img src= {https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/064fc70f-5df3-4333-b9d4-f6abe2f946de/react-wp-app8.png} alt="Logo" style={{width:"120",height:"31"}}/>
      
      
    
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        
        <Menu.Item key="1"><MenuOutlined />Menu</Menu.Item>
        <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 800 }}
    />
        
        <Menu.Item key="2">Imdbpro</Menu.Item>
        <Menu.Item key="3">watchlist</Menu.Item>
        
          
          
          <Menu.Item key="4"><BrowserRouter><Link to={"/linksignin"}>signin</Link></BrowserRouter></Menu.Item>
        
      
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
       <div className="titlecontent" style={{ padding:20,color:"red",fontStyle:"bold"}}>TOP PICKS</div> 
        
        <Card
         hoverable
          style={{ width: 240 ,position: "relative", display:"inline-block",paddingRight:"20px"}}
           cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
           <Meta title="Europe Street beat" description="www.instagram.com" />
           <Rate />
          </Card>
          <Card
         hoverable
          style={{ width: 240 ,position: "relative", display:"inline-block",paddingRight:"20px"}}
           cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
           <Meta title="Europe Street beat" description="www.instagram.com" />
           <Rate />
          </Card>
          <Card
         hoverable
          style={{ width: 240 ,position: "relative", display:"inline-block",paddingRight:"20px"}}
           cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
           <Meta title="Europe Street beat" description="www.instagram.com" />
           <Rate />
          </Card>
          <Card
         hoverable
          style={{ width: 240 ,position: "relative", display:"inline-block",paddingRight:"20px"}}
           cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
           <Meta title="Europe Street beat" description="www.instagram.com" />
           <Rate />
          </Card>
          
       {/* <div>
        <img src={logo} alt="logo" />
        <Rate />

       </div>*/}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}> @1990-2020 by IMDb.com, Inc.
     <div className="icons-list">
    <IconFont type="icon-tuichu" style={{paddingRight:"10px"}}/>

    <IconFont type="icon-facebook" style={{paddingRight:"10px"}}/>
    <IconFont type="icon-twitter" style={{paddingRight:"10px"}}/>
  </div>,
    </Footer>
  </Layout>,

      
     
</div>

  );
}

export default App;
