import './NotFound.css'
import React, { useState, useRef } from 'react'
import { Transition } from 'react-transition-group';	

export default function NotFound() {
	const [load, setLoad] = useState(false);

	const useAnimateLogo = () => {
		setLoad(true);
	}

	const transitionRef = useRef(null)

	return (
		<div className='notFound__cover'>
			<div className="notFound__display">
				<Transition nodeRef={transitionRef} in={load} timeout={1500}>
					{state => {
						switch(state) {
							case 'entered': case 'entering': {
								return (
									<div onLoad={useAnimateLogo} className='notFound__text-button' style={{'marginTop':'0px','transition':'margin-top 1s'}}>
										<div className="notFound__divblock">
											<div className={`notFound__block notFound__display-text`}>Страница не найдена</div>
										</div>
										<ul className='notFound__footer-list'>
											<li className='notFound__footer-text-li'>THE</li>
											<li className='notFound__footer-text-li notFound__footer-color-li'>THECEREZO</li>
										</ul>
									</div>
								)
							}
							default: {
								return (
									<div className='notFound__text-button'>
										<div className="notFound__divblock">
											<div className={`notFound__block notFound__display-text`}>Страница не найдена</div>
										</div>
										<ul className='notFound__footer-list'>
											<li className='notFound__footer-text-li'>THE</li>
											<li className='notFound__footer-text-li notFound__footer-color-li'>CEREZO</li>
										</ul>
									</div>
								)
							}
						}
					}}
				</Transition>
			</div>
		</div>
	)
}