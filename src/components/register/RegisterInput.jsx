import React, { useState } from "react";
import "./RegisterInput.scss";
import RegisterInputText from "./RegisterInputText";

export default function RegisterInput(props) {
  const [loadInput, setLoadInput] = useState(false);

  function ErrorInput(selectorName) {
    switch (selectorName) {
      case "nick": {
        if (!props.error.nick) {
          props.Refs.mainRef.nick.current.classList.add(
            "register__input__main__error"
          );
          props.setError((previousState) => {
            return { ...previousState, nick: true };
          });
        }
        break;
      }
      case "email": {
        if (!props.error.email) {
          props.Refs.mainRef.email.current.classList.add(
            "register__input__main__error"
          );
          props.setError((previousState) => {
            return { ...previousState, email: true };
          });
        }
        break;
      }
      case "password": {
        if (!props.error.password) {
          props.Refs.mainRef.password.current.classList.add(
            "register__input__main__error"
          );
          props.setError((previousState) => {
            return { ...previousState, password: true };
          });
        }
        break;
      }
      case "referal": {
        if (!props.error.referal) {
          props.Refs.mainRef.referal.current.classList.add(
            "register__input__main__error"
          );
          props.setError((previousState) => {
            return { ...previousState, referal: true };
          });
        }
        break;
      }
    }

    if (
      !props.buttonRef.current.classList.contains(
        "register__input__button__shield"
      )
    ) {
      props.buttonRef.current.classList.add("register__input__button__shield");
    }
    return;
  }

  function SuccessInput(inputName) {
    if (!props.error.email && !props.error.nick && !props.error.password) {
      props.Refs["mainRef"][inputName]["current"]["classList"].add(
        "register__input__main__success"
      );
      props.setError((previousState) => {
        return { ...previousState, [inputName]: true };
      });
    }
    return;
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const result_nick = /^[a-zA-Z][a-zA-Z_]*[a-zA-Z]$/.test(props.onValue.nick);

    if (
      !result_nick ||
      props.onValue.nick.length < 6 ||
      props.onValue.nick.length > 24
    ) {
      return ErrorInput("nick");
    }

    if (
      !/^[_a-zA-Z0-9][_.a-zA-Z_0-9\-@]*(gmail.com|yandex.ru|mail.ru)$/.test(
        props.onValue.email
      ) ||
      props.onValue.email.length < 6 ||
      props.onValue.email.length > 32
    ) {
      return ErrorInput("email");
    }

    if (
      props.onValue.password.length < 6 ||
      props.onValue.password.length > 40
    ) {
      return ErrorInput("password");
    }

    if (!props.readOnly) {
      props.setClassButton(
        "register__input__button register__input__button__success register__inpuit__anim__button"
      );
      setLoadInput(true);
      props.setReadOnly(true);
      SuccessInput("nick");
      setTimeout(() => {
        SuccessInput("email");
        setTimeout(() => {
          SuccessInput("password");
          setTimeout(() => {
            props.setClassButton(
              "register__input__button register__input__button__success"
            );
            setLoadInput(false);
            props.setStepMainState(false);
            setTimeout(() => {
              setTimeout(() => {
                props.setRegStep(2);
                props.setStepMainState(true);
              }, 1500);
              props.setUpdateStateStage((previousState) => {
                return { ...previousState, main: true };
              });

              props.setRegisterStageStatus((previousState) => {
                previousState[0].point = "success";
                previousState[0].line = "active";
                previousState[1].point = "active";
                return previousState;
              });
              props.setReadOnly(false);
              props.setClassButton("register__input__button");
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }
  };

  return (
    <div className="register__input">
      <form onSubmit={onSubmitHandler} autoComplete="off">
        <div className="register__input_parent_text">
          <RegisterInputText
            id={"nick"}
            readOnly={props.readOnly}
            buttonRef={props.buttonRef}
            error={props.error.nick}
            setError={props.setError}
            mainRef={props.Refs.mainRef.nick}
            boxRef={props.Refs.boxRef.nick}
            boxDownRef={props.Refs.boxDownRef.nick}
            svgRef={props.Refs.svgRef.nick}
            onValue={props.onValue}
            onSetValue={props.onSetValue}
            type={"text"}
            maxLength={24}
            placeholder={"ВВЕДИТЕ НИКНЕЙМ"}
          />
          <RegisterInputText
            id={"email"}
            readOnly={props.readOnly}
            buttonRef={props.buttonRef}
            error={props.error.email}
            setError={props.setError}
            mainRef={props.Refs.mainRef.email}
            boxRef={props.Refs.boxRef.email}
            boxDownRef={props.Refs.boxDownRef.email}
            svgRef={props.Refs.svgRef.email}
            onValue={props.onValue}
            onSetValue={props.onSetValue}
            type={"text"}
            maxLength={32}
            placeholder={"ВВЕДИТЕ ПОЧТУ"}
          />
          <RegisterInputText
            id={"password"}
            readOnly={props.readOnly}
            buttonRef={props.buttonRef}
            error={props.error.password}
            setError={props.setError}
            mainRef={props.Refs.mainRef.password}
            boxRef={props.Refs.boxRef.password}
            boxDownRef={props.Refs.boxDownRef.password}
            svgRef={props.Refs.svgRef.password}
            onValue={props.onValue}
            onSetValue={props.onSetValue}
            type={"password"}
            maxLength={40}
            placeholder={"ВВЕДИТЕ ПАРОЛЬ"}
          />
        </div>

        {loadInput ? (
          <div ref={props.buttonRef} className={props.classButton}>
            <div className="register__input__circle"></div>
          </div>
        ) : (
          <input
            ref={props.buttonRef}
            type="submit"
            className={props.classButton}
            value={"Далее"}
          />
        )}
      </form>
    </div>
  );
}
