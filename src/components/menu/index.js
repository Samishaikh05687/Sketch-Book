import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames';
import { useDispatch ,useSelector } from 'react-redux'
import { faPencil,faEraser,faRotateLeft,faRotateRight,faFileArrowDown} from '@fortawesome/free-solid-svg-icons'
import styles from "./index.module.css"
import { MENU_ITEMS } from '@/src/pages/constants'
import { menuItemClick,actionItemClick } from '@/src/slice/menuslice'
import classNames from 'classnames'


const Menu = () => {
    const dispatch = useDispatch()
    const activeMenuItem = useSelector((state) =>state.menu.activeMenuItem)

    const handleMenuClick = (itemName) =>{
       dispatch(menuItemClick(itemName))
    }
    return(
        <div className={styles.menucontainer}> 
            <div className={cx(styles.iconwrapper , {[styles.active]: activeMenuItem === MENU_ITEMS.PENCIL})} onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}>
            <FontAwesomeIcon icon={faPencil} className={styles.icon} />
            </div>     
            <div className={cx(styles.iconwrapper , {[styles.active]: activeMenuItem === MENU_ITEMS.ERASER})} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}>
            <FontAwesomeIcon icon={faEraser} className={styles.icon} />
            </div>  
            <div className={styles.iconwrapper}>
            <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
            </div>  
            <div className={styles.iconwrapper}>
            <FontAwesomeIcon icon={faRotateRight}  className={styles.icon}/>
            </div>  
            <div className={styles.iconwrapper}>
            <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
            </div>  
             
        </div>
    )
}

export default Menu;