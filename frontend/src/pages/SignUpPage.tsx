import { useEffect, useState } from 'react';
import { LOCATIONS } from '../constants/locations';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthday: '',
    location: '',
    password: '',
    sex: 'female',
    role: 'coach'
  });
  const [location, setLocation] = useState('');

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    location: '',
  });

  useEffect(() => {
    document.title = 'Регистрация — FitFriends';
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) {
        throw new Error(`Ошибка ${res.status}`);
      }
      const data = await res.json();
    } catch (err) {
    }
  };

  return (
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
        <div className="popup-form popup-form--sign-up">
          <div className="popup-form__wrapper">
            <div className="popup-form__content">
              <div className="popup-form__title-wrapper">
                <h1 className="popup-form__title">Регистрация</h1>
              </div>
              <div className="popup-form__form">
                <form onSubmit={handleSubmit}>
                  <div className="sign-up">
                    <div className="sign-up__load-photo">
                      <div className="input-load-avatar">
                        <label>
                          <input className="visually-hidden" type="file" accept="image/png, image/jpeg" />
                          <span className="input-load-avatar__btn">
                            <svg width="20" height="20" aria-hidden="true">
                              <use xlinkHref="#icon-import"></use>
                            </svg>
                          </span>
                        </label>
                      </div>
                      <div className="sign-up__description">
                        <h2 className="sign-up__legend">Загрузите фото профиля</h2>
                        <span className="sign-up__text">
                          JPG, PNG, оптимальный размер 100×100&nbsp;px
                        </span>
                      </div>
                    </div>
                    <div className="sign-up__data">
                      <div className="custom-input">
                        <label>
                          <span className="custom-input__label">Имя</span>
                          <span className="custom-input__wrapper">
                            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                          </span>
                        </label>
                      </div>
                      <div className="custom-input">
                        <label>
                          <span className="custom-input__label">E-mail</span>
                          <span className="custom-input__wrapper">
                            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                          </span>
                        </label>
                      </div>
                      <div className="custom-input">
                        <label>
                          <span className="custom-input__label">Дата рождения</span>
                          <span className="custom-input__wrapper">
                            <input type="date" name="birthday" value={formData.birthday} onChange={handleChange}
                              max="2099-12-31"
                            />
                          </span>
                        </label>
                      </div>
                      <div className="custom-input">
                        <label>
                          <span className="custom-input__label">Локация</span>
                          <select
                            value={form.location}
                            onChange={(e) => setForm({...form, location: e.target.value})}
                          >
                            <option value="">Выберите локацию</option>
                            {LOCATIONS.map((loc) => (
                              <option key={loc} value={loc}>
                                {loc}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                      <div className="custom-input">
                        <label>
                          <span className="custom-input__label">Пароль</span>
                          <span className="custom-input__wrapper">
                            <input type="password" name="password" value={formData.password} onChange={handleChange}
                              autoComplete="off"
                            />
                          </span>
                        </label>
                      </div>
                      <div className="sign-up__radio">
                        <span className="sign-up__label">Пол</span>
                        <div className="custom-toggle-radio custom-toggle-radio--big">
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="sex" value="male" checked={formData.sex === 'male'}
                                onChange={handleChange}
                              />
                              <span className="custom-toggle-radio__icon"></span>
                              <span className="custom-toggle-radio__label">Мужской</span>
                            </label>
                          </div>
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="sex" value="female" checked={formData.sex === 'female'}
                                onChange={handleChange}
                              />
                              <span className="custom-toggle-radio__icon"></span>
                              <span className="custom-toggle-radio__label">Женский</span>
                            </label>
                          </div>
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="sex" value="any" checked={formData.sex === 'any'}
                                onChange={handleChange}
                              />
                              <span className="custom-toggle-radio__icon"></span>
                              <span className="custom-toggle-radio__label">Неважно</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sign-up__role">
                      <h2 className="sign-up__legend">Выберите роль</h2>
                      <div className="role-selector sign-up__role-selector">
                        <div className="role-btn">
                          <label>
                            <input className="visually-hidden" type="radio" name="role" value="coach"
                              checked={formData.role === 'coach'} onChange={handleChange}
                            />
                            <span className="role-btn__icon">
                              <svg width="12" height="13" aria-hidden="true">
                                <use xlinkHref="#icon-cup"></use>
                              </svg>
                            </span>
                            <span className="role-btn__btn">Я хочу тренировать</span>
                          </label>
                        </div>
                        <div className="role-btn">
                          <label>
                            <input className="visually-hidden" type="radio" name="role" value="sportsman" checked={formData.role === 'sportsman'} onChange={handleChange} />
                            <span className="role-btn__icon">
                              <svg width="12" height="13" aria-hidden="true">
                                <use xlinkHref="#icon-weight"></use>
                              </svg>
                            </span>
                            <span className="role-btn__btn">Я хочу тренироваться</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="sign-up__checkbox">
                      <label>
                        <input type="checkbox" name="user-agreement" defaultChecked />
                        <span className="sign-up__checkbox-icon">
                          <svg width="9" height="6" aria-hidden="true">
                            <use xlinkHref="#arrow-check"></use>
                          </svg>
                        </span>
                        <span className="sign-up__checkbox-label">
                          Я соглашаюсь с <span>политикой конфиденциальности</span> компании
                        </span>
                      </label>
                    </div>
                    <button className="btn sign-up__button" type="submit">
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
}
