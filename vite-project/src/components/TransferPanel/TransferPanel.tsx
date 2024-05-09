
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Checkbox } from '../Checkbox/Checkbox'
import styles from './TransferPanel.module.css'
import { flightsAction } from '../../store/flights.slice';
import { AppDispatcher, RootState } from '../../store/store';

export default function TransferPanel() {
    const transferOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
    const dispatch = useDispatch<AppDispatcher>()
    const selected = useSelector((s: RootState) => s.flights.selected)

 
    console.log(selected)

    function handleSelect(checkSelect: boolean, name: string): void {
  if (checkSelect) {
    dispatch(flightsAction.addToSelect(name))
  } else {
    dispatch(flightsAction.removeFromSelect(name));
  }
}

  function selectAll(checkSelect: boolean): void {
    if(checkSelect) {
        dispatch(flightsAction.selectAll(transferOptions))
    } else {
        dispatch(flightsAction.unselectAll())
    }
    
  }

return (
    <div className={styles["transfer-panel"]}>
        <p className={styles["heading"]}>Количество пересадок</p>
        <form className={styles["transfer"]}>
            <Checkbox name="all" checkSelect={selected.length === transferOptions.length} updateValue={selectAll}>Все</Checkbox>
            {transferOptions.map((item) => {
                return <Checkbox 
                key={uuidv4()}
                name={item}
                checkSelect={selected.includes(item)}
                updateValue={handleSelect}
                >
                    {item}
                    </Checkbox>
            })}
          
        </form>
        </div>
)
}