import { Typography } from "@alfalab/core-components/typography";
import cool from "../assets/cool.png";
import { thxSt } from "./style.css";

export const ThankYou = () => (
    <>
        <div className={thxSt.container}>
            <img
                alt="Картинка смайлика"
                src={cool}
                className={thxSt.rocket}
                width={200}
            />
            <Typography.TitleResponsive
                font="system"
                tag="h1"
                view="medium"
                defaultMargins={false}
                weight="bold"
                className={thxSt.title}
            >
                Спасибо!
            </Typography.TitleResponsive>
            <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
                Мы получили ваши данные. Если тестирование будет открыто, мы расскажем,
                как присоединиться.
            </Typography.Text>
        </div>
    </>
);
