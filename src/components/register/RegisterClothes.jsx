import "./RegisterClothes.scss";
import "./Register.scss";
import "./RegisterStage.scss";
import "./RegisterInput.scss";
import { useEffect, useRef, useState } from "react";
import React from "react";
// import { CSSTransition } from 'react-transition-group';
import { Transition } from "react-transition-group";
const RegisterClothes = React.memo(function RegisterClothes(props) {
  const clothesMenuHeader = {
    torso: [
      {
        id: 0,
        ref: useRef(null),
        name: ["Голый", "Мужчина 1"],
        img: "naked_man_1.png",
      },
      {
        id: 1,
        ref: useRef(null),
        name: ["Голый", "Мужчина 2"],
        img: "naked_man_1.png",
      },
      {
        id: 2,
        ref: useRef(null),
        name: ["Голый", "Мужчина 3"],
        img: "naked_man_1.png",
      },
      {
        id: 3,
        ref: useRef(null),
        name: ["Голый", "Мужчина 4"],
        img: "naked_man_1.png",
      },
      {
        id: 4,
        ref: useRef(null),
        name: ["Голый", "Мужчина 5"],
        img: "naked_man_1.png",
      },
      {
        id: 5,
        ref: useRef(null),
        name: ["Голый", "Мужчина 6"],
        img: "naked_man_1.png",
      },
    ],
    head: [
      {
        id: 0,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 1,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 2,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 3,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 4,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 5,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 6,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 7,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 8,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 9,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 10,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 11,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 12,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
    ],
    undershit: [
      {
        id: 0,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 1,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 2,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 3,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
    ],
    pants: [
      {
        id: 0,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 1,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 2,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 3,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
    ],
    shoes: [
      {
        id: 0,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 1,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 2,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
      {
        id: 3,
        ref: useRef(null),
        name: ["Прическа", "Мужчины"],
        img: "head_man_1.png",
      },
    ],
  };

  // useEffect(() => {
  // 	Object.entries(clothesMenuHeader).forEach((value, index, array) => {
  // 		value[1].forEach((value, index, array) => {
  // 			console.log(value.ref.current);
  // 		})
  // 	})
  // }, [])

  const [blockMainButton, setBlockMainButton] = useState(false);
  const [blockGenerateButton, setBlockGenerateButton] = useState(false);

  const onClothesMouse = (event) => {
    if (!blockGenerateButton && !blockMainButton) {
      const classItem =
        props.clothesSelect === "torso"
          ? "register__clothes__torso__item"
          : "register__clothes__other__item";

      if (event.type === "mouseout") {
        if (
          event.target.closest(`.${classItem}`) !== undefined &&
          event.target
            .closest(`.${classItem}`)
            .classList.contains("active_item")
        ) {
          event.target.closest(`.${classItem}`).classList.remove("active_item");
        }
      } else if (event.type === "mouseover") {
        if (
          event.target.closest(`.${classItem}`) !== undefined &&
          !event.target
            .closest(`.${classItem}`)
            .classList.contains("active_item") &&
          !event.target
            .closest(`.${classItem}`)
            .classList.contains("select_item")
        ) {
          event.target.closest(`.${classItem}`).classList.add("active_item");
        }
      }
    }
  };

  const onClothesTorsoClick = (event, type) => {
    if (!blockGenerateButton && !blockMainButton) {
      let result;

      if (!type) {
        event.preventDefault();
        result = clothesMenuHeader[props.clothesSelect].find(
          (item) =>
            event.target.closest(
              `${
                props.clothesSelect === "torso"
                  ? ".register__clothes__torso__item"
                  : ".register__clothes__other__item"
              }`
            ) === item.ref.current
        );
      } else {
        // console.log(event);
        result = clothesMenuHeader[props.clothesSelect].find(
          (item) =>
            event.closest(
              `${
                props.clothesSelect === "torso"
                  ? ".register__clothes__torso__item"
                  : ".register__clothes__other__item"
              }`
            ) === item.ref.current
        );
      }

      if (result) {
        if (
          result.ref.current.classList.contains("active_item") ||
          (!result.ref.current.classList.contains("active_item") && type === 1)
        ) {
          const clothesMenuID = props.clothesMenu[props.clothesSelect];

          if (props.clothesActive[clothesMenuID.id] !== null) {
            clothesMenuHeader[clothesMenuID.id][
              props.clothesActive[clothesMenuID.id]
            ].ref.current.classList.remove("select_item");
          }

          result.ref.current.classList.remove("active_item");
          result.ref.current.classList.add("select_item");

          props.setClothesActive((previousState) => {
            return { ...previousState, [clothesMenuID.id]: result.id };
          });
        }
      }
    }
  };

  const clothesHeaderRef = useRef(null);

  const onRegisterClothesWheel = (event) => {
    clothesHeaderRef.current.scrollTo({
      top: 0,
      left: clothesHeaderRef.current.scrollLeft + event.deltaY,
      behavior: "smooth",
    });
  };

  const onClickRegisterGenerateHandler = (event) => {
    event.preventDefault();
    if (!blockGenerateButton && !blockMainButton) {
      setBlockGenerateButton(true);

      let promise = Promise.resolve();

      Object.entries(props.clothesActive).forEach((value) => {
        promise = promise.then(async () => {
          const random_generate = Math.floor(
            Math.random() * clothesMenuHeader[value[0]].length
          );

          if (value[0] === "torso" && props.clothesActive[value[0]] !== null) {
            // За сколько времени будет скролл к обьекту
            setTimeout(async () => {
              await clothesMenuHeader[value[0]][
                props.clothesActive[value[0]]
              ].ref.current.scrollIntoView({
                inline: "center",
                behavior: "smooth",
              });
            }, 500);
          }

          props.setClothesSelect(props.clothesMenu[value[0]].id);

          setTimeout(async () => {
            if (value[0] === "torso") {
              setTimeout(async () => {
                // За сколько времени проскролимся до нового обьекта
                await clothesMenuHeader[value[0]][
                  random_generate
                ].ref.current.scrollIntoView({
                  inline: "center",
                  behavior: "smooth",
                });
              }, 250);
            }
            await props.setClothesActive((previousState) => {
              return {
                ...previousState,
                [value[0]]: clothesMenuHeader[value[0]][random_generate].id,
              };
            });
          }, 800);

          return new Promise((resolve) => {
            setTimeout(resolve, 2000);
          });
        });
      });

      promise.then(() => {
        setBlockGenerateButton(false);
      });
    }
  };

  const clothesButtonClick = (event) => {
    event.preventDefault();

    if (
      props.clothesMenu[event.target.id] !== undefined &&
      props.clothesSelect !== props.clothesMenu[event.target.id]["id"] &&
      !blockGenerateButton &&
      !blockMainButton
    ) {
      const activeMenu = props.clothesMenu[event.target.id]["id"];
      console.log(activeMenu);
      props.setClothesSelect(activeMenu);

      if (props.clothesActive[activeMenu] !== null) {
        setTimeout(() => {
          clothesMenuHeader[activeMenu][
            props.clothesActive[activeMenu]
          ].ref.current.scrollIntoView({
            inline: "center",
            behavior: "smooth",
          });
        }, 150);
      }
    }
  };

  const [errorValidation, setErrorValidation] = useState(false);
  // const [errorTransition, setErrorTransition] = useState(true);

  const onClothesButtonFinal = (event) => {
    event.preventDefault();

    if (!blockGenerateButton && !blockMainButton) {
      if (errorValidation) return;

      const clothesActiveArray = Object.entries(props.clothesActive);

      const result = clothesActiveArray.find((item) => item[1] === null);
      if (result) {
        props.setClothesSelect(result[0]);

        return setTimeout(() => {
          return setErrorValidation(true);
        }, 350);
      }

      setBlockMainButton(true);
      props.setValue((previousState) => {
        return {
          ...previousState,
          torso: props.clothesActive.torso,
          head: props.clothesActive.head,
          undershit: props.clothesActive.undershit,
          pants: props.clothesActive.pants,
          shoes: props.clothesActive.shoes,
        };
      });

      let promise = Promise.resolve();

      Object.entries(props.clothesActive).forEach((value) => {
        promise = promise.then(() => {
          props.setClothesSelect(value[0]);

          setTimeout(() => {
            clothesMenuHeader[value[0]][
              props.clothesActive[value[0]]
            ].ref.current.scrollIntoView({
              behavior: "smooth",
              inline: "center",
            });

            setTimeout(() => {
              if (props.clothesActive[value[0]] !== null) {
                clothesMenuHeader[value[0]][
                  props.clothesActive[value[0]]
                ].ref.current.classList.replace("select_item", "success_item");

                return (props.value[value[0]] = props.clothesActive[value[0]]);
              }
            }, 150);
          }, 200);

          return new Promise((resolve) => {
            setTimeout(resolve, 1400);
          });
        });
      });

      promise.then(() => {
        setTimeout(() => {
          setBlockMainButton(false);
          props.setLoaderVisible(false);
          setTimeout(() => {
            const valid_data = Object.entries(props.value).find(
              (value) =>
                (value[1] === "" && value[0] !== "referal") || value[1] === null
            );

            cef.emit("game:hud:setComponentVisible", "interface", true);
			cef.emit("game:hud:setComponentVisible", "radar", true);
			
            if (valid_data)
              return cef.emit(
                "register:exit",
                "возвращены пустые данные для регистрации"
              );
            else {
              // console.log({ value: JSON.stringify(props.value), keys: Object.keys(props.value) });
              return cef.emit(
                "register:input",
                JSON.stringify(props.value)
                // JSON.stringify(props.value),
                // Object.keys(props.value).toString()
              );
            }
          }, 1000);
        }, 500);
      });
    }
  };

  const errorRef = useRef(null);

  return (
    <div
      ref={props.stepMainRef}
      className={`register__clothes__block__${props.stepState}`}
    >
      <main className="register__main register__main__wdth">
        <ul className="register__main__title clothes">
          <li className="register__main__list__text">{props.parent_text}</li>
          <li className="register__main__list__text register__main__list__text__secondary">
            {props.children_text}
          </li>
        </ul>

        <menu className="register__clothes__menu">
          {Object.entries(props.clothesMenu).map((value) => {
            return (
              <button
                id={value[1].id}
                onClick={clothesButtonClick}
                type="button"
                ref={value[1].ref}
                key={value[1].id}
                className={
                  "register__clothes__menu__children" +
                  (props.clothesSelect === value[1].id ? " active" : "")
                }
                value={value[1].name}
              >
                {value[1].name}
              </button>
            );
          })}
        </menu>

        <div className="register__main__line clothes"></div>
      </main>

      <div
        className={`register__clothes__bgheader`}
        style={
          props.clothesSelect === "torso"
            ? {
                "--template-columns":
                  clothesMenuHeader[props.clothesSelect].length,
              }
            : null
        }
        onWheel={onRegisterClothesWheel}
      >
        <Transition
          in={errorValidation}
          timeout={1000}
          nodeRef={errorRef}
          out={errorValidation}
          mountOnEnter
          unmountOnExit
          onEnter={() => {
            return setTimeout(() => {
              return setErrorValidation(false);
            }, 2350);
          }}
        >
          {(state) => {
            return (
              <div
                ref={errorRef}
                className={`register__clothes__error__header ${state}`}
              >
                <div className="register__clothes__error__bg-icon">
                  <svg
                    preserveAspectRatio={"none"}
                    viewBox="0 0 154 154"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M89.2996 76L113.036 52.1089C116.488 48.6338 116.488 43.4212 113.036 39.9461C111.741 38.2085 109.583 36.9054 107.425 36.9054C105.267 36.9054 103.11 37.7742 101.383 39.5117L77.2158 63.8373L53.4797 39.9461C50.0272 36.471 44.4169 36.471 41.3959 39.9461C39.6697 41.2492 38.375 43.4212 38.375 46.0275C38.375 48.6338 39.2381 50.3713 40.9644 52.1089L64.7004 76L40.9644 99.8912C39.6697 101.629 38.375 103.801 38.375 106.407C38.375 108.579 39.2381 110.751 40.9644 112.488C42.6906 114.226 44.8485 115.095 47.0063 115.095C49.1641 115.095 51.3219 114.226 53.0482 112.488L76.7842 88.5972L100.52 112.488C103.973 115.963 109.583 115.963 112.604 112.488C116.057 109.013 116.057 103.366 112.604 100.326L89.2996 76Z"
                      fill="#FF6A6A"
                    />
                  </svg>
                </div>

                <div className="register__clothes__error__text-header">
                  <p className="register__clothes__error__text">
                    Выберите{" "}
                    {props.clothesSelect === "torso"
                      ? "тело"
                      : props.clothesMenu[props.clothesSelect].name_rd}{" "}
                    для вашего персонажа
                  </p>
                  <p className="register__clothes__error__text children">
                    После выбора нажмите ещё раз на кнопку
                  </p>
                </div>
              </div>
            );
          }}
        </Transition>

        <div
          ref={clothesHeaderRef}
          className={`register__clothes__main__header ${props.clothesSelect}`}
        >
          {props.clothesSelect === props.clothesMenu.torso.id ? (
            clothesMenuHeader[props.clothesSelect].map((value) => {
              return (
                <li
                  key={`key_clothes_torso_${value.id + 1}`}
                  tabIndex={value.id}
                  ref={value.ref}
                  id={`item_torso_${value.id + 1}`}
                  onClick={onClothesTorsoClick}
                  onMouseOut={onClothesMouse}
                  onMouseOver={onClothesMouse}
                  className={`register__clothes__torso__item ${
                    props.clothesActive[props.clothesSelect] === value.id
                      ? `select_item`
                      : ""
                  }`}
                >
                  <div className="register__clothes__torso__bgtext">
                    <ul className="register__clothes__item__parent__text">
                      <p className="register__clothes__item__children__text">
                        {value.name[0]}
                      </p>
                      <p className="register__clothes__item__children__text active_text">
                        {value.name[1]}
                      </p>
                    </ul>
                  </div>
                  <img
                    src={`/register/${value.img}`}
                    className="register__clothes__torso__img"
                  />
                </li>
              );
            })
          ) : (
            <ul className="register__clothes__other__grid" tabIndex={5}>
              {clothesMenuHeader[props.clothesSelect].map((value) => {
                return (
                  <li
                    key={`key_clothes_${props.clothesSelect}_${value.id + 1}`}
                    tabIndex={value.id}
                    ref={value.ref}
                    id={`item__${props.clothesSelect}__${value.id + 1}`}
                    onMouseOut={onClothesMouse}
                    onMouseOver={onClothesMouse}
                    onClick={onClothesTorsoClick}
                    className={`register__clothes__other__item ${
                      props.clothesActive[props.clothesSelect] === value.id
                        ? "select_item"
                        : ""
                    }`}
                  >
                    <img
                      src={`/register/${value.img}`}
                      className="register__clothes__other__item__img"
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="register__clothes__buttons">
        <button
          type="button"
          onClick={onClothesButtonFinal}
          className="register__input__button clothes"
        >
          Завершить
        </button>
        <button
          type="button"
          onClick={onClickRegisterGenerateHandler}
          className="register__generate__button"
        >
          Сгенерировать
        </button>
      </div>

      <footer className="register__footer clothes">
        <div className="register__footer__icon">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 66 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 0C2.68629 0 0 2.68629 0 6V27C0 30.3137 2.68629 33 6 33H60C63.3137 33 66 30.3137 66 27V6C66 2.68629 63.3137 0 60 0H6ZM27.924 19.6693H24.26V17.1893H27.444V15.1093H24.26V12.7893H27.764V10.6293H21.988V21.8293H27.924V19.6693ZM28.7844 18.5653C28.7844 20.8213 30.1284 22.0533 32.2564 22.0533C34.4804 22.0533 35.7764 20.7093 35.7764 18.8693C35.7764 16.7733 34.2415 15.8699 32.975 15.1245C32.0855 14.601 31.3284 14.1554 31.3284 13.4293C31.3284 12.9173 31.6804 12.5973 32.2724 12.5973C32.9284 12.5973 33.2644 12.9653 33.2644 13.7013H35.6004C35.6004 11.6373 34.3524 10.4053 32.2884 10.4053C30.2244 10.4053 29.0244 11.6533 29.0244 13.3653C29.0244 15.3262 30.4758 16.233 31.7083 17.003C32.6179 17.5713 33.4084 18.0652 33.4084 18.8533C33.4084 19.4133 33.0404 19.8453 32.2884 19.8453C31.5684 19.8453 31.1204 19.4613 31.1204 18.5653H28.7844ZM36.8086 18.4053C36.8086 20.7573 38.0886 22.0213 40.2646 22.0213C42.5366 22.0213 43.8326 20.7573 43.8806 18.4053H41.6086C41.5446 19.3973 41.1446 19.8133 40.2646 19.8133C39.5606 19.8133 39.1766 19.3653 39.1766 18.4053V14.0533C39.1766 13.0613 39.5766 12.6133 40.2646 12.6133C41.1286 12.6133 41.5126 13.0293 41.5766 14.0533H43.8486C43.7686 11.6853 42.5206 10.4053 40.2806 10.4053C38.0886 10.4053 36.8086 11.6853 36.8086 14.0533V18.4053Z"
              fill="url(#paint0_linear_232_7)"
              fillOpacity="0.35"
            />
            <defs>
              <linearGradient
                id="paint0_linear_232_7"
                x1="0"
                y1="0"
                x2="66"
                y2="33"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="register__footer__description clothes">
          Нажмите клавишу чтобы вернуться на второй этап обратно
        </div>
      </footer>
    </div>
  );
});
export default RegisterClothes;
