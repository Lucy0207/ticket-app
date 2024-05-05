import styles from './TransferPanel.module.css'

export default function TransferPanel() {
return (
    <div className={styles["transfer-panel"]}>
        <p className={styles["heading"]}>Количество пересадок</p>
        <form className={styles["transfer"]}>
            <div className={styles["field"]}>
                   <label className={styles["check"]}>
                <input className={styles["check__input"]} type='checkbox' name='transfers' value='Все'/>
                 <span className={styles["check__box"]}></span>
                Все
            </label>
            </div>
         <div className={styles["field"]}>
              <label className={styles["check"]}>
                <input className={styles["check__input"]} type='checkbox' name='transfers' value='Без пересадок'/>
                <span className={styles["check__box"]}></span>
                Без пересадок
            </label>
         </div>
           <div className={styles["field"]}>
                <label className={styles["check"]}>
                <input className={styles["check__input"]} type='checkbox' name='transfers' value='1 пересадка'/>
                      <span className={styles["check__box"]}></span>
                1 пересадка
            </label>
           </div>
         <div className={styles["field"]}> 
          <label className={styles["check"]}>
                <input className={styles["check__input"]} type='checkbox' name='transfers' value='2 пересадки'/>
                      <span className={styles["check__box"]}></span>
                2 пересадки
            </label></div>
           <div className={styles["field"]}>
               <label className={styles["check"]}>
                <input className={styles["check__input"]} type='checkbox' name='transfers' value='3 пересадки'/>
                      <span className={styles["check__box"]}></span>
                3 пересадки
            </label>
           </div>
          
        </form>
        </div>
)
}