import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Checkbox } from '../Checkbox/Checkbox'
import styles from './TransferPanel.module.css'

export default function TransferPanel() {
    const transferOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

    const [selected, setSelected] = useState<string[]>([]);

    function handleSelect(checkSelect: boolean, name: string): void {
  if (checkSelect) {
    setSelected([...selected, name]);
  } else {
    setSelected(selected.filter((item) => item !== name));
  }
}

  function selectAll(checkSelect: boolean) {
    if(checkSelect) {
        setSelected(transferOptions);
    } else {
        setSelected([])
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