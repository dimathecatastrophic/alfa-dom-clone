import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import { useState } from "react";

import himka from "./assets/himka.png";
import buysell from "./assets/buysell.png";
import rent from "./assets/rent.png";
import mortgage from "./assets/mortgage.png";
import remont from "./assets/remont.png";
import consult from "./assets/consult.png";
import security from "./assets/security.png";

import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { BottomSheet } from "@alfalab/core-components/bottom-sheet";
import { ThxLayout } from "./thx/ThxLayout.tsx";
import { LS, LSKeys } from "./ls";
import {sendDataToGAServices} from "./utils/events.ts";
import {ThankYou} from "./ThankYou/ThankYou.tsx";

interface Service {
  title: string;
  description: string;
  image: string;
  modalTitle: string;
  modalText: string[];
}

const services: Array<Service> =
    [
      {
          id: 'everyday_service',
        title: "Сервисы на каждый день",
        description: "Клининг, химчистка, доставка продуктов, помощь в быту",
        image: himka,
        modalTitle: "Сервисы на каждый день",
        modalText: [
          "Вы сможете выбрать нужную услугу, указать удобное время её выполнения, оставить комментарии к заказу и отслеживать его статус. По завершении работы вы сможете оценить качество выполненной услуги.",
        ],
      },
      {
          id: 'buy_sale_aparts',
        title: "Покупка-продажа жилья",
        description: "Полный цикл сделок с жилой недвижимостью",
        image: buysell,
        modalTitle: "Покупка-продажа жилья",
        modalText: [
          "Вы сможете искать объекты недвижимости для покупки или размещать объявления о продаже, получать уведомления о новых предложениях, сравнивать цены, вести переписку с контрагентами, а также заказывать проверку документов\n" +
          "перед совершением сделки."
        ],
      },
      {
          id: 'arenda',
        title: "Аренда",
        description: "Удобные решения для сдачи и аренды жилья",
        image: rent,
        modalTitle: "Аренда",
        modalText: [
            "Вы сможете размещать свои предложения об аренде или искать подходящие варианты для съёма жилья. Будет доступна возможность бронирования объекта онлайн, заключения договора аренды и оплаты депозита."
        ],
      },
      {
          id: 'remont',
        title: "Все для ремонта",
        description: "Дизайн-проект, консультации экспертов, кредитование",
        image: remont,
        modalTitle: "Все для ремонта",
        modalText: [
          "Вы сможете заказать дизайн-проект, выбрать дизайнера и проверенную ремонтную бригаду, оформить кредит на ремонт прямо в приложении, купить необходимые материалы и оборудование для ремонта и отслеживать ход выполняемых работ."
        ],
      },
      {
          id: 'ipoteka',
        title: "Ипотека",
        description: "Оформление ипотеки и консультации",
        image: mortgage,
        modalTitle: "Ипотека",
        modalText: [
            "Вы сможете получить консультацию экспертов по любым вопросам, связанным с ипотекой, выбрать подходящую вам ипотечеую программу и подать заявку, а также оформить страхование ипотеки, снять обременение и получать информацию о мерах гос.поддержки."
        ],
      },
      {
          id: 'consultation',
        title: "Консультации экспертов",
        description: "Юристы и фин. консультанты ответят на ваши вопросы",
        image: consult,
        modalTitle: "Консультации экспертов",
        modalText: [
            "Вам будет доступен список экспертов с их рейтингами и отзывами, возможность записаться на консультацию в удобное для вас время, вести историю всех ваших консультаций и получать рекомендации по дальнейшим шагам."
        ],
      },
      {
          id: "safety_management",
        title: "Безопасность и управление",
        description: "Страхование, голосования жильцов, общение с УК",
        image: security,
        modalTitle: "Безопасность и управление",
        modalText: [
          "Вам будет доступно участие в электронных голосованиях, подачи заявок в УК с возможностью прикреплять фотографии и документы, оформления страховых полисов онлайн и получения уведомлений о статусе обработки ваших запросов."
        ],
      },
    ]
        // поставить услуги в рандомный порядок
        .map(v => ({ v, r: Math.random() })).sort((a, b) => a.r - b.r).map(({ v }) => v);

