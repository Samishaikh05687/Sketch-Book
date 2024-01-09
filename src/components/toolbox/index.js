import { useSelector,useDispatch} from 'react-redux'
import styles from './index.module.css'
import cx from 'classnames';

import { COLORS, MENU_ITEMS } from '@/src/pages/constants'
import { changeColor,changeBrushSize } from '@/src/slice/toolboxslice'


const Toolbox = () => {
    const dispatch = useDispatch()
    const activeMenuItem = useSelector((state) =>state.menu.activeMenuItem)
    const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL
    const showBrushToolOption = activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER;
    const {color}= useSelector((state) => state.toolbox[activeMenuItem]);


    const updateBrushSize =(e) => {
        dispatch(changeBrushSize({item: activeMenuItem, size: e.target.value }))
    }
    
    const updateColor =(newColor) => {
        dispatch(changeColor({item: activeMenuItem, color: newColor}))
    }
    
    return (<div className={styles.toolboxcontainer}>
          {showStrokeToolOption && <div className={styles.toolitem}>
            <h4 className={styles.Tooltext}>Stroke Color </h4>
            <div className={styles.itemcontainer}>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.BLACK})} style={{backgroundColor:COLORS.BLACK}} onClick={() => updateColor(COLORS.BLACK)}/>
                <div className={styles.colorBox} style={{backgroundColor:COLORS.RED}} onClick={() => updateColor(COLORS.RED)}/>
                <div className={styles.colorBox} style={{backgroundColor:COLORS.GREEN}} onClick={() => updateColor(COLORS.GREEN)}/>
                <div className={styles.colorBox} style={{backgroundColor:COLORS.BLUE}} onClick={() => updateColor(COLORS.BLUE)}/>
                <div className={styles.colorBox} style={{backgroundColor:COLORS.ORANGE}} onClick={() => updateColor(COLORS.ORANGE)}/>
                <div className={styles.colorBox} style={{backgroundColor:COLORS.YELLOW}} onClick={() => updateColor(COLORS.YELLOW)}/>
            </div>
        </div>}
          {showBrushToolOption && <div className={styles.toolitem}>
            <h4 className={styles.Tooltext}>Brush size</h4>
            <div className={styles.itemcontainer}>
                  <input type="range" min={1} max={20} step={1} onChange={updateBrushSize}/>
            </div>
        </div>}
        
    </div>)
    
}

export default Toolbox;