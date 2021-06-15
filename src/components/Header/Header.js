import React, { useState, useContext } from 'react'
import AuthModals from '../AuthModals/AuthModals'
import MyApp from '../../contexts/MyApp'
import profileImage from './profile-ehsan-gazar.jpg'
import { Link, navigate } from 'gatsby'
import { Button, Dropdown } from 'react-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi'
import loading from '../Icon/loading.gif'
import './Header.css'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Header = ({ page, location }) => {
  const app = useContext(MyApp)
  const [showTestimonialModal, setShowTestimonialModal] = useState(false)

  const handleClickOnLogOut = () => {
    localStorage.setItem('token', '')
    // app.user.updateUser()
    navigate('/')
  }
  return (
    <>
      <header>
        <div className="header__image">
          <Link to="/">
            <img src={profileImage} alt="Logo" />
          </Link>
          <div>
            <h1 className="--noMargin">احسان گازار</h1>
            <small>برنامه نویس، مدرس، بلاگر و صخره نورد</small>
          </div>
        </div>
        <div className="header__menu --desktopOnly">
          {/* <ul>
            <li>
              <Link to="/about">
                <h4>
                درباره
                </h4>
              </Link>
            </li>
            <li>
              <Link to="/courses">
                <h4>
                دوره‌ها
                </h4>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <h4>
                تماس
                </h4>
              </Link>
            </li>
          </ul> */}
        </div>
        <div className="--mobileOnly">
          <Dropdown>
            <Dropdown.Toggle variant="dropdown">
              <GiHamburgerMenu /> {` `}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {/* <>
                <Link to="/about" className="dropdown-item">
                  درباره
                </Link>
                <Link to="/courses" className="dropdown-item">
                  دوره‌ها
                </Link>
                <Link to="/contact" className="dropdown-item">
                  تماس
                </Link>
              </> */}
              {!app.user.userData.id && (
                <>
                  <OutboundLink
                    className="dropdown-item"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://maktabkhooneh.org/learn/?q=%D8%A7%D8%AD%D8%B3%D8%A7%D9%86+%DA%AF%D8%A7%D8%B2%D8%A7%D8%B1"
                  >
                    دوره‌ها
                  </OutboundLink>
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
                  <OutboundLink
                    className="dropdown-item"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://maktabkhooneh.org/learn/?q=%D8%A7%D8%AD%D8%B3%D8%A7%D9%86+%DA%AF%D8%A7%D8%B2%D8%A7%D8%B1"
                  >
                      دوره‌ها
                  </OutboundLink>
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
        <div className="--desktopOnly">
            <div className="header__actions">              
              <div>
                {app.load.loadingName === 'profile' && (
                  <img className="loading" src={loading} alt="loading" />
                )}
              </div>
              <OutboundLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://maktabkhooneh.org/learn/?q=%D8%A7%D8%AD%D8%B3%D8%A7%D9%86+%DA%AF%D8%A7%D8%B2%D8%A7%D8%B1"
              >
                <Button
                  variant="primary"
                  type="button"
                >
                  دوره‌ها
                </Button>
              </OutboundLink>
              {!app.user.userData.id && (
                <div className="header__buttons">                  
                  <Button
                    variant="seondary"
                    type="submit"
                    onClick={() => app.modal.setModalToShow('register')}
                  >
                    ثبت‌نام
                  </Button>
                  <Button
                    variant="seondary"
                    type="submit"
                    onClick={() => app.modal.setModalToShow('login')}
                  >
                    ورود
                  </Button>
                </div>
              )}
              {app.user.userData.id && (
                <div className="header__infos">
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
      </header>
      <AuthModals />
    </>
  )
}

export default Header
