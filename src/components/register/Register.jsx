import "./Register.scss";
import "./RegisterStage.scss";
import "./RegisterNotif.scss";
import RegisterStage from "./RegisterStage";
import { useState, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";
import Main from "./RegisterMain";
import RegisterClothes from "./RegisterClothes";
import RegisterOther from "./RegisterOther";

export default function Register() {
  const help_text_array = [
    "На нашем проекте вы можете создать свою частную компанию",
    "На нашем проекте присутствует кастомная система одежды для персонажа",
    "Наши системы полностью динамические, и все зависит только от игроков",
  ];

  const [helpText, setHelpText] = useState({
    index: 0,
    text: help_text_array[0],
  });
  const [key, setKey] = useState(Math.random());

  const [regStep, setRegStep] = useState(1);

  const [serverInfo, setServerInfo] = useState({
    server: "Неизвестен",
    online: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setHelpText((previousState) => {
        setKey(Math.random());

        if (previousState.index === help_text_array.length - 1) {
          return { ...previousState, text: help_text_array[0], index: 0 };
        } else {
          return {
            ...previousState,
            text: help_text_array[previousState.index + 1],
            index: previousState.index + 1,
          };
        }
      });
    }, 15000);
    return () => {
      clearInterval(interval);
    };
  }, [helpText]);

  const [value, setValue] = useState({
    nick: "",
    email: "",
    password: "",
    referal: "",
    sex: null,
    torso: null,
    head: null,
    undershit: null,
    pants: null,
    shoes: null,
  });

  const [error, setError] = useState({
    nick: false,
    email: false,
    password: false,
    referal: false,
  });

  const [notif, setNotif] = useState(false);

  const [loaderVisible, setLoaderVisible] = useState(false);
  const loaderRef = useRef(null);

  const [stepMainState, setStepMainState] = useState(true);
  const stepMainRef = useRef(null);

  const [updateStateStage, setUpdateStateStage] = useState({
    main: false,
    refs: false,
    clothes: false,
  });

  useEffect(() => {
    const onPageLoad = () => {
      setLoaderVisible(true);
	  cef.emit("game:hud:setComponentVisible", "interface", false);
	  cef.emit("game:hud:setComponentVisible", "radar", false);

      cef.emit("register:initial");
	  cef.on("register:initial_item", (server, online) => {
		setServerInfo((prevState) => {
		  return { ...prevState, server, online };
		});
	  });
      cef.set_focus(true);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const clothesMenu = {
    torso: {
      id_number: 0,
      id: "torso",
      name: "Тело",
      name_rd: "тело",
      ref: useRef(null),
    },
    head: {
      id_number: 1,
      id: "head",
      name: "Прическа",
      name_rd: "прическу",
      ref: useRef(null),
    },
    undershit: {
      id_number: 2,
      id: "undershit",
      name: "Майка",
      name_rd: "майку",
      ref: useRef(null),
    },
    pants: {
      id_number: 3,
      id: "pants",
      name: "Штаны",
      name_rd: "штаны",
      ref: useRef(null),
    },
    shoes: {
      id_number: 4,
      id: "shoes",
      name: "Обувь",
      name_rd: "обувь",
      ref: useRef(null),
    },
  };

  const [clothesActive, setClothesActive] = useState({
    torso: null,
    head: null,
    undershit: null,
    pants: null,
    shoes: null,
  });

  const [registerStageStatus, setRegisterStageStatus] = useState([
    {
      point: "active",
      line: null,
    },
    {
      point: null,
      line: null,
    },
    {
      point: null,
      line: null,
    },
  ]);

  const Refs = {
    svgRef: {
      nick: useRef(null),
      email: useRef(null),
      password: useRef(null),
      referal: useRef(null),
    },
    boxDownRef: {
      nick: useRef(null),
      email: useRef(null),
      password: useRef(null),
      referal: useRef(null),
    },
    boxRef: {
      nick: useRef(null),
      email: useRef(null),
      password: useRef(null),
      referal: useRef(null),
    },
    mainRef: {
      nick: useRef(null),
      email: useRef(null),
      password: useRef(null),
      referal: useRef(null),
    },
  };
  const [readOnly, setReadOnly] = useState(false);
  const [classButton, setClassButton] = useState("register__input__button");
  const buttonRef = useRef(null);

  const registerStageRef = {
    main: useRef(null),
    refs: useRef(null),
    clothes: useRef(null),
  };

  const [clothesSelect, setClothesSelect] = useState(clothesMenu.torso.id);

  const ListRegister = (id_list, stepState) => {
    switch (id_list) {
      case 1:
        return (
          <Main
            key_id={key}
            error={error}
            setError={setError}
            classButton={classButton}
            setClassButton={setClassButton}
            buttonRef={buttonRef}
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            Refs={Refs}
            updateStateStage={updateStateStage}
            setUpdateStateStage={setUpdateStateStage}
            setRegisterStageStatus={setRegisterStageStatus}
            setStepMainState={setStepMainState}
            stepState={stepState}
            stepMainRef={stepMainRef}
            stepMainState={stepMainState}
            parent_text={"РЕГИСТРАЦИЯ"}
            children_text={"АККАУНТА"}
            onValue={value}
            onSetValue={setValue}
            setNotif={setNotif}
            setRegStep={setRegStep}
            setLoaderVisible={setLoaderVisible}
            type={"register"}
            helpText={helpText.text}
          />
        );
      case 2:
        return (
          <RegisterOther
            error={error}
            setError={setError}
            stepMainRef={stepMainRef}
            stepState={stepState}
            Refs={Refs}
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            buttonRef={buttonRef}
            classButton={classButton}
            setClassButton={setClassButton}
            onValue={value}
            onSetValue={setValue}
            parent_text={"ПРОЧАЯ"}
            children_text={"ИНФОРМАЦИЯ"}
            setRegStep={setRegStep}
            setRegisterStageStatus={setRegisterStageStatus}
            setUpdateStateStage={setUpdateStateStage}
            setStepMainState={setStepMainState}
            key_id={key}
            helpText={helpText.text}
          />
        );
      case 3:
        return (
          <RegisterClothes
            stepMainRef={stepMainRef}
            stepState={stepState}
            parent_text={"ВЫБЕРИТЕ"}
            children_text={"ВНЕШНОСТЬ"}
            clothesMenu={clothesMenu}
            clothesSelect={clothesSelect}
            value={value}
            setValue={setValue}
            clothesActive={clothesActive}
            setClothesActive={setClothesActive}
            setClothesSelect={setClothesSelect}
            setLoaderVisible={setLoaderVisible}
          />
        );
    }
  };

  return (
    <div className="register__temp__image">
      <Transition
        nodeRef={loaderRef}
        in={loaderVisible}
        out={loaderVisible}
        timeout={1000}
        onExited={() => {
          return setLoaderVisible(false);
        }}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return (
            <div ref={loaderRef} className={`register__background ${state}`}>
              <RegisterStage
                setRegStep={setRegStep}
                regStep={regStep}
                registerStageRef={registerStageRef}
                updateStateStage={updateStateStage}
                registerStageStatus={registerStageStatus}
                setRegisterStageStatus={setStepMainState}
                setUpdateStateStage={setUpdateStateStage}
              />

              <div className="register__elipse__parent">
                <img
                  src="../../../register/pattern_register.png"
                  className="register__elipse__pattern"
                />
              </div>

              {notif ? (
                <div className="register__notif__block">
                  <div className="register__notif__box">
                    <div className="register__notif__svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        width="273"
                        height="273"
                        viewBox="0 0 273 273"
                        fill="none"
                      >
                        <g filter="url(#filter0_d_295_6)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M136.5 218C89.2797 218 51 179.72 51 132.5C51 85.2797 89.2797 47 136.5 47C183.72 47 222 85.2797 222 132.5C222 179.72 183.72 218 136.5 218ZM45 132.5C45 81.9659 85.9659 41 136.5 41C187.034 41 228 81.9659 228 132.5C228 183.034 187.034 224 136.5 224C85.9659 224 45 183.034 45 132.5ZM70.2412 132.5C70.2412 95.9064 99.9062 66.2415 136.5 66.2415C173.093 66.2415 202.758 95.9064 202.758 132.5C202.758 169.094 173.093 198.759 136.5 198.759C99.9062 198.759 70.2412 169.094 70.2412 132.5ZM162.641 97.7932L124.696 136.7L110.359 121.999L95.4826 137.253L109.82 151.954L124.696 167.207L139.572 151.954L177.517 113.046L162.641 97.7932Z"
                            fill="#67FF9B"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_295_6"
                            x="0"
                            y="0"
                            width="273"
                            height="273"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="22.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.403922 0 0 0 0 1 0 0 0 0 0.607843 0 0 0 0.35 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_295_6"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_295_6"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>

                    <ul className="register__notif__parent__text">
                      <li className="register__notif__children__text">
                        ПЕРВЫЙ
                      </li>
                      <li className="register__notif__children__text register__notif__children__text__active">
                        ЭТАП
                      </li>
                      <li className="register__notif__children__text">
                        ПРОЙДЕН
                      </li>
                    </ul>

                    <span className="register__notif__description">
                      <p className="register__notif__description__text">
                        Сейчас вас перенаправит система на этап для выбора
                        внешности
                      </p>

                      <span className="register__notif__loading__other">
                        <div className="register__notif__loading__head"></div>
                      </span>
                    </span>
                  </div>
                </div>
              ) : null}

              <div
                className={
                  "register__owner__block" +
                  (regStep == 1 ? "" : " register__owner__block__clothes")
                }
              >
                <header className="register__header">
                  <div className="register__header__main__project">
                    <div className="register__header__logo__and__text">
                      <ul className="register__header__list__name">
                        <li className="register__header__list__text">THE</li>
                        <li className="register__header__list__text register__header__list__text__opacity">
                          CEREZO
                        </li>
                      </ul>
                    </div>

                    <div className="register__header__text">
                      <ul className="register__header__server__ul">
                        <li className="register__header__server__li">
                          Сервер:
                        </li>
                        <li className="register__header__server__li register__header__server__li__children">
                          {serverInfo.server}
                        </li>
                      </ul>

                      <ul className="register__header__server__ul">
                        <li className="register__header__server__li">
                          Онлайн:
                        </li>
                        <li className="register__header__server__li register__header__server__li__children">
                          {serverInfo.online} чел.
                        </li>
                      </ul>
                    </div>
                  </div>
                </header>

                <Transition
                  timeout={1000}
                  nodeRef={stepMainRef}
                  in={stepMainState}
                  out={stepMainState}
                  mountOnEnter
                  unmountOnExit
                >
                  {(state) => {
                    return ListRegister(regStep, state);
                  }}
                </Transition>
              </div>
            </div>
          );
        }}
      </Transition>
    </div>
  );
}
