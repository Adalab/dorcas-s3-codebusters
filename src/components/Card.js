import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="visor__container1">
        <button type="button" className="visor__button-reset" name="button-reset" onClick={this.props.reset}>
          <span>
            <i className="far fa-trash-alt"></i> reset</span>
        </button>
        <div className="visor__view">
          <div className="visor__box"></div>
          <div className="visor__name-subname">
            <h4 className="visor__view-name" id="userName">{this.props.form.name}</h4>
            <h5 className="visor__view-profession" id="job">{this.props.form.job}</h5>
          </div>
          <div className="visor__image">
            <img className="visor__image-foto" src={this.props.form.photo} alt="target" />
          </div>
          <div className="list">
            <div className="visor__view-a">
              <ul className="visor__view-a-list">
                <li>
                  <a className="link" href={this.props.form.phone} target="_blank" title="mobile" id="rellena__phone">
                    <i className={this.props.iconVisor.movil}></i>
                  </a>
                </li>
                <li>
                  <a href= {this.props.form.email} className="link" target="_blank" title="Gmail general" id="rellena__email">
                    <i className={this.props.iconVisor.email}></i>
                  </a>
                </li>
                <li>
                  <a className="link" href={this.props.form.linkedin} target="_blank" title="linkedin general" id="rellena__linkedin">
                    <i className={this.props.iconVisor.linkedin}></i>
                  </a>
                </li>
                <li>
                  <a className="link" href={this.props.form.github} target="_blank" title="general" id="rellena__github">
                    <i className={this.props.iconVisor.github}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="visor__view-list-txt">
            <ul className="visor__skills">
              {this.props.form.skills.map((item) => {
                return (
                  <li className="visor__list-text-icon">
                    <span className="skill" id="selectedskills0">{item}</span>
                  </li> )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;