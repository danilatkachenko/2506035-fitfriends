import { FC } from 'react';

const QuestionnaireCoachPage: FC = () => (
  <div className="wrapper">
    <main>
      <div className="background-logo">
        <svg className="background-logo__logo" width="750" height="284" aria-hidden="true">
          <use xlinkHref="#logo-big"></use>
        </svg>
        <svg className="background-logo__icon" width="343" height="343" aria-hidden="true">
          <use xlinkHref="#icon-logotype"></use>
        </svg>
      </div>
      <div className="popup-form popup-form--questionnaire-coach">
        <div className="popup-form__wrapper">
          <div className="popup-form__content">
            <div className="popup-form__form">
              <form method="get">
                <div className="questionnaire-coach">
                  <h1 className="visually-hidden">Опросник</h1>
                  <div className="questionnaire-coach__wrapper">

                    {/* Тип тренировок */}
                    <div className="questionnaire-coach__block">
                      <span className="questionnaire-coach__legend">Ваша специализация (тип) тренировок</span>
                      <div className="specialization-checkbox questionnaire-coach__specializations">
                        {[
                          'yoga',
                          'running',
                          'power',
                          'aerobics',
                          'crossfit',
                          'boxing',
                          'pilates',
                          'stretching'
                        ].map((type) => (
                          <div className="btn-checkbox" key={type}>
                            <label>
                              <input
                                className="visually-hidden"
                                type="checkbox"
                                name="specialisation"
                                value={type}
                              />
                              <span className="btn-checkbox__btn">{{
                                yoga: 'Йога',
                                running: 'Бег',
                                power: 'Силовые',
                                aerobics: 'Аэробика',
                                crossfit: 'Кроссфит',
                                boxing: 'Бокс',
                                pilates: 'Пилатес',
                                stretching: 'Стрейчинг'
                              }[type]}
                              </span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Уровень */}
                    <div className="questionnaire-coach__block">
                      <span className="questionnaire-coach__legend">Ваш уровень</span>
                      <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-coach__radio">
                        {['Новичок', 'Любитель', 'Профессионал'].map((level, index) => (
                          <div className="custom-toggle-radio__block" key={level}>
                            <label>
                              <input
                                type="radio"
                                name="level"
                                defaultChecked={index === 1}
                              />
                              <span className="custom-toggle-radio__icon"></span>
                              <span className="custom-toggle-radio__label">{level}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Сертификаты */}
                    <div className="questionnaire-coach__block">
                      <span className="questionnaire-coach__legend">Ваши дипломы и сертификаты</span>
                      <div className="drag-and-drop questionnaire-coach__drag-and-drop">
                        <label>
                          <span className="drag-and-drop__label" tabIndex={0}>
                              Загрузите сюда файлы формата PDF, JPG или PNG
                            <svg width="20" height="20" aria-hidden="true">
                              <use xlinkHref="#icon-import"></use>
                            </svg>
                          </span>
                          <input
                            type="file"
                            name="import"
                            tabIndex={-1}
                            accept=".pdf, .jpg, .png"
                          />
                        </label>
                      </div>
                    </div>

                    {/* Описание и чекбокс */}
                    <div className="questionnaire-coach__block">
                      <span className="questionnaire-coach__legend">
                          Расскажите о своём опыте, который мы сможем проверить
                      </span>
                      <div className="custom-textarea questionnaire-coach__textarea">
                        <label>
                          <textarea name="description" placeholder=" "></textarea>
                        </label>
                      </div>
                      <div className="questionnaire-coach__checkbox">
                        <label>
                          <input
                            type="checkbox"
                            value="individual-training"
                            name="individual-training"
                            defaultChecked
                          />
                          <span className="questionnaire-coach__checkbox-icon">
                            <svg width="9" height="6" aria-hidden="true">
                              <use xlinkHref="#arrow-check"></use>
                            </svg>
                          </span>
                          <span className="questionnaire-coach__checkbox-label">
                              Хочу дополнительно индивидуально тренировать
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <button className="btn questionnaire-coach__button" type="submit">
                      Продолжить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default QuestionnaireCoachPage;
