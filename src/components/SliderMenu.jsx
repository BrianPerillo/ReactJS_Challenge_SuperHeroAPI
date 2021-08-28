import 'react-pro-sidebar/dist/css/styles.css';
import '../assets/styles/sidebarmenu.scss'

import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu } from 'react-pro-sidebar';
import { useEffect, useState } from 'react';

import { AiOutlineTeam } from "react-icons/ai";
import Atributtes from './Atributtes';
import { IoMenuSharp } from "react-icons/io5";

const SliderMenu = ({stats, teamLength}) => {

    const [switchMenu, setSwitchMenu] = useState(true)
    const [styles, setStyles] = useState({
        sidebar:{
            height:'100vh',
            position: 'absolute',

            zIndex: 10,
        }
    })


    const handleOnCollapse = () => {
     
        setSwitchMenu(prevState => !prevState)

        // if(switchMenu){

        //     setStyles({
        //         sidebar:{
        //             height:'100vh',
        //             position: 'absolute',
        //             width:'100',
        //             zIndex: 10,
        //         }
        //     });
        // }
        // else{
           
        //     setStyles({
        //         sidebar:{
        //             height:'100vh',
        //             position: 'sticky',
        //             top:0,
        //             zIndex: 10,
        //         }
        //     });

        // }
        

    }

    useEffect(() => {
     

    }, [switchMenu])

    return ( 

        <div>
           
            <ProSidebar style={styles.sidebar} collapsed={switchMenu} image={'https://i.pinimg.com/originals/db/b2/12/dbb2129035f83c491af200bb58e257cc.jpg'}>
                <SidebarHeader>
                    <Menu iconShape="circle">
                        <MenuItem  icon={<IoMenuSharp />} onClick={()=>handleOnCollapse()} ></MenuItem>
                    </Menu>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <SubMenu icon={<AiOutlineTeam />} title="Team Stats" >
                            <Atributtes teamLength={teamLength} stats={stats}/>
                        </SubMenu>
                        <SubMenu icon={<AiOutlineTeam />} title="Team Stats" >
                            <Atributtes teamLength={teamLength} stats={stats}/>
                        </SubMenu>
                    </Menu>
                </SidebarContent>  
                    
                <SidebarFooter>
                    <div className="btn-toggle">®</div>
                </SidebarFooter>
            </ProSidebar>
        </div>

     );
     
}
 
export default SliderMenu;

