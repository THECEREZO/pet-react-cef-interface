import './RegisterOther.scss'
import './RegisterClothes.scss'
import './Register.scss'
import './RegisterInput.scss';
import './RegisterSwitch.scss'

import RegisterInputText from './RegisterInputText'
import RegisterSwitch from './RegisterSwitch';

import { useRef, useState } from 'react';

export default function RegisterOther(props) {

	const updateData = useRef(null);
	const [loadStep, setLoadStep] = useState(false);
	const [errorSex, setErrorSex] = useState(false);

	const [activeButtonSex, setActiveButtonSex] = useState();

	const onButtonHandler = (event) => {
		event.preventDefault();

		if(!errorSex && !props.error.referal) {
			if(!props.error.referal && props.onValue.referal.length > 24) {
				if(!props.buttonRef.current.classList.contains('register__input__button__shield')) {
					props.buttonRef.current.classList.add('register__input__button__shield');
				}

				props.Refs.mainRef.referal.current.classList.add('register__input__main__error')
				return props.setError((previousState) => { return { ...previousState, referal: true } })
			}
			
			if(props.onValue.sex === null) {
				if(updateData.current !== null) {
					if(!props.buttonRef.current.classList.contains('register__input__button__shield')) {
						props.buttonRef.current.classList.add('register__input__button__shield');
					}
					setErrorSex(true);
					return updateData.current.classList.add('error');

				}
			}

			if(!props.readOnly && activeButtonSex) {
				setLoadStep(true);
				props.setReadOnly(true);
				props.setClassButton('register__input__button register__input__button__success register__inpuit__anim__button');

				updateData.current.classList.add('success_anim')
				activeButtonSex.classList.add('success')

				setTimeout(() => {
					props.Refs.mainRef.referal.current.classList.add('register__input__main__success');
					props.setError((previousState) => { return {...previousState, referal: true } });
					
					
					setTimeout(() => {
						props.setClassButton('register__input__button register__input__button__success');
						setLoadStep(false);
												
						props.setStepMainState(false);
						setTimeout(() => {
							setTimeout(() => {								
								props.setRegStep(3);
								props.setStepMainState(true);
							}, 2000);
							props.setUpdateStateStage((previousState) => { return { ...previousState, refs: true } });
	
							props.setRegisterStageStatus((previousState) => {
								previousState[0].point = 'success';
								previousState[0].line = 'success';
								previousState[1].point = 'success';
								previousState[1].line = 'active';
								previousState[2].point = 'active';
								return previousState;
							});
	
							props.setReadOnly(false);
							props.setClassButton('register__input__button');
						}, 1000);
					}, 1000);

				}, 1000);
			}
		}
	}

	return (
		<div ref={props.stepMainRef} className={`register__main__block__${props.stepState}`}>
			<main className="register__main register__main__mt35">
				<ul className="register__main__title other">
					<li className="register__main__list__text other">{props.parent_text}</li>
					<li className="register__main__list__text register__main__list__text__secondary other">{props.children_text}</li>
				</ul>

				<div className="register__main__line other"></div>
			</main>

			<div className="register__main__header other">
				<form onSubmit={onButtonHandler} autoComplete='off'>
					
					<RegisterSwitch updateData={updateData} buttonRef={props.buttonRef} errorSex={errorSex} setErrorSex={setErrorSex} readOnly={props.readOnly} setActiveButtonSex={setActiveButtonSex}
						onValue={props.onValue} onSetValue={props.onSetValue}

						one_switch={{ svg: <svg className='register__switch__svg__man' preserveAspectRatio='none' viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path className={'register__svg__path'} d="M11.2086 0.981689V2.77247L13.9422 2.77273L10.7117 6.00326C9.52216 5.09579 8.09363 4.63815 6.67134 4.63898C4.96805 4.63815 3.25351 5.29265 1.95404 6.59325C0.653406 7.89249 -0.00112745 9.60726 1.4578e-06 11.3103C-0.00112745 13.0136 0.653406 14.7276 1.95401 16.0277C3.25351 17.3283 4.96802 17.9828 6.67131 17.9817C8.37463 17.9828 10.0892 17.328 11.3887 16.0277C12.6887 14.7284 13.3438 13.0136 13.3426 11.3103C13.3438 9.888 12.8855 8.45953 11.9781 7.26996L15.2086 4.03946V6.77304L17 6.77245V0.981689H11.2086ZM10.935 12.1409C10.7751 12.9631 10.3808 13.7422 9.74203 14.3812C9.31577 14.8075 8.82838 15.1235 8.30626 15.3355C7.52386 15.653 6.66241 15.7329 5.84073 15.5736C5.01855 15.414 4.23951 15.0198 3.60012 14.3809C3.17445 13.9547 2.85809 13.4673 2.64609 12.9452C2.32867 12.1628 2.24845 11.3013 2.40776 10.4796C2.5676 9.65743 2.96189 8.87842 3.60012 8.23903C4.02691 7.81336 4.5143 7.49701 5.03648 7.2853C5.81888 6.96758 6.68034 6.88766 7.50142 7.04694C8.32419 7.20651 9.10324 7.60077 9.7426 8.23903C10.1683 8.66582 10.4846 9.15321 10.6966 9.67536C11.014 10.4578 11.0942 11.3193 10.935 12.1409Z" />
						</svg>, text: 'Мужской Пол' }}
						two_switch={{ svg: <svg className='register__switch__svg__woman' preserveAspectRatio='none' viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path className={'register__svg__path'} d="M5.25085 12.0569C3.83779 11.8654 2.55021 11.1444 1.64848 10.0397C0.746752 8.93501 0.298166 7.52912 0.393438 6.10633C0.48871 4.68354 1.12073 3.35001 2.16169 2.37542C3.20265 1.40083 4.57487 0.857911 6.00085 0.856448C7.42857 0.855072 8.80339 1.39665 9.8466 2.3714C10.8898 3.34614 11.5233 4.6811 11.6187 6.10563C11.7141 7.53016 11.2642 8.93767 10.3603 10.0428C9.45635 11.1479 8.16601 11.868 6.75085 12.0569V13.6064H10.5008V15.1064H6.75085V18.1064H5.25085V15.1064H1.50085V13.6064H5.25085V12.0569ZM6.00085 10.6064C7.09486 10.6064 8.14407 10.1719 8.91766 9.39826C9.69125 8.62468 10.1258 7.57547 10.1258 6.48145C10.1258 5.38743 9.69125 4.33822 8.91766 3.56463C8.14407 2.79104 7.09486 2.35645 6.00085 2.35645C4.90683 2.35645 3.85762 2.79104 3.08403 3.56463C2.31044 4.33822 1.87585 5.38743 1.87585 6.48145C1.87585 7.57547 2.31044 8.62468 3.08403 9.39826C3.85762 10.1719 4.90683 10.6064 6.00085 10.6064Z" />
						</svg>, text: 'Женский Пол'}}
					/>

					<RegisterInputText
						id={'referal'}
						readOnly={props.readOnly}
						buttonRef={props.buttonRef}
						error={props.error.referal}
						setError={props.setError}
						mainRef={props.Refs.mainRef.referal}
						boxRef={props.Refs.boxRef.referal}
						boxDownRef={props.Refs.boxDownRef.referal}
						svgRef={props.Refs.svgRef.referal}
						onValue={props.onValue}
						onSetValue={props.onSetValue} 
						type={'text'} 
						maxLength={24} 
						placeholder={'ИМЯ ПРИГЛАСИВШЕГО (НЕОБЯЗАТЕЛЬНО)'} 
					/>

					
					{loadStep 
						? <div ref={props.buttonRef} className={props.classButton}>
							<div className="register__input__circle"></div>
						</div>
						: <input ref={props.buttonRef} type='submit' className={props.classButton + ' other'} value={'Далее'} />
					}

					<input ref={props.buttonRef} type='submit' className={props.classButton + ' other'} value={'Далее'} />
				</form>
			</div>

			<aside className="register__aside__help other">
				<div className="register__aside__help__header">
					<div className="register__aside__help__line register__aside__help__line__1"></div>
					<p className="register__aside__help__text">Подсказка</p>
					<div className="register__aside__help__line register__aside__help__line_2"></div>
				</div>

				<div key={props.key_id} className="register__aside__help__content">{props.helpText}</div>
			</aside>

			<footer className="register__footer other">
				<div className="register__footer__icon">
					<svg preserveAspectRatio="none" viewBox="0 0 66 33" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M6 0C2.68629 0 0 2.68629 0 6V27C0 30.3137 2.68629 33 6 33H60C63.3137 33 66 30.3137 66 27V6C66 2.68629 63.3137 0 60 0H6ZM27.924 19.6693H24.26V17.1893H27.444V15.1093H24.26V12.7893H27.764V10.6293H21.988V21.8293H27.924V19.6693ZM28.7844 18.5653C28.7844 20.8213 30.1284 22.0533 32.2564 22.0533C34.4804 22.0533 35.7764 20.7093 35.7764 18.8693C35.7764 16.7733 34.2415 15.8699 32.975 15.1245C32.0855 14.601 31.3284 14.1554 31.3284 13.4293C31.3284 12.9173 31.6804 12.5973 32.2724 12.5973C32.9284 12.5973 33.2644 12.9653 33.2644 13.7013H35.6004C35.6004 11.6373 34.3524 10.4053 32.2884 10.4053C30.2244 10.4053 29.0244 11.6533 29.0244 13.3653C29.0244 15.3262 30.4758 16.233 31.7083 17.003C32.6179 17.5713 33.4084 18.0652 33.4084 18.8533C33.4084 19.4133 33.0404 19.8453 32.2884 19.8453C31.5684 19.8453 31.1204 19.4613 31.1204 18.5653H28.7844ZM36.8086 18.4053C36.8086 20.7573 38.0886 22.0213 40.2646 22.0213C42.5366 22.0213 43.8326 20.7573 43.8806 18.4053H41.6086C41.5446 19.3973 41.1446 19.8133 40.2646 19.8133C39.5606 19.8133 39.1766 19.3653 39.1766 18.4053V14.0533C39.1766 13.0613 39.5766 12.6133 40.2646 12.6133C41.1286 12.6133 41.5126 13.0293 41.5766 14.0533H43.8486C43.7686 11.6853 42.5206 10.4053 40.2806 10.4053C38.0886 10.4053 36.8086 11.6853 36.8086 14.0533V18.4053Z" fill="url(#paint0_linear_232_7)" fillOpacity="0.35"/>
						<defs>
							<linearGradient id="paint0_linear_232_7" x1="0" y1="0" x2="66" y2="33" gradientUnits="userSpaceOnUse">
								<stop stopColor="white"/>
								<stop offset="1" stopColor="white" stopOpacity="0.4"/>
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="register__footer__description">Нажмите клавишу чтобы вернуться на <b>первый этап</b> обратно</div>
			</footer>
		</div>
	)
}