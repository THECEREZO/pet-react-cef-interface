import './Register.scss'
import './RegisterStage.scss'
import './RegisterNotif.scss'
import RegisterInput from "./RegisterInput"
import { Component } from 'react'

export default class Main extends Component {
	render() {
		return (
			<div ref={this.props.stepMainRef} className={`register__main__block__${this.props.stepState}`}>
				<main className="register__main register__main__mt35">
					<ul className="register__main__title">
						<li className="register__main__list__text">{this.props.parent_text}</li>
						<li className="register__main__list__text register__main__list__text__secondary">{this.props.children_text}</li>
					</ul>
	
					<div className="register__main__line"></div>
				</main>
				
				<RegisterInput
					error={this.props.error}
					setError={this.props.setError}
					onValue={this.props.onValue} 
					onSetValue={this.props.onSetValue}
					stepMainRef={this.props.stepMainRef}
					stepMainState={this.props.stepMainState}
					setStepMainState={this.props.setStepMainState}
					setRegisterStageStatus={this.props.setRegisterStageStatus}
					updateStateStage={this.props.updateStateStage}
					setUpdateStateStage={this.props.setUpdateStateStage} 
					setNotif={this.props.setNotif}
					setRegStep={this.props.setRegStep}
					setLoaderVisible={this.props.setLoaderVisible}
					Refs={this.props.Refs}
					readOnly={this.props.readOnly}
					setReadOnly={this.props.setReadOnly}
					buttonRef={this.props.buttonRef}
					classButton={this.props.classButton}
					setClassButton={this.props.setClassButton}
					type={this.props.type} />

				<aside className="register__aside__help">
				<div className="register__aside__help__header">
					<div className="register__aside__help__line register__aside__help__line__1"></div>
					<p className="register__aside__help__text">Подсказка</p>
					<div className="register__aside__help__line register__aside__help__line_2"></div>
				</div>
	
				<div key={this.props.key_id} className="register__aside__help__content">{this.props.helpText}</div>
				</aside>
	
				<footer className="register__footer">
				<div className="register__footer__icon">
					<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 66 33" fill="none">
					<path fillRule="evenodd" clipRule="evenodd" d="M6 0C2.68629 0 0 2.68629 0 6V27C0 30.3137 2.68629 33 6 33H60C63.3137 33 66 30.3137 66 27V6C66 2.68629 63.3137 0 60 0H6ZM19.7443 19.6693H16.0803V17.1893H19.2643V15.1093H16.0803V12.7893H19.5843V10.6293H13.8083V21.8293H19.7443V19.6693ZM28.4287 10.6293H26.1887V13.2213C26.1887 14.2613 26.3167 16.1813 26.5087 17.5893L26.4607 17.6373C26.3247 17.2853 26.1927 16.9253 26.0607 16.5653C25.9287 16.2053 25.7967 15.8453 25.6607 15.4933L23.5327 10.6293H21.2927V21.8293H23.5327V19.5573C23.5327 18.3093 23.4207 16.2133 23.2447 14.8053L23.2927 14.7573L24.3007 17.4933L26.1887 21.8293H28.4287V10.6293ZM36.3857 12.7893V10.6293H29.6657V12.7893H31.8577V21.8293H34.1937V12.7893H36.3857ZM43.4006 19.6693H39.7366V17.1893H42.9206V15.1093H39.7366V12.7893H43.2406V10.6293H37.4646V21.8293H43.4006V19.6693ZM48.0209 18.0693L49.8129 21.8293H52.2929L50.1809 17.5893C51.1729 16.9973 51.7329 15.8773 51.7329 14.3573C51.7329 12.0053 50.4209 10.6293 48.1969 10.6293H44.9489V21.8293H47.2209V18.0693H48.0209ZM47.2209 15.9093V12.7893H48.1649C48.9649 12.7893 49.3969 13.3333 49.3969 14.3573C49.3969 15.3653 48.9649 15.9093 48.1649 15.9093H47.2209Z" fill="url(#paint0_linear_232_7)" fillOpacity="0.35"/>
						<defs>
							<linearGradient id="paint0_linear_232_7" x1="0" y1="0" x2="66" y2="33" gradientUnits="userSpaceOnUse">
							<stop stopColor="white"/>
							<stop offset="1" stopColor="white" stopOpacity="0.4"/>
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="register__footer__description">Нажмите клавишу чтобы пройти первый этап</div>
				</footer>
			</div>
		)
	}
}