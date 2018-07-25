import React from 'react';
import flamingo from '../images/flamingocardsok.jpg';

class Visor extends React.Component {
  render() {
    return (
      <section className="container__visor">
        <div className="visor__container1">
          <button type="button" className="visor__button-reset" name="button-reset">
            <span>
              <i className="far fa-trash-alt"></i> reset</span>
          </button>
          <div className="visor__view">
            <div className="visor__box"></div>
            <div className="visor__name-subname">
              <h4 className="visor__view-name" id="userName">Nombre y apellidos</h4>
              <h5 className="visor__view-profession" id="job">Empleo</h5>
            </div>
            <div className="visor__image">
              <img className="visor__image-foto" src={flamingo} alt="foto tarjeta" />
            </div>
            <div className="list">
              <div className="visor__view-a">
                <ul className="visor__view-a-list">
                  <li>
                    <a className="link" href="" target="_blank" title="mobile" id="rellena__phone">
                      <i className="rrss fas fa-mobile-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" className="link" target="_blank" title="Gmail general" id="rellena__email">
                      <i className="rrss far fa-envelope"></i>
                    </a>
                  </li>
                  <li>
                    <a className="link" href="" target="_blank" title="linkedin general" id="rellena__linkedin">
                      <i className="rrss fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a className="link" href="" target="_blank" title="general" id="rellena__github">
                      <i className="rrss fab fa-github-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="visor__view-list-txt">
              <ul className="visor__skills">
                <li className="visor__list-text-icon">
                  <span className="skill" id="selectedskills0"></span>
                </li>
                <li className="visor__list-text-icon">
                  <span className="skill" id="selectedskills1"></span>
                </li>
                <li className="visor__list-text-icon">
                  <span className="skill" id="selectedskills2"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Visor;