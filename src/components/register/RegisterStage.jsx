import { useState } from 'react';
import './RegisterStage.scss'
import { Transition } from 'react-transition-group';

export default function RegisterStage(props) {
	let register__stage__array = [
		'main',
		'refs',
		'clothes'
	];

	const onClickStep = (event) => {
		event.preventDefault();

		// console.log(event.target.classList)
		// if(event.target.classList.contains('success')) {
		// 	console.log(Number(event.target.id.replace('stage__', '')));
		// 	if(props.regStep !== Number(event.target.id.replace('stage__', ''))) {
		// 		return props.setRegStep(Number(event.target.id.replace('stage__', '')))
		// 	}
		// }
	}

	return (
		<ul className="register__stage">
		{register__stage__array.map((value, item) => {
			// console.log(item + 1)
			return (
				<li ref={props.registerStageRef[value]} key={value} id={register__stage__array[item]} className={`register__stage__block ${value}`} onClick={onClickStep}>
					<Transition
						timeout={1500}
						nodeRef={props.registerStageRef[value]}
						in={props.updateStateStage[value]}
					>
						{(state) => {
							return (
								<>										
									<div id={`stage__${item+1}`} className={`register__stage__step ${props.registerStageStatus[item].point}`}>
										<div className={`${state}`}></div>
									</div>
									{item == register__stage__array.length - 1 ? '' : <div className={`register__stage__step__line ${props.registerStageStatus[item].line}`}>
											<div className={state}></div>
										</div>
									}
								</>
							)
						}}
					</Transition>
				</li>
			)})}
		</ul>
	)
}