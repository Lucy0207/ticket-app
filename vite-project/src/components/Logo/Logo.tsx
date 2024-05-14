import styles from "./Logo.module.css"
export default function Logo() {
    return (
        <div className={styles["logo"]}>
            <img src="/Logo.png" alt="a company logo"/>
        </div>
    )
}