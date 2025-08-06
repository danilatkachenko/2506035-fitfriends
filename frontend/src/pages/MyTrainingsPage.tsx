import { FormEvent } from 'react';

export default function MyTrainingsPage() {
  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Выполняется поиск...');
  };

  const handleFilterSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Применение фильтров...');
  };

  // Компонент для одной карточки тренировки
  const TrainingCard = ({ imageSrc, imageSrcSet, price, title, hashtags, calories, rating, description }: { imageSrc: string; imageSrcSet: string; price: string; title: string; hashtags: string[]; calories: string; rating: number; description: string }) => (
    <li className="my-trainings__item">
      <div className="thumbnail-training">
        <div className="thumbnail-training__inner">
          <div className="thumbnail-training__image">
            <picture>
              <source type="image/webp" srcSet={imageSrcSet} />
              <img src={imageSrc} srcSet={imageSrcSet} width="330" height="190" alt="" />
            </picture>
          </div>
          <p className="thumbnail-training__price">
            {price === 'Бесплатно' ? price : <>
              <span className="thumbnail-training__price-value">{price}</span>
              <span>₽</span>
            </>}
          </p>
          <h3 className="thumbnail-training__title">{title}</h3>
          <div className="thumbnail-training__info">
            <ul className="thumbnail-training__hashtags-list">
              <li className="thumbnail-training__hashtags-item">
                <div className="hashtag thumbnail-training__hashtag"><span>{hashtags[0]}</span></div>
              </li>
              <li className="thumbnail-training__hashtags-item">
                <div className="hashtag thumbnail-training__hashtag"><span>{calories}</span></div>
              </li>
            </ul>
            <div className="thumbnail-training__rate">
              <svg width="16" height="16" aria-hidden="true">
                <use xlinkHref="#icon-star"></use>
              </svg>
              <span className="thumbnail-training__rate-value">{rating}</span>
            </div>
          </div>
          <div className="thumbnail-training__text-wrapper">
            <p className="thumbnail-training__text">{description}</p>
          </div>
          <div className="thumbnail-training__button-wrapper">
            <a className="btn btn--small thumbnail-training__button-catalog" href="#">Подробнее</a>
            <a className="btn btn--small btn--outlined thumbnail-training__button-catalog" href="#">Отзывы</a>
          </div>
        </div>
      </div>
    </li>
  );

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
                <li className="search__item"><a className="search__link" href="#">Бокс</a></li>
                <li className="search__item"><a className="search__link is-active" href="#">Бег</a></li>
                <li className="search__item"><a className="search__link" href="#">Аэробика</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
              </ul>
            </form>
          </div>
        </div>
      </header>
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Мои тренировки</h1>
              <div className="my-training-form">
                <h2 className="visually-hidden">Мои тренировки Фильтр</h2>
                <div className="my-training-form__wrapper">
                  <button className="btn-flat btn-flat--underlined my-training-form__btnback" type="button">
                    <svg width="14" height="10" aria-hidden="true">
                      <use xlinkHref="#arrow-left"></use>
                    </svg>
                    <span>Назад</span>
                  </button>
                  <h3 className="my-training-form__title">фильтры</h3>
                  <form className="my-training-form__form" onSubmit={handleFilterSubmit}>
                    <div className="my-training-form__block my-training-form__block--price">
                      <h4 className="my-training-form__block-title">Цена, ₽</h4>
                      <div className="filter-price">
                        <div className="filter-price__input-text filter-price__input-text--min">
                          <input type="number" id="text-min" name="text-min" defaultValue="0" />
                          <label htmlFor="text-min">от</label>
                        </div>
                        <div className="filter-price__input-text filter-price__input-text--max">
                          <input type="number" id="text-max" name="text-max" defaultValue="3200" />
                          <label htmlFor="text-max">до</label>
                        </div>
                      </div>
                      <div className="filter-range">
                        <div className="filter-range__scale">
                          <div className="filter-range__bar"><span className="visually-hidden">Полоса прокрутки</span></div>
                        </div>
                        <div className="filter-range__control">
                          <button className="filter-range__min-toggle" type="button"><span className="visually-hidden">Минимальное значение</span></button>
                          <button className="filter-range__max-toggle" type="button"><span className="visually-hidden">Максимальное значение</span></button>
                        </div>
                      </div>
                    </div>
                    <div className="my-training-form__block my-training-form__block--calories">
                      <h4 className="my-training-form__block-title">Калории</h4>
                      <div className="filter-calories">
                        <div className="filter-calories__input-text filter-calories__input-text--min">
                          <input type="number" id="text-min-cal" name="text-min-cal" />
                          <label htmlFor="text-min-cal">от</label>
                        </div>
                        <div className="filter-calories__input-text filter-calories__input-text--max">
                          <input type="number" id="text-max-cal" name="text-max-cal" />
                          <label htmlFor="text-max-cal">до</label>
                        </div>
                      </div>
                      <div className="filter-range">
                        <div className="filter-range__scale">
                          <div className="filter-range__bar"><span className="visually-hidden">Полоса прокрутки</span></div>
                        </div>
                        <div className="filter-range__control">
                          <button className="filter-range__min-toggle" type="button"><span className="visually-hidden">Минимальное значение</span></button>
                          <button className="filter-range__max-toggle" type="button"><span className="visually-hidden">Максимальное значение</span></button>
                        </div>
                      </div>
                    </div>
                    <div className="my-training-form__block my-training-form__block--raiting">
                      <h4 className="my-training-form__block-title">Рейтинг</h4>
                      <div className="filter-raiting">
                        <div className="filter-raiting__scale">
                          <div className="filter-raiting__bar"><span className="visually-hidden">Полоса прокрутки</span></div>
                        </div>
                        <div className="filter-raiting__control">
                          <button className="filter-raiting__min-toggle" type="button"><span className="visually-hidden">Минимальное значение</span></button><span>0</span>
                          <button className="filter-raiting__max-toggle" type="button"><span className="visually-hidden">Максимальное значение</span></button><span>5</span>
                        </div>
                      </div>
                    </div>
                    <div className="my-training-form__block my-training-form__block--duration">
                      <h4 className="my-training-form__block-title">Длительность</h4>
                      <ul className="my-training-form__check-list">
                        <li className="my-training-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="duration-1" name="duration" />
                              <span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg>
                              </span>
                              <span className="custom-toggle__label">10 мин - 30 мин</span>
                            </label>
                          </div>
                        </li>
                        <li className="my-training-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="duration-1" name="duration" defaultChecked />
                              <span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg>
                              </span>
                              <span className="custom-toggle__label">30 мин - 50 мин</span>
                            </label>
                          </div>
                        </li>
                        <li className="my-training-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="duration-1" name="duration" />
                              <span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg>
                              </span>
                              <span className="custom-toggle__label">50 мин - 80 мин</span>
                            </label>
                          </div>
                        </li>
                        <li className="my-training-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="duration-1" name="duration" />
                              <span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg>
                              </span>
                              <span className="custom-toggle__label">80 мин - 100 мин</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
              <div className="inner-page__content">
                <div className="my-trainings">
                  <ul className="my-trainings__list">
                    <TrainingCard
                      imageSrc="img/content/thumbnails/training-02.jpg"
                      imageSrcSet="img/content/thumbnails/training-02.webp, img/content/thumbnails/training-02@2x.webp 2x"
                      price="Бесплатно"
                      title="crossfit"
                      hashtags={['#кроссфит']}
                      calories="#1200ккал"
                      rating={5}
                      description="Сложный комплекс упражнений для профессиональных атлетов на&nbsp;отработку показателей в&nbsp;классическом стиле."
                    />
                    <TrainingCard
                      imageSrc="img/content/thumbnails/training-01.jpg"
                      imageSrcSet="img/content/thumbnails/training-01.webp, img/content/thumbnails/training-01@2x.webp 2x"
                      price="800"
                      title="energy"
                      hashtags={['#пилатес']}
                      calories="#320ккал"
                      rating={4}
                      description="Упражнения укрепляют мышечный корсет, делают суставы более гибкими, улучшают осанку и&nbsp;координацию."
                    />
                    <TrainingCard
                      imageSrc="img/content/thumbnails/training-03.jpg"
                      imageSrcSet="img/content/thumbnails/training-03.webp, img/content/thumbnails/training-03@2x.webp 2x"
                      price="1000"
                      title="boxing"
                      hashtags={['#бокс']}
                      calories="#800ккал"
                      rating={5}
                      description="Тренировка на&nbsp;отработку правильных ударов, координации и&nbsp;оптимальной механики защитных движений."
                    />
                    <TrainingCard
                      imageSrc="img/content/thumbnails/training-04.jpg"
                      imageSrcSet="img/content/thumbnails/training-04.webp, img/content/thumbnails/training-04@2x.webp 2x"
                      price="1200"
                      title="power"
                      hashtags={['#силовые']}
                      calories="#600ккал"
                      rating={4}
                      description="Тренировка на&nbsp;отработку правильной техники работы с&nbsp;тяжелыми весами, укрепления мышц кора и&nbsp;спины."
                    />
                    <TrainingCard
                      imageSrc="img/content/thumbnails/training-05.jpg"
                      imageSrcSet="img/content/thumbnails/training-05.webp, img/content/thumbnails/training-05@2x.webp 2x"
                      price="1400"
                      title="antistress"
                      hashtags={['#йога']}
                      calories="#250ккал"
                      rating={5}
                      description="В&nbsp;основе программы лежит работа с&nbsp;телом и&nbsp;с&nbsp;психо-эмоциональным состоянием. Уберем зажимы тела, избавимся от стресса."
                    />
                    <TrainingCard
                      imageSrc="img/content/thumbnails/training-06.jpg"
                      imageSrcSet="img/content/thumbnails/training-06.webp, img/content/thumbnails/training-06@2x.webp 2x"
                      price="1600"
                      title="run, forrest, run"
                      hashtags={['#бег']}
                      calories="#500ккал"
                      rating={5}
                      description="Узнайте правильную технику бега, развивайте выносливость и&nbsp;откройте для себя все секреты длительных пробежек."
                    />
                    <TrainingCard
                      imageSrc="img/content/thumbnails/training-07.jpg"
                      imageSrcSet="img/content/thumbnails/training-07.webp, img/content/thumbnails/training-07@2x.webp 2x"
                      price="1600"
                      title="fitball"
                      hashtags={['#пилатес']}
                      calories="#200ккал"
                      rating={5}
                      description="Тренировка на&nbsp;фитболе&nbsp;&mdash; отличном тренажере для развития чувства баланса и&nbsp;равновесия, улучшения координации."
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
