import './RegisterInput.scss'
import { useState } from 'react';

export default function RegisterInputText(props) {
	const [svgClass, setSvgClass] = useState('register__input__icon');

	const [boxClass, setBoxClass] = useState('register__box__text');
	const [boxDownClass, setBoxDownClass] = useState('register__box__down');

	const onHandlerIcon = () => {
		switch(props.id) {
			case 'password': {
				return (
					<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="register__input__svg" viewBox="0 0 27 15" fill="none">
						<path ref={props.svgRef} className={svgClass} d="M24.9054 0.951904H2.09464C0.939647 0.951904 0 1.89155 0 3.04654V11.9534C0 13.1084 0.939647 14.0482 2.09464 14.0482H24.9053C26.0603 14.0482 27 13.1085 27 11.9534V3.04654C27 1.89155 26.0604 0.951904 24.9054 0.951904ZM8.76845 8.03004C9.12791 8.23126 9.25622 8.68591 9.0549 9.04538C8.91814 9.28957 8.6646 9.42703 8.40331 9.42703C8.27997 9.42703 8.15485 9.39639 8.03957 9.33174L7.04074 8.77245V9.68812C7.04074 10.1001 6.70673 10.4341 6.29475 10.4341C5.88276 10.4341 5.54876 10.1001 5.54876 9.68812V8.77255L4.54993 9.33174C4.43465 9.39629 4.30952 9.42703 4.18619 9.42703C3.92489 9.42703 3.67136 9.28957 3.53459 9.04538C3.33327 8.68591 3.46158 8.23126 3.82105 8.03004L4.76776 7.49999L3.82105 6.96994C3.46158 6.76872 3.33327 6.31407 3.53459 5.9546C3.73581 5.59523 4.19056 5.46672 4.54993 5.66814L5.54876 6.22733V5.31176C5.54876 4.89977 5.88276 4.56577 6.29475 4.56577C6.70673 4.56577 7.04074 4.89977 7.04074 5.31176V6.22743L8.03957 5.66814C8.39903 5.46692 8.85369 5.59523 9.0549 5.9546C9.25622 6.31407 9.12791 6.76872 8.76845 6.96994L7.82174 7.49999L8.76845 8.03004ZM15.9737 8.03004C16.3332 8.23126 16.4615 8.68591 16.2602 9.04538C16.1234 9.28957 15.8699 9.42703 15.6086 9.42703C15.4852 9.42703 15.3601 9.39639 15.2448 9.33174L14.246 8.77255V9.68812C14.246 10.1001 13.912 10.4341 13.5 10.4341C13.088 10.4341 12.754 10.1001 12.754 9.68812V8.77245L11.7552 9.33174C11.6399 9.39629 11.5148 9.42703 11.3914 9.42703C11.1301 9.42703 10.8766 9.28957 10.7398 9.04538C10.5385 8.68591 10.6668 8.23126 11.0263 8.03004L11.973 7.49999L11.0263 6.96994C10.6668 6.76872 10.5385 6.31407 10.7398 5.9546C10.9412 5.59523 11.3957 5.46672 11.7552 5.66814L12.754 6.22743V5.31176C12.754 4.89977 13.088 4.56577 13.5 4.56577C13.912 4.56577 14.246 4.89977 14.246 5.31176V6.22733L15.2448 5.66814C15.6044 5.46692 16.0589 5.59523 16.2602 5.9546C16.4615 6.31407 16.3332 6.76872 15.9737 6.96994L15.027 7.49999L15.9737 8.03004ZM23.179 8.03004C23.5385 8.23126 23.6668 8.68591 23.4655 9.04538C23.3287 9.28957 23.0752 9.42703 22.8139 9.42703C22.6906 9.42703 22.5654 9.39639 22.4502 9.33174L21.4513 8.77255V9.68812C21.4513 10.1001 21.1173 10.4341 20.7054 10.4341C20.2934 10.4341 19.9594 10.1001 19.9594 9.68812V8.77255L18.9605 9.33174C18.8453 9.39629 18.7201 9.42703 18.5968 9.42703C18.3355 9.42703 18.082 9.28957 17.9452 9.04538C17.7439 8.68591 17.8722 8.23126 18.2317 8.03004L19.1784 7.49999L18.2317 6.96994C17.8722 6.76872 17.7439 6.31407 17.9452 5.9546C18.1464 5.59523 18.6011 5.46672 18.9605 5.66814L19.9594 6.22733V5.31176C19.9594 4.89977 20.2934 4.56577 20.7054 4.56577C21.1173 4.56577 21.4513 4.89977 21.4513 5.31176V6.22733L22.4502 5.66814C22.8097 5.46692 23.2644 5.59523 23.4655 5.9546C23.6668 6.31407 23.5385 6.76872 23.179 6.96994L22.2323 7.49999L23.179 8.03004Z" />
					</svg>
				)
			}
			case 'email': {
				return (
					<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="register__input__svg__email" viewBox="0 0 29 28" fill="none">
						<path ref={props.svgRef} className={svgClass} fillRule="evenodd" clipRule="evenodd" d="M28 6.89316V23.908L21.4727 15.6098L20.2324 16.6194L26.8232 25H2.17681L8.7676 16.6194L7.52726 15.6098L1 23.908V6.89314L14.4992 18.8002L28 6.89316ZM27.999 4V4.75276L14.4998 16.6598L1.00063 4.75278V4H27.999Z" />
					</svg>
				)
			}
			case 'nick': {
				return (
					<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="register__input__svg__nick" viewBox="0 0 28 28" fill="none">
						<path ref={props.svgRef} className={svgClass} fillRule="evenodd" clipRule="evenodd" d="M21.3409 9.09995C21.3409 13.1542 18.0549 16.4413 14.0001 16.4413C9.94481 16.4413 6.6582 13.1541 6.6582 9.1V7.34136C6.6582 3.28716 9.94476 0 14.0001 0C18.0549 0 21.3409 3.28716 21.3409 7.34131V9.09995ZM19.5645 16.9961C22.3248 18.181 24.0203 20.2654 25.0556 22.1056C26.4288 24.5464 25.3522 28 22.9775 28H14.0003H5.02262C2.64781 28 1.57123 24.5464 2.94438 22.1056C3.97901 20.2654 5.6746 18.181 8.4349 16.9961C10.0137 18.1006 11.9316 18.7509 14.0003 18.7509C16.0679 18.7509 17.9857 18.1006 19.5645 16.9961Z" />
			  		</svg>
				)
			}
			case 'referal': {
				return (
					<svg preserveAspectRatio='none' viewBox="0 0 23 23" className="register__input__svg__referal" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path ref={props.svgRef} className={svgClass} fillRule="evenodd" clipRule="evenodd" d="M1.58184 13.9348L0.355469 15.7451L0.87207 15.7586L1.38418 15.7721L1.40664 17.5555C1.42461 19.1861 1.43359 19.3703 1.51895 19.6982C1.73906 20.5338 2.05801 21.0998 2.65098 21.7018C3.14063 22.1959 3.63027 22.5193 4.20977 22.7305C4.90156 22.9775 5.14414 23 7.43965 23H9.52402V21.5625V20.1295L7.40371 20.116L7.40016 20.116C5.28788 20.1025 5.2788 20.1025 5.08574 19.9992C4.78926 19.842 4.55117 19.6039 4.41641 19.3254L4.29063 19.0693L4.27715 17.4162L4.26367 15.7676H4.78477C5.06777 15.7676 5.30137 15.7586 5.30137 15.7451C5.30137 15.7002 2.86211 12.1289 2.83516 12.1289C2.81719 12.1289 2.25117 12.942 1.58184 13.9348ZM3.02461 9.68516C3.34355 9.23594 3.99941 8.70586 4.59238 8.42285C4.77207 8.3375 4.93379 8.26562 4.95176 8.26562C4.96973 8.26562 5.12246 8.36895 5.28867 8.49922C5.66602 8.78672 6.29043 9.0877 6.76211 9.21797C7.27871 9.35723 8.35684 9.35723 8.87344 9.21797C9.44394 9.06074 10.1807 8.6834 10.5221 8.36445C10.6299 8.26562 10.6523 8.26113 10.8006 8.31055L10.9623 8.36445V10.0355C10.9623 11.8145 10.9893 12.1514 11.1914 12.7578C11.2992 13.0902 11.5283 13.5934 11.699 13.8674L11.8158 14.0561L11.4699 14.2357C11.2768 14.3391 10.9803 14.5098 10.8051 14.6221L10.4951 14.8242H8.41523H6.33984L6.23203 14.676C6.16914 14.5996 5.40098 13.4721 4.525 12.1783L2.92578 9.81992L3.02461 9.68516ZM15.3726 5.21542C14.016 5.37264 12.8929 6.32948 12.4392 7.70409C12.3404 8.00956 12.3359 8.08143 12.3179 9.81093C12.3044 11.3338 12.3134 11.6572 12.3763 11.9627C12.6548 13.3283 13.6835 14.393 15.0402 14.7209C15.4759 14.8242 16.2351 14.8107 16.6798 14.6939C17.9915 14.348 19.0158 13.243 19.2538 11.9043C19.3392 11.4326 19.3392 8.55761 19.2538 8.08593C18.9259 6.25311 17.2279 4.99979 15.3726 5.21542ZM7.18848 0.0718555C6.1957 0.28299 5.31523 1.11404 5.00078 2.13377C4.92891 2.37185 4.91992 2.5785 4.91992 3.99803V5.59275L5.0457 5.95662C5.29727 6.70232 5.8543 7.3492 6.53711 7.68611C7.37715 8.09939 8.26211 8.0949 9.12012 7.67713C9.66367 7.4076 10.1578 6.91346 10.4139 6.37889C10.7059 5.76346 10.7148 5.6826 10.7148 3.99803C10.7148 2.31346 10.7059 2.2326 10.4139 1.62166C10.1623 1.09158 9.65469 0.583965 9.12012 0.318926C8.4957 0.0134583 7.84434 -0.0718956 7.18848 0.0718555ZM9.90195 17.3938C10.5129 16.4729 11.4023 15.7227 12.3906 15.2914C12.5793 15.2061 12.759 15.1387 12.7859 15.1387C12.8129 15.1387 13.0016 15.251 13.2037 15.3813C14.7625 16.41 16.8963 16.401 18.4506 15.3633C18.6393 15.242 18.8145 15.1387 18.8414 15.1387C18.8684 15.1387 19.066 15.2195 19.2771 15.3139C20.7461 15.9652 21.9006 17.2635 22.3902 18.8178C22.6104 19.5186 22.6418 19.833 22.6418 21.4771V23H16.757H10.8723V20.8887V18.7773H10.0592H9.24609L9.27754 18.6516C9.32695 18.4404 9.69082 17.7082 9.90195 17.3938Z" />
					</svg>
				)
			}
		}
	}
	
	const onPasswordHandler = (event) => {
		props.onSetValue((previousState) => {
			return { ...previousState, password: event.target.value }
		})
	}

	const onEmailHandler = (event) => {
		props.onSetValue((previousState) => {
			return { ...previousState, email: event.target.value }
		})
	}

	const onNickHandler = (event) => {
		props.onSetValue((previousState) => {
			return { ...previousState, nick: event.target.value }
		})
	}

	const onReferalHandler = (event) => {
		props.onSetValue((previousState) => {
			return { ...previousState, referal: event.target.value }
		})
	}

	// -----------------------------------------------------------

	const onFocusInputHandler = (event) => {
		if(!props.readOnly) {
			if(props.buttonRef.current.classList.contains('register__input__button__shield')) {
				props.buttonRef.current.classList.remove('register__input__button__shield');
			}

			if(props.error || props.mainRef.current.classList.contains('register__input__main__error')) {
				props.mainRef.current.classList.remove('register__input__main__error')
	
				props.setError((previousState) => {
					return { ...previousState, [props.id]: false }
				})
			}
	
			if(event.target.id !== undefined && props.boxRef !== null && !props.mainRef.current.classList.contains('register__input__main__success')) {
				
				setBoxClass(`${boxClass} register__box__text__active`)
				setSvgClass(`${svgClass} register__input__icon__active`)
				setBoxDownClass(boxDownClass.concat(' register__box__down__active'))
			}
		}
	}

	const onBlurInputHandler = (event) => {
		if(props.buttonRef.current.classList.contains('register__input__button__shield') && props.error && props.mainRef.current.classList.contains('register__input__main__error')) {
			props.buttonRef.current.classList.remove('register__input__button__shield');
		}

		if(event.target.id !== undefined && props.boxRef !== null) {
			setBoxClass('register__box__text')
			setSvgClass('register__input__icon')
			setBoxDownClass('register__box__down')
		}
	}

	const onInputTitle = () => {
		switch(props.id) {
			case 'password': { return <input type={props.type} id={props.id} onBlur={onBlurInputHandler} onFocus={onFocusInputHandler} value={props.onValue.password} onChange={onPasswordHandler} autoComplete={'on'} className={'register__input__text'} placeholder={props.placeholder} maxLength={props.maxLength} readOnly={props.readOnly}/> }
			case 'email': { return <input type={props.type} id={props.id} autoComplete={'off'} onBlur={onBlurInputHandler} onFocus={onFocusInputHandler} value={props.onValue.email} onChange={onEmailHandler} className={'register__input__text'} placeholder={props.placeholder} maxLength={props.maxLength} readOnly={props.readOnly}/> }
			case 'nick': { return <input type={props.type} id={props.id} autoComplete={'off'} onBlur={onBlurInputHandler} onFocus={onFocusInputHandler} value={props.onValue.nick} onChange={onNickHandler} className={'register__input__text'} placeholder={props.placeholder} maxLength={props.maxLength} readOnly={props.readOnly}/> }
			case 'referal': { return <input type={props.type} id={props.id} autoComplete={'off'} onBlur={onBlurInputHandler} onFocus={onFocusInputHandler} value={props.onValue.referal} onChange={onReferalHandler} className={`register__input__text`} placeholder={props.placeholder} maxLength={props.maxLength} readOnly={props.readOnly}/> }
		}
	}

	return (
		<div ref={props.mainRef} className="register__input__main">
			<div ref={props.boxRef} className={boxClass}>

				<div className="register__input__icon__markup">
					{onHandlerIcon()}
				</div>

				{onInputTitle()}

				{!props.error ? null :
					<div className="register__input__error__svg">
						{props.readOnly ? 
							<div className="register__input__main__success__svg">
								<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 29 29" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M14.5 27C7.59644 27 2 21.4036 2 14.5C2 7.59644 7.59644 2 14.5 2C21.4036 2 27 7.59644 27 14.5C27 21.4036 21.4036 27 14.5 27ZM0 14.5C0 6.49187 6.49187 0 14.5 0C22.5081 0 29 6.49187 29 14.5C29 22.5081 22.5081 29 14.5 29C6.49187 29 0 22.5081 0 14.5ZM4 14.5C4 8.70102 8.70102 4 14.5 4C20.299 4 25 8.70102 25 14.5C25 20.299 20.299 25 14.5 25C8.70102 25 4 20.299 4 14.5ZM18.6426 9L12.6295 15.1656L10.3574 12.836L8 15.2532L10.272 17.5829L12.6295 20L14.9868 17.5829L21 11.4171L18.6426 9Z" fill="#67FF9B"/>
								</svg>
							</div>
						:
							<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 133 133" fill="none">
								<path fillRule="evenodd" clipRule="evenodd" d="M66.5 81.0345C56.2637 81.0345 47.9655 72.7363 47.9655 62.5C47.9655 52.2637 56.2637 43.9655 66.5 43.9655C76.7363 43.9655 85.0345 52.2637 85.0345 62.5C85.0345 72.7363 76.7363 81.0345 66.5 81.0345ZM45 62.5C45 50.6259 54.6259 41 66.5 41C78.3741 41 88 50.6259 88 62.5C88 74.3741 78.3741 84 66.5 84C54.6259 84 45 74.3741 45 62.5ZM50.931 62.5C50.931 53.9015 57.9015 46.931 66.5 46.931C75.0985 46.931 82.069 53.9015 82.069 62.5C82.069 71.0985 75.0985 78.069 66.5 78.069C57.9015 78.069 50.931 71.0985 50.931 62.5ZM63.2339 72.1379V71.6338L64.1828 71.2779C64.7166 71.0605 64.9835 70.6651 64.9835 70.0917V61.6103C64.9835 61.1952 64.9143 60.9184 64.7759 60.78C64.6376 60.6416 64.4399 60.5428 64.1828 60.4834L63.2339 60.2462V59.7124C64.3608 59.5543 65.3196 59.406 66.1104 59.2676C66.9012 59.1292 67.7217 58.9018 68.5718 58.5855L68.8684 58.8228C68.73 59.0402 68.6212 59.3763 68.5422 59.831C68.4828 60.2857 68.4532 60.78 68.4532 61.3138V70.2993C68.4532 70.5761 68.5422 70.7936 68.7201 70.9517C68.9178 71.1099 69.0957 71.2186 69.2539 71.2779L70.2028 71.6338V72.1379H63.2339ZM66.6739 55.9759C66.061 55.9759 65.5371 55.7683 65.1022 55.3531C64.687 54.9182 64.4794 54.3943 64.4794 53.7814C64.4794 53.1685 64.687 52.6545 65.1022 52.2393C65.5371 51.8044 66.061 51.5869 66.6739 51.5869C67.2868 51.5869 67.8008 51.8044 68.2159 52.2393C68.6509 52.6545 68.8684 53.1685 68.8684 53.7814C68.8684 54.3943 68.6509 54.9182 68.2159 55.3531C67.8008 55.7683 67.2868 55.9759 66.6739 55.9759Z" fill="#FFDB49"/>
							</svg>
						}
					</div>
				}

			</div>
			<div ref={props.boxDownRef} className={boxDownClass}></div>
		</div>
	)	
}