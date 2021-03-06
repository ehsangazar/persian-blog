import React, { useState, useContext } from 'react'
import AuthModals from '../AuthModals/AuthModals'
import PaidModal from '../PaidModal/PaidModal'
import TestimonialModal from '../TestimonialModal/TestimonialModal'
import MyApp from '../../contexts/MyApp'
import profileImage from './profile.png'
import { Link, navigate } from 'gatsby'
import { Button, Dropdown } from 'react-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi'
import loading from '../Icon/loading.gif'

const Header = ({ page, location }) => {
  const app = useContext(MyApp)
  const [showTestimonialModal, setShowTestimonialModal] = useState(false)

  const handleClickOnLogOut = () => {
    localStorage.setItem('token', '')
    app.user.updateUser()
    navigate('/')
  }

  const handleSendTestimonial = () => {
    setShowTestimonialModal(true)
  }

  return (
    <>
      <header className="theme-default">
        <div className="container">
          <div className="header-wrapper">
            <div className="header__name">
              <Link to="/" className="header__logo">
                <img src={profileImage} alt="Logo" />
              </Link>
              <div>
                <h1>احسان گازار</h1>
                <p>برنامه نویس، مدرس، بلاگر و صخره نورد</p>
              </div>
            </div>
            <nav className="desktopOnly">
              <ul>
                <li
                  className={`nav-item ${page === 'homepage' ? 'active' : ''}`}
                >
                  <Link to={'/'}>خانه</Link>
                </li>
                <li className={`nav-item ${page === 'about' ? 'active' : ''}`}>
                  <Link to="/about">درباره</Link>
                </li>
                <li
                  className={`nav-item ${page === 'consult' ? 'active' : ''}`}
                >
                  <Link to="/consult">مشاوره</Link>
                </li>
                <li
                  className={`nav-item ${page === 'courses' ? 'active' : ''}`}
                >
                  <Link to="/courses">دوره‌ها</Link>
                </li>
              </ul>
            </nav>
            <div className="mobileOnly">
              <Dropdown>
                <Dropdown.Toggle variant="dropdown">
                  <GiHamburgerMenu /> {` `}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link className="dropdown-item" to={'/'}>
                    خانه
                  </Link>
                  <Link className="dropdown-item" to={'/about'}>
                    درباره
                  </Link>
                  <Link className="dropdown-item" to={'/consult'}>
                    مشاوره
                  </Link>
                  <Link className="dropdown-item" to={'/courses'}>
                    دوره‌ها
                  </Link>
                  {!app.user.userData.id && (
                    <>
                      <Dropdown.Divider />
                      <Link
                        className="dropdown-item"
                        onClick={() => app.modal.setModalToShow('register')}
                      >
                        ثبت نام
                      </Link>
                      <Link
                        className="dropdown-item"
                        onClick={() => app.modal.setModalToShow('login')}
                      >
                        ورود
                      </Link>
                    </>
                  )}
                  {app.user.userData.id && (
                    <>
                      <Dropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to={'/profile?state=editProfile'}
                      >
                        پروفایل
                      </Link>
                      <Link
                        className="dropdown-item"
                        to={'/profile?state=changePassword'}
                      >
                        تغییر رمز عبور
                      </Link>
                      {/* <Dropdown.Item onClick={handleSendTestimonial}>
                        ثبت توصیه‌نامه
                      </Dropdown.Item> */}
                      <Dropdown.Item onClick={handleClickOnLogOut}>
                        خروج
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="desktopOnly">
              <div className="auth-buttons">
                {app.load.loadingName === 'profile' && (
                  <img className="loading" src={loading} alt="loading" />
                )}
                {!app.user.userData.id && (
                  <div className="desktopOnly">
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={() => app.modal.setModalToShow('register')}
                    >
                      ثبت نام
                    </Button>
                    <Button
                      variant="success"
                      type="submit"
                      onClick={() => app.modal.setModalToShow('login')}
                    >
                      ورود
                    </Button>
                  </div>
                )}
                {app.user.userData.id && (
                  <div className="user-info">
                    <div className="hi">
                      سلام {app.user.userData.first_name}!
                    </div>
                    <a>
                      <Dropdown>
                        <Dropdown.Toggle variant="dropdown">
                          <img src={app.user.userData.image} alt="profile" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Link
                            className="dropdown-item"
                            to={'/profile?state=editProfile'}
                          >
                            پروفایل
                          </Link>
                          {/* <Dropdown.Item onClick={handleSendTestimonial}>
                            ثبت توصیه‌نامه
                          </Dropdown.Item> */}
                          <Link
                            className="dropdown-item"
                            to={'/profile?state=changePassword'}
                          >
                            تغییر رمز عبور
                          </Link>
                          <Dropdown.Item onClick={handleClickOnLogOut}>
                            خروج
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <AuthModals />
      <PaidModal />
      <TestimonialModal
        showTestimonialModal={showTestimonialModal}
        setShowTestimonialModal={setShowTestimonialModal}
      />
    </>
  )
}

export default Header
