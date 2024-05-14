import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import styles from "./Filters.module.css"
import { AppDispatcher, RootState } from "../../store/store";
import { filterAction } from "../../store/filter.slice";

export default function Filters() {
  const filterOptions = [
    { value: "cheap", label: "самый дешевый" },
    { value: "fast", label: "самый быстрый" },
    { value: "optimum", label: "оптимальный" },
  ];

  const dispatch = useDispatch<AppDispatcher>()
  const filter = useSelector((s: RootState) => s.filters.filter)


 function handleFilterClick(filter: string) {
    dispatch(filterAction.setFilter(filter));
   
  }

    return (
      <ul className={styles["filters"]}>
        {filterOptions.map((option) => (
          <li key={option.value}>
              <Button
            className={filter === option.value ? styles["clicked"] : styles["inactiveFilter"]}
              onClick={() => handleFilterClick(option.value)}>
                {option.label}
                </Button>
          </li>
        ))}
      </ul>

    )
}