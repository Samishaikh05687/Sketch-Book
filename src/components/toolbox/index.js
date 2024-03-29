import { useSelector, useDispatch } from 'react-redux'
import styles from './index.module.css'
import cx from 'classnames';
import { socket } from '@/src/socket';

import { COLORS, MENU_ITEMS } from '@/src/constants'
import { changeColor,changeBrushSize } from '@/src/slice/toolboxslice'


const Toolbox = () => {
    const dispatch = useDispatch()
    const activeMenuItem = useSelector((state) =>state.menu.activeMenuItem)
    const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL
    const showBrushToolOption = activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER;
    const {color,size}= useSelector((state) => state.toolbox[activeMenuItem]);


    const updateBrushSize = (e) => {
        dispatch(changeBrushSize({item: activeMenuItem, size: e.target.value }))
        socket.emit('changeConfig',{color,size: e.target.value})
    }
    
    const updateColor = (newColor) => {
        dispatch(changeColor({item: activeMenuItem, color: newColor}))
        socket.emit('changeConfig',{color: newColor,size})
    }
    
    return (<div className={styles.toolboxcontainer}>
          {showStrokeToolOption && <div className={styles.toolitem}>
            <h4 className={styles.Tooltext}>Stroke Color </h4>
            <div className={styles.itemcontainer}>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.BLACK})} style={{backgroundColor:COLORS.BLACK}} onClick={() => updateColor(COLORS.BLACK)}/>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.RED})} style={{backgroundColor:COLORS.RED}} onClick={() => updateColor(COLORS.RED)}/>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.GREEN})} style={{backgroundColor:COLORS.GREEN}} onClick={() => updateColor(COLORS.GREEN)}/>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.BLUE})} style={{backgroundColor:COLORS.BLUE}} onClick={() => updateColor(COLORS.BLUE)}/>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.ORANGE})} style={{backgroundColor:COLORS.ORANGE}} onClick={() => updateColor(COLORS.ORANGE)}/>
                <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.YELLOW})} style={{backgroundColor:COLORS.YELLOW}} onClick={() => updateColor(COLORS.YELLOW)}/>
            </div>
        </div>}
          {showBrushToolOption && <div className={styles.toolitem}>
            <h4 className={styles.Tooltext}>Brush size</h4>
            <div className={styles.itemcontainer}>
                  <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} value={size}/>
            </div>
        </div>}
        
    </div>)
    
}

export default Toolbox;