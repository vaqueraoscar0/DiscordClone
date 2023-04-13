import {BsPlus, BsFillLightbulbFill, BsGearFill} from "react-icons/bs";
import {FaFire, FaPoo} from "react-icons/fa";
import useDarkMode from "./useDarkMode";


export default function Sidebar() {

    return (
        <div className={'fixed top-0 left-0 h-screen w-16 flex flex-col\n' +
            '                  bg-white dark:bg-gray-900 shadow-lg'}>
            <SideBarIcon icon={<FaFire size="28" />}/>
            <Divider/>
            <SideBarIcon icon={<BsPlus size="32"/> }/>
            <SideBarIcon icon={<BsFillLightbulbFill size="20"/>}/>
            <SideBarIcon icon={<FaPoo size="20"/>}/>
            <Divider/>
            <div>
                <SideBarIcon icon={<BsGearFill size="22" />} />
            </div>
        </div>
    );
}

const SideBarIcon = ({icon, text='tooltip 💡'}) => (
    <div className={'sidebar-icon group'}>
        {icon}

        <span className={'sidebar-tooltip group-hover:scale-100'}>
            {text}
        </span>
    </div>
)

const Divider = () => <hr className="sidebar-hr" />;
