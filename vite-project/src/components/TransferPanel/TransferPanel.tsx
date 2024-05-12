import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Checkbox } from '../Checkbox/Checkbox'
import styles from './TransferPanel.module.css'
import { AppDispatcher, RootState } from '../../store/store';
import { transferAction } from '../../store/transfer.slice';

export default function TransferPanel() {
 type TransferValue = {
  description: string;
  value: string;
};
    const transferOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
const transferValues: TransferValue[] = [
  { description: "Без пересадок", value: "0" },
  { description: "1 пересадка", value: "1" },
  { description: "2 пересадки", value: "2" },
  { description: "3 пересадки", value: "3" }
];
    const dispatch = useDispatch<AppDispatcher>()
    const selected = useSelector((s: RootState) => s.transfers.selected)

 
    console.log(selected)

    function handleSelect(checkSelect: boolean, name: string): void {
  if (checkSelect) {
    dispatch(transferAction.addToSelect(name))
  } else {
    dispatch(transferAction.removeFromSelect(name));
  }
}

  function selectAll(checkSelect: boolean): void {
    if(checkSelect) {
        dispatch(transferAction.selectAll(transferOptions))
    } else {
        dispatch(transferAction.unselectAll())
    }
    
  }

return (
    <div className={styles["transfer-panel"]}>
        <p className={styles["heading"]}>Количество пересадок</p>
        <form className={styles["transfer"]}>
            <Checkbox name="all" checkSelect={selected.length === transferOptions.length} updateValue={selectAll}>Все</Checkbox>
            {transferValues.map((item) => {
              const {description, value} = item
                return <Checkbox 
                key={uuidv4()}
                name={description}
                checkSelect={selected.includes(description)}
                value = {value}
                updateValue={handleSelect}
                >
                    {description}
                    </Checkbox>
            })}
          
        </form>
        </div>
)
}