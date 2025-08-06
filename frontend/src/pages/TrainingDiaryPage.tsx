import { FormEvent } from 'react';

export default function TrainingDiaryPage() {
  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику для поиска
    console.log('Выполняется поиск...');
  };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <a className="header__logo" href="/training-catalog" aria-label="Переход на главную">
            <svg width="187" height="70" aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg>
          </a>
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <a className="main-nav__link is-active" href="#" aria-label="На главную">
                  <svg width="18" height="18" aria-hidden="true">
                    <use xlinkHref="#icon-home"></use>
                  </svg>
                </a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#" aria-label="Личный кабинет">
                  <svg width="16" height="18" aria-hidden="true">
                    <use xlinkHref="#icon-user"></use>
                  </svg>
                </a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#" aria-label="Друзья">
                  <svg width="22" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-friends"></use>
                  </svg>
                </a>
              </li>
              <li className="main-nav__item main-nav__item--notifications">
                <a className="main-nav__link" href="#" aria-label="Уведомления">
                  <svg width="14" height="18" aria-hidden="true">
                    <use xlinkHref="#icon-notification"></use>
                  </svg>
                </a>
                <div className="main-nav__dropdown">
                  <p className="main-nav__label">Оповещения</p>
                  <ul className="main-nav__sublist">
                    <li className="main-nav__subitem">
                      <a className="notification is-active" href="#">
                        <p className="notification__text">Катерина пригласила вас на&nbsp;тренировку</p>
                        <time className="notification__time" dateTime="2023-12-23 12:35">23 декабря, 12:35</time>
                      </a>
                    </li>
                    <li className="main-nav__subitem">
                      <a className="notification is-active" href="#">
                        <p className="notification__text">Никита отклонил приглашение на&nbsp;совместную тренировку</p>
                        <time className="notification__time" dateTime="2023-12-22 09:22">22 декабря, 09:22</time>
                      </a>
                    </li>
                    <li className="main-nav__subitem">
                      <a className="notification is-active" href="#">
                        <p className="notification__text">Татьяна добавила вас в&nbsp;друзья</p>
                        <time className="notification__time" dateTime="2023-12-18 18:50">18 декабря, 18:50</time>
                      </a>
                    </li>
                    {/*
                    <li className="main-nav__subitem">
                      <a className="notification" href="#">
                        <p className="notification__text">Наталья приняла приглашение на&nbsp;совместную тренировку</p>
                        <time className="notification__time" dateTime="2023-12-14 08:15">14 декабря, 08:15</time>
                      </a>
                    </li>
                    */}
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <div className="search">
            <form onSubmit={handleSearchSubmit}>
              <label>
                <span className="search__label">Поиск</span>
                <input type="search" name="search" />
                <svg className="search__icon" width="20" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-search"></use>
                </svg>
              </label>
              <ul className="search__list">
                <li className="search__item">
                  <a className="search__link" href="#">Бокс</a>
                </li>
                <li className="search__item">
                  <a className="search__link is-active" href="#">Бег</a>
                </li>
                <li className="search__item">
                  <a className="search__link" href="#">Аэробика</a>
                </li>
                <li className="search__item">
                  <a className="search__link" href="#">Text</a>
                </li>
                <li className="search__item">
                  <a className="search__link" href="#">Text</a>
                </li>
                <li className="search__item">
                  <a className="search__link" href="#">Text</a>
                </li>
                <li className="search__item">
                  <a className="search__link" href="#">Text</a>
                </li>
                <li className="search__item">
                  <a className="search__link" href="#">Text</a>
                </li>
                <li className="search__item">
                  <a className="search__link" href="#">Text</a>
                </li>
                <li className="search__item">
                  <a className="search__link" href="#">Text</a>
                </li>
                <li className="search__item">
                  <a className="search__link" href="#">Text</a>
                </li>
                <li className="search__item">
                  <a className="search__link" href="#">Text</a>
                </li>
                <li className="search__item">
                  <a className="search__link" href="#">Text</a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </header>
      <main>
        <div className="inner-page inner-page--no-sidebar">
          <div className="container">
            <div className="inner-page__wrapper">
              <button className="btn-flat inner-page__back" type="button">
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg>
                <span>Назад</span>
              </button>
              <div className="inner-page__content">
                <section className="training-diary">
                  <div className="training-diary__wrapper">
                    <h1 className="training-diary__title">Дневник тренировок</h1>
                    <div className="training-diary__block">
                      <div className="training-diary__sidebar">
                        <svg className="training-diary__icon" width="17" height="18" aria-hidden="true">
                          <use xlinkHref="#icon-ranking"></use>
                        </svg>
                        <ul className="training-diary__list">
                          <li className="training-diary__item">
                            <span>Тренировка 1</span>
                            <ul className="training-diary__sublist">
                              <li className="training-diary__subitem">
                                <span>Калории</span>
                              </li>
                              <li className="training-diary__subitem">
                                <span>Время</span>
                              </li>
                            </ul>
                          </li>
                          <li className="training-diary__item">
                            <span>Тренировка 2</span>
                            <ul className="training-diary__sublist">
                              <li className="training-diary__subitem">
                                <span>Калории</span>
                              </li>
                              <li className="training-diary__subitem">
                                <span>Время</span>
                              </li>
                            </ul>
                          </li>
                          <li className="training-diary__item">
                            <span>Тренировка 3</span>
                            <ul className="training-diary__sublist">
                              <li className="training-diary__subitem">
                                <span>Калории</span>
                              </li>
                              <li className="training-diary__subitem">
                                <span>Время</span>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="training-diary__total">
                          <p className="training-diary__total-label">Итого</p>
                          <ul className="training-diary__total-list">
                            <li className="training-diary__total-item">
                              <span>Калории</span>
                            </li>
                            <li className="training-diary__total-item">
                              <span>Время</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="training-diary__content">
                        <table className="training-diary__table">
                          <tr className="training-diary__row training-diary__row--head">
                            <th className="training-diary__cell training-diary__cell--head">пн</th>
                            <th className="training-diary__cell training-diary__cell--head">вт</th>
                            <th className="training-diary__cell training-diary__cell--head">ср</th>
                            <th className="training-diary__cell training-diary__cell--head">чт</th>
                            <th className="training-diary__cell training-diary__cell--head">пт</th>
                            <th className="training-diary__cell training-diary__cell--head">сб</th>
                            <th className="training-diary__cell training-diary__cell--head">вс</th>
                          </tr>
                          <tr className="training-diary__row">
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>620</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>320</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>700</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>620</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>320</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>700</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>620</span>
                              </div>
                            </td>
                          </tr>
                          <tr className="training-diary__row">
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>30</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>30</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>90</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>30</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>30</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>30</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>30</span>
                              </div>
                            </td>
                          </tr>
                          <tr className="training-diary__row">
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>410</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>810</span>
                              </div>
                            </td>
                            <td className="training-diary__cell"></td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>410</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>810</span>
                              </div>
                            </td>
                            <td className="training-diary__cell"></td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>410</span>
                              </div>
                            </td>
                          </tr>
                          <tr className="training-diary__row">
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>60</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>60</span>
                              </div>
                            </td>
                            <td className="training-diary__cell"></td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>60</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>60</span>
                              </div>
                            </td>
                            <td className="training-diary__cell"></td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>60</span>
                              </div>
                            </td>
                          </tr>
                          <tr className="training-diary__row">
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>830</span>
                              </div>
                            </td>
                            <td className="training-diary__cell"></td>
                            <td className="training-diary__cell"></td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>830</span>
                              </div>
                            </td>
                            <td className="training-diary__cell"></td>
                            <td className="training-diary__cell"></td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>830</span>
                              </div>
                            </td>
                          </tr>
                          <tr className="training-diary__row">
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>90</span>
                              </div>
                            </td>
                            <td className="training-diary__cell"></td>
                            <td className="training-diary__cell"></td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>90</span>
                              </div>
                            </td>
                            <td className="training-diary__cell"></td>
                            <td className="training-diary__cell"></td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data">
                                <span>90</span>
                              </div>
                            </td>
                          </tr>
                          <tr className="training-diary__row">
                            <td className="training-diary__cell">
                              <div className="training-diary__data training-diary__data--total">
                                <span>1860</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data training-diary__data--total">
                                <span>1130</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data training-diary__data--total">
                                <span>700</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data training-diary__data--total">
                                <span>1860</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data training-diary__data--total">
                                <span>1130</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data training-diary__data--total">
                                <span>700</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data training-diary__data--total">
                                <span>1860</span>
                              </div>
                            </td>
                          </tr>
                          <tr className="training-diary__row">
                            <td className="training-diary__cell">
                              <div className="training-diary__data training-diary__data--total">
                                <span>180</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data training-diary__data--total">
                                <span>90</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data training-diary__data--total">
                                <span>90</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data training-diary__data--total">
                                <span>180</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data training-diary__data--total">
                                <span>90</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data training-diary__data--total">
                                <span>30</span>
                              </div>
                            </td>
                            <td className="training-diary__cell">
                              <div className="training-diary__data training-diary__data--total">
                                <span>180</span>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div className="total training-diary__total-per-week">
                      <div className="total__title-wrapper">
                        <div className="total__title">Итого за неделю</div>
                        <svg className="total__icon" width="30" height="30" aria-hidden="true">
                          <use xlinkHref="#icon-chart-with-arrow"></use>
                        </svg>
                      </div>
                      <dl className="total__result">
                        <div className="total__item">
                          <dt className="total__label">Калории</dt>
                          <dd className="total__number">9 240</dd>
                        </div>
                        <div className="total__item">
                          <dt className="total__label">Время</dt>
                          <dd className="total__number">840</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
