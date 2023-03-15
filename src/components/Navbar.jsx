import { useState } from "react"
import Styles from "../styles/Navbar.module.css"
import cx from "classnames"

function renderLink({ link, linkName }) {
    return <a target="_blank" href={link}>{linkName}</a>
}

const nav = ({ links }) => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className={Styles.nav}>
            <h1 className={Styles.branding}>Bike4Rent</h1>
            <div className={toggle ? cx(Styles["nav-links"], Styles.toggled) : Styles["nav-links"]}>
                {links.map(info => renderLink(info))}
            </div>
            <svg onClick={() => setToggle(!toggle)} className={toggle ? Styles.rotated : ""} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
        </nav>

    )
}

export default nav