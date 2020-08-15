import React from 'react'
import profileImage from './profile.png'
import reactBasicImage from './../Footer/React-Basic.png'
import reactAdvancedImage from './../Footer/React-Advanced.png'
import { Link } from 'gatsby'

const Header = ({ page, location }) => {
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
            <nav>
              <ul>
                <li className={`nav-item ${page === "homepage" ? "active" : ""}`}>
                  <Link to={"/"}>خانه</Link>
                </li>
                <li className={`nav-item ${page === "about" ? "active" : ""}`}>
                  <Link to="/about">درباره</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="special">
        <div class="alert">
          به مناسبت بازگشایی وب‌سایت تخفیف ۴۰ درصدی روی دو دوره مقدماتی و پیشرفته 
          تا ۵ شهریور
        </div>
      </div>
      {
        location.pathname != '/react-basic-course' && location.pathname != '/react-advanced-course' && <div className="courses">
          <div className="courses-single">
            <Link
              className="courses-link"
              to="/react-basic-course"
            >
              <img
                src={reactBasicImage}
                alt="دوره React JS مقدماتی"
              />
            </Link>
            <div className="courses-content">
              <Link
                className="courses-content-title"
                to="/react-basic-course"
              >
                دوره React JS مقدماتی
                    </Link>
              <p>
                دوره‌ای که در آن با مقدمات برنامه‌نویسی وب آشنا‌ می‌شوید و
                یاد میگیرید با React وب‌سایت بنویسید
                    </p>
              <span className="courses-content-price">
                <strike>870,000</strike>
                522,000
                تومان
              </span>
            </div>
          </div>
          <div className="courses-single">
            <Link
              className="courses-link"
              to="/react-advanced-course"
            >
              <img
                src={reactAdvancedImage}
                alt="دوره React JS پیشرفته"
              />
            </Link>
            <div className="courses-content">
              <Link
                className="courses-content-title"
                to="/react-advanced-course"
              >
                دوره React JS پیشرفته
                    </Link>
              <p>
                در این دوره یاد میگیرید چطور با Webpack, GraphQL, NextJs, Gatsby و غیره یک سایت حرفه‌ای بنویسید
                    </p>
              <span className="courses-content-price">
                <strike>2,480,000</strike>
                1,488,000
                تومان
              </span>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Header 