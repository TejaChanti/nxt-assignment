import { MdOutlineNightlight } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsTranslate } from "react-icons/bs";
import "./index.css"

const Header = () => {
    return(
        <nav className="header-container">
            <h2 className="im">IM</h2>
            <div>
                <MdOutlineNightlight className="icon" />
                <IoIosNotificationsOutline className="icon" />
                <BsTranslate className="icon" />
            </div>
        </nav>
    )
}

export default Header