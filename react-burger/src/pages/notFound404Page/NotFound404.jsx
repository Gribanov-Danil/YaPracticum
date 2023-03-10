import {useNavigate} from "react-router-dom";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './404styles.module.css'

export const NotFound404 = () => {
    const navigate = useNavigate()
    const onClick = () => navigate('/', { replace: true })
    return (
            <div className={`${styles.container} mt-20`}>
                <div className={styles.content}>
                    <h1 className={`text text_type_main-large mb-2`}>Упс! Ошибка 404</h1>
                    <p className={`mb-10 text text_type_main-medium`}>Данной страницы не существует ¯\_(ツ)_/¯</p>
                    <p className={`text text_type_main-default`}>Проверьте адресс или вернитесь на&nbsp;
                        <Button onClick={onClick} htmlType="button" type="secondary" size="medium" extraClass={styles.btn}>
                            главную страницу
                        </Button>
                    </p>
                </div>
            </div>
    )
}