import { Layout, Menu } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import "./styles/dashboard.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom"
import { UserView} from './features/user/UserView'
import AddData from "./features/user/AddData"
import AboutUs from "./components/AboutUs"
import Home from "./components/Home"
import SignOut from "./components/SignOut"
// import { item } from "./data"
import { BsPerson } from "react-icons/bs"
import { MdOutlineCreate } from "react-icons/md"
import { BsListStars } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"
import { VscOrganization } from "react-icons/vsc"
import { TfiPowerOff } from "react-icons/tfi"    

function App() {

  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  
  
  return <div>
    <Layout className="container">
      <Header style={{ backgroundColor: "white" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <GiHamburgerMenu onClick={() => setCollapsed(!collapsed)} size={28} style={{ marginRight: 20 }} />
          <div className="brand">
            cool-dashboard
          </div>
        </div>
      </Header>
      <Layout>
        <Sider collapsed={collapsed} theme="light">
          <Menu
            onClick={({ key }) => {
              if (key === 'sign_out') {

              } else {
                navigate(key);
              }
            }}
            mode="inline"
            items={[
              {
                  label: "Home",
                  key: "/",
                  icon: <AiOutlineHome />,
              },
              {
                  label: "Candidate",
                  key: "/candidate",
                  icon: <BsPerson />,
                  children: [
                      {
                          label: "Create Candidate",
                          key: "/candidate/create_candidate",
                          icon: <MdOutlineCreate />,
                      },
                      {
                          label: "Candidates List",
                          key: "/candidate/candidates_list",
                          icon: <BsListStars />
                      },
                  ]
              },
              {
                  label: "About Us",
                  key: "/about_us",
                  icon: <VscOrganization />,
              },
              {
                  label: "Sign Out",
                  key: "/sign_out",
                  icon: <TfiPowerOff />,
                  danger: true
              },
          ]}
             />
        </Sider>
        <Content>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/candidate" element={<div>Candidates</div>} /> */}
            <Route path="/candidate/create_candidate" element={<AddData/>} />
            <Route path="/candidate/candidates_list" element={<UserView/>} />
            <Route path="/about_us" element={<AboutUs/>} />
            <Route path="/sign_out" element={<SignOut/>} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  </div>
}

export default App
