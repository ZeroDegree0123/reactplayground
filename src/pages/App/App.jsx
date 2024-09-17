import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import NavItem from '../../components/NavItem/NavItem';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg'
import { ReactComponent as BellIcon } from '../../icons/bell.svg'
import { ReactComponent as MessageIcon } from '../../icons/message.svg'
import { ReactComponent as CaretIcon } from '../../icons/caret.svg'

export default function App() {
  console.log("app Page")
  return (
    <>
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessageIcon />} />

        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </>
  );
}

