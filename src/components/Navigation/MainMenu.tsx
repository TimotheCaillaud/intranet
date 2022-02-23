import { FC, useCallback, useState } from "react"
import { useSelector } from "react-redux"
import classnames from "classnames"
import { isUserConnected } from "../../store/auth"
import styles from "./styles.module.scss"

const MainMenu: FC = (): JSX.Element | null => {
    const connected = useSelector(isUserConnected)
    const [opened, setOpened] = useState(false)

    const onOpen = useCallback(() => {
        setOpened(true)
    }, [setOpened])

    const onClose = useCallback(() => {
        setOpened(false)
    }, [setOpened])

    if (!connected) return null

    return (
        <nav>
            <button type="button" className={styles.burger} onClick={onOpen}>
                ☰
            </button>
            <ul className={classnames(styles.mainMenu, opened && styles.opened)}>
                {/* <li className={styles.mainMenuItem}>
                    <a href="/">Mon espace</a>
                </li> */}
                <li className={styles.mainMenuItem}>
                    <a href="/equipes">Equipes</a>
                </li>
                <li className={styles.mainMenuItem}>
                    <a href="/annonces">Annonces</a>
                </li>
                <button type="button" className={styles.close} onClick={onClose}>
                    ×
                </button>
            </ul>
        </nav>
    )
}

export default MainMenu
