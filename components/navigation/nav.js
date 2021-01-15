import { MdDashboard, MdAssignmentInd } from 'react-icons/md'
import { FaBook } from 'react-icons/fa'
import { GiLightBulb } from 'react-icons/gi'
import { IoMdSettings} from 'react-icons/io'
import { IoChatbubblesSharp } from 'react-icons/io5'
import styles from "./nav.module.scss";

const navTree = [
  {
    label: "Dashboard",
    icon: MdDashboard
  },
  {
    label: "My Class",
    icon: FaBook
  },
  {
    label: "Instructors",
    icon: MdAssignmentInd,
  },
  
  {
    label: "Courses",
    icon: GiLightBulb,
  },
  
  {
    label: "Group Chat",
    icon: IoChatbubblesSharp,
  },
  
  {
    label: "Settings",
    icon: IoMdSettings,
  },
];

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <ul>
        {navTree.map(item => {
          const Icon = item.icon;
          return (
            <li key={item.label}>
              <Icon />
              {item.label}
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
