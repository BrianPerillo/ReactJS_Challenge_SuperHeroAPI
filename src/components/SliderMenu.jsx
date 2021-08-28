import 'react-pro-sidebar/dist/css/styles.css';
import '../assets/styles/sidebarmenu.scss'

import { Menu, MenuItem, ProSidebar, SubMenu } from 'react-pro-sidebar';
import { useEffect, useState } from 'react';

import { AiOutlineTeam } from "react-icons/ai";
import Atributtes from './Atributtes';
import { IoMenuSharp } from "react-icons/io5";

const SliderMenu = ({stats, teamLength}) => {

    const [switchMenu, setSwitchMenu] = useState(true)

    const handleOnCollapse = () => {
     
        setSwitchMenu(prevState => !prevState)

    }

    useEffect(() => {
     

    }, [switchMenu])

    return ( 
        <div style={{height:'75vh'}}>
        <ProSidebar collapsed={switchMenu} image={'https://i.pinimg.com/originals/db/b2/12/dbb2129035f83c491af200bb58e257cc.jpg'}>
        <Menu iconShape="circle">
            <MenuItem  icon={<IoMenuSharp />} onClick={()=>handleOnCollapse()} ></MenuItem>
                <SubMenu icon={<AiOutlineTeam />} title="Team Stats" >
                <Atributtes teamLength={teamLength} stats={stats}/>
            </SubMenu>
        </Menu>
        </ProSidebar>
        </div>
     );
     
}
 
export default SliderMenu;

