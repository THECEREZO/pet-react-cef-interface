import { useRef } from 'react'
import './RegisterSwitch.scss'

export default function RegisterSwitch(props) {
	const onButtonTwoRef = useRef(null);
	const onButtonOneRef = useRef(null);

	const onMouseSwitchHandler = (event, ref) => {
		event.preventDefault();

		if(!props.readOnly) {
			switch(event.type) {
				case 'mouseenter': {
					if(!ref.classList.contains('select') && !ref.classList.contains('active')) {
						return ref.classList.add('select');
					}
					return;
				}
				case 'mouseleave': {
					if(ref.classList.contains('select')) {
						return ref.classList.remove('select');
					}
					return;
				}
			}
		}
		return;
	}

	const onClickSwitchHandler = (event, ref) => {
		event.preventDefault();

		if(ref && ref.classList.contains('select') && !props.readOnly) {
			const alter_ref = ref.classList.contains('first') ? onButtonTwoRef.current : onButtonOneRef.current;
			
			if(alter_ref) {
				if(props.updateData.current.classList.contains('error'))
					props.updateData.current.classList.remove('error');

				if(props.buttonRef.current.classList.contains('register__input__button__shield')) {
					props.buttonRef.current.classList.remove('register__input__button__shield');
				}

				if(props.errorSex)
					props.setErrorSex(false);

				if(alter_ref.classList.contains('active'))
					alter_ref.classList.remove('active');

				ref.classList.add('active')
				props.setActiveButtonSex(ref);

				if(ref.classList.contains('select'))
					ref.classList.remove('select')
				
				if(ref.classList[1] === 'first' || ref.classList[1] === 'two') {
					return props.onSetValue((previousState) => {
						return { ...previousState, sex: ref.classList[1] === 'first' ? 1 : 2 }
					})
				}
			}
		}
	}

	return (
		<div className={`register__switch__header`} ref={props.updateData}>
			<div ref={onButtonOneRef} onClick={(event) => { return onClickSwitchHandler(event, onButtonOneRef.current) }} onMouseEnter={(event) => { return onMouseSwitchHandler(event, onButtonOneRef.current) }} onMouseLeave={(event) => { return onMouseSwitchHandler(event, onButtonOneRef.current) }} className="register__switch__button first">
				<div className="register__switch__button__header">
					<div className="register__switch__text__svg">
						<ul className="register__switch__ul">
							{props.one_switch.svg ? <li className="register__switch__svg">{props.one_switch.svg}</li> : null}
							<li className='register__switch__text first'>{props.one_switch.text}</li>
						</ul>
					</div>

					<div className="register__switch__line first"></div>
				</div>
			</div>

			<div ref={onButtonTwoRef} onClick={(event) => { return onClickSwitchHandler(event, onButtonTwoRef.current) }} onMouseEnter={(event) => { return onMouseSwitchHandler(event, onButtonTwoRef.current) }} onMouseLeave={(event) => { return onMouseSwitchHandler(event, onButtonTwoRef.current) }} className="register__switch__button two">
				<div className="register__switch__button__header">
					<div className="register__switch__text__svg">
						<ul className="register__switch__ul">
							{props.two_switch.svg ? <li className="register__switch__svg">{props.two_switch.svg}</li> : null}
							<li className='register__switch__text two'>{props.two_switch.text}</li>
						</ul>
					</div>

					<div className="register__switch__line two"></div>
				</div>
			</div>

		</div>
	)
}