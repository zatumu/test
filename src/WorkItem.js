import * as styles from "./WorkItem.module.css";

const Workitem = (props) =>{
    const {title,roles} = props.work;
    return(
        <div className={styles.container}>
            <div className={styles.thubnail}>
                <img src="./work.png" alt="{title}"/>
            </div>
            <div className="styles title">{title}</div>
            <div className={styles.roles}>
                {roles.join(", ")}
            </div>
        </div>
    );
};

export default Workitem;