const HALF_WITH_COUNT = 0;
const MAX_SERVICES = 4;

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedItems, setSelectedItems] = useState<Array<Service | null>>([]);
  const [isContactsFormVisible, setIsContactsFormVisible] = useState(false);

  const submit = () => {
    setLoading(true);
    Promise.resolve().then(() => {
        const emptyObj = {everyday_service: '0', remont: '0', arenda: '0', ipoteka: "0", safety_management: "0", buy_sale_aparts: "0", consultation: "0"}
        // @ts-ignore
        const result = selectedItems.map(item => item?.id).reduce((acc, pointer) => {
            acc[pointer] = "1";
            return acc;
        }, {});

        sendDataToGAServices({ ...emptyObj, ...result }).then(() => {
            setLoading(false);
            setIsContactsFormVisible(true);
        });
    });
  };

    if (thxShow) {
        return <ThankYou />;
    }

  if (isContactsFormVisible) {
    // @ts-ignore
    return <ThxLayout selectedItems={selectedItems} handleThx={() => setThx(true)} />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Gap size={16} />
        <div className={appSt.box}>
          <Typography.TitleResponsive
            tag="h1"
            view="large"
            font="system"
            weight="bold"
          >
            Альфа-Дом
          </Typography.TitleResponsive>

          <Gap size={8} />

            <Typography.Text
                view="primary-medium"
                style={{ textAlign: "center", fontWeight: "light", color: "#7F7F83" }}
            >
                Полезные сервисы для дома
            </Typography.Text>

          <Gap size={16} />

          <Typography.Text
            view="primary-medium"
            color="primary"
            style={{ textAlign: "center" }}
          >
            Выберите услуги, которыми хотите воспользоваться на выгодных
            условиях следующие 6 месяцев
          </Typography.Text>
        </div>

        <Gap size={32} />

        {services.length && (
          <div className={appSt.products}>
            {services.map((item, index) => {
              return (
                <div
                  key={item.title}
                  onClick={() => {
                    setSelectedService(item);
                    setIsModalVisible(true);
                  }}
                  className={appSt.product}
                  style={{
                    ...(index >= HALF_WITH_COUNT && {
                      maxWidth: "100%",
                      flex: "1 1 100%",
                    }),
                    ...(selectedItems.find(
                      (selectedItem) => selectedItem?.title === item.title,
                    ) && { border: "2px solid #2083D8" }),
                  }}
                >
                  <Typography.Text
                    view="primary-medium"
                    color="primary"
                    weight="bold"
                  >
                    {item.title}
                  </Typography.Text>
                  <Typography.Text
                    style={{ marginRight: "70px", lineHeight: "24px"  }}
                    weight="regular"
                  >
                    {item.description}
                  </Typography.Text>
                  <img
                    className={appSt.productIcon}
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                </div>
              );
            })}
          </div>
        )}

        <BottomSheet
          trimTitle={false}
          open={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          title={
            <Typography.TitleResponsive
              tag="h1"
              view="large"
              font="system"
              weight="bold"
            >
              {selectedService?.modalTitle}
            </Typography.TitleResponsive>
          }
        >
          {selectedService && (
            <div className={appSt.serviceContainer}>
              {selectedService.modalText.map((text, index) => (
                <Typography.Text
                  view="primary-medium"
                  color="primary"
                  key={index}
                >
                  {text}
                </Typography.Text>
              ))}
            </div>
          )}

          <Gap size={24} />

          {selectedItems.length > 0 &&
            selectedItems.find(
              (selectedItem) => selectedItem?.title === selectedService?.title,
            ) && (
              <>
                <Typography.Text
                  view="primary-medium"
                  color="secondary"
                  weight="bold"
                  style={{
                    height: "56px",
                    textAlign: "center",
                    alignContent: "center",
                  }}
                >
                  Уже выбрано
                </Typography.Text>
              </>
            )}

          {selectedItems.length < MAX_SERVICES &&
            !selectedItems.find(
              (selectedItem) => selectedItem?.title === selectedService?.title,
            ) && (
              <>
                <ButtonMobile
                  block
                  view="primary"
                  onClick={() => {
                    setSelectedItems([...selectedItems, selectedService]);
                    setIsModalVisible(false);
                  }}
                >
                  Выбрать
                </ButtonMobile>
              </>
            )}

          {selectedItems.length > 0 && (
            <>
              {selectedItems.find(
                (selectedItem) =>
                  selectedItem?.title === selectedService?.title,
              ) && (
                <ButtonMobile
                  block
                  view="primary"
                  onClick={() => {
                    setSelectedItems([
                      ...selectedItems.filter(
                        (item) => item?.title !== selectedService?.title,
                      ),
                    ]);
                    setIsModalVisible(false);
                  }}
                >
                  Отменить выбор
                </ButtonMobile>
              )}
              {selectedItems.length >= MAX_SERVICES &&
                !selectedItems.find(
                  (selectedItem) =>
                    selectedItem?.title === selectedService?.title,
                ) && (
                  <Typography.Text
                    view="primary-medium"
                    color="secondary"
                    weight="bold"
                    style={{
                      height: "56px",
                      textAlign: "center",
                      alignContent: "center",
                    }}
                  >
                    Выбрано максимум категорий
                  </Typography.Text>
                )}
            </>
          )}

          {selectedItems.length < MAX_SERVICES &&
            !selectedItems.find(
              (selectedItem) => selectedItem?.title === selectedService?.title,
            ) && (
              <ButtonMobile
                block
                view="transparent"
                size={56}
                onClick={() => setIsModalVisible(false)}
              >
                Назад
              </ButtonMobile>
            )}
        </BottomSheet>
      </div>

      <Gap size={128} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          loading={loading}
          disabled={selectedItems.length === 0}
          block
          view="primary"
          size="xl"
          hint={
              selectedItems.length === 0
                  ? `Выберите до ${MAX_SERVICES} любых категорий`
                  : "Продолжить"
          }
          onClick={submit}
        >
          {selectedItems.length} из {MAX_SERVICES} выбрано
          <br />
        </ButtonMobile>
      </div>
    </>
  );
};
