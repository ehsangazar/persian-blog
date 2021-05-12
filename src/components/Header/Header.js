import React, { useState, useContext } from 'react'
import AuthModals from '../AuthModals/AuthModals'
import TestimonialModal from '../TestimonialModal/TestimonialModal'
import MyApp from '../../contexts/MyApp'
import profileImage from './profile-ehsan-gazar.jpg'
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
          <div className="mobileOnly">
              <Dropdown>
                <Dropdown.Toggle variant="dropdown">
                  <GiHamburgerMenu /> {` `}
                </Dropdown.Toggle>
                <Dropdown.Menu>
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
      <TestimonialModal
        showTestimonialModal={showTestimonialModal}
        setShowTestimonialModal={setShowTestimonialModal}
      />
    </>
  )
}

export default Header
