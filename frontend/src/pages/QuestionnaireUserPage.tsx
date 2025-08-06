export default function QuestionnaireUserPage() {
  return (
    <div className="wrapper">
      <main>
        <div className="background-logo">
          <svg className="background-logo__logo" width="750" height="284" aria-hidden="true">
            <use xlinkHref="#logo-big" />
          </svg>
          <svg className="background-logo__icon" width="343" height="343" aria-hidden="true">
            <use xlinkHref="#icon-logotype" />
          </svg>
        </div>
        <div className="popup-form popup-form--questionnaire-user">
          <div className="popup-form__wrapper">
            <div className="popup-form__content">
              <div className="popup-form__form">
                <form>
                  <div className="questionnaire-user">
                    <h1 className="visually-hidden">Опросник</h1>
                    <div className="questionnaire-user__wrapper">
                      <div className="questionnaire-user__block">
                        <span className="questionnaire-user__legend">Ваша специализация (тип) тренировок</span>
                        <div className="specialization-checkbox questionnaire-user__specializations">
                          {[
                            'yoga',
                            'running',
                            'power',
                            'aerobics',
                            'crossfit',
                            'boxing',
                            'pilates',
                            'stretching',
                          ].map((type) => (
                            <div className="btn-checkbox" key={type}>
                              <label>
                                <input
                                  className="visually-hidden"
                                  type="checkbox"
                                  name="specialisation"
                                  value={type}
                                  defaultChecked={['power', 'crossfit', 'boxing'].includes(type)}
                                />
                                <span className="btn-checkbox__btn">
                                  {{
                                    yoga: 'Йога',
                                    running: 'Бег',
                                    power: 'Силовые',
                                    aerobics: 'Аэробика',
                                    crossfit: 'Кроссфит',
                                    boxing: 'Бокс',
                                    pilates: 'Пилатес',
                                    stretching: 'Стрейчинг',
                                  }[type]}
                                </span>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="questionnaire-user__block">
                        <span className="questionnaire-user__legend">Сколько времени вы готовы уделять на тренировку в день</span>
                        <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-user__radio">
                          {[
                            '10-30 мин',
                            '30-50 мин',
                            '50-80 мин',
                            '80-100 мин',
                          ].map((label, index) => (
                            <div className="custom-toggle-radio__block" key={label}>
                              <label>
                                <input
                                  type="radio"
                                  name="time"
                                  defaultChecked={index === 1}
                                />
                                <span className="custom-toggle-radio__icon" />
                                <span className="custom-toggle-radio__label">{label}</span>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="questionnaire-user__block">
                        <span className="questionnaire-user__legend">Ваш уровень</span>
                        <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-user__radio">
                          {['Новичок', 'Любитель', 'Профессионал'].map((level, i) => (
                            <div className="custom-toggle-radio__block" key={level}>
                              <label>
                                <input
                                  type="radio"
                                  name="level"
                                  defaultChecked={i === 1}
                                />
                                <span className="custom-toggle-radio__icon" />
                                <span className="custom-toggle-radio__label">{level}</span>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="questionnaire-user__block">
                        <div className="questionnaire-user__calories-lose">
                          <span className="questionnaire-user__legend">Сколько калорий хотите сбросить</span>
                          <div className="custom-input custom-input--with-text-right questionnaire-user__input">
                            <label>
                              <span className="custom-input__wrapper">
                                <input type="number" name="calories-lose" />
                                <span className="custom-input__text">ккал</span>
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="questionnaire-user__calories-waste">
                          <span className="questionnaire-user__legend">Сколько калорий тратить в день</span>
                          <div className="custom-input custom-input--with-text-right questionnaire-user__input">
                            <label>
                              <span className="custom-input__wrapper">
                                <input type="number" name="calories-waste" />
                                <span className="custom-input__text">ккал</span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn questionnaire-user__button" type="submit">Продолжить</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
