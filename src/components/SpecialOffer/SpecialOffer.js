import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import SpecialMessage from '../SpecialMessage/SpecialMessage'
import reactBasicImage from './../Footer/React-Basic.png'
import javaScriptImage from './../Footer/JavaScript.png'
import reactAdvancedImage from './../Footer/React-Advanced.png'
import MyApp from '../../contexts/MyApp'

const SpecialOffer = ({ location }) => {
  const app = useContext(MyApp)

  const handleBuy = (courseName) => {
    app.process.setProcessName(courseName)
    if (!app.user.userData.id) {
      app.modal.setModalToShow('register')
    } else {
      app.modal.setModalToShow('buyModal')
    }
  }

  return (
    <>
      <SpecialMessage />
      <div className="row content-container">
        <div className="col-12 col-md-4 col-lg-4 content-image">
          <Link to="/es6-es7-etc-babel-webpack-javascript-course">
            <img
              src={javaScriptImage}
              alt="دوره کامل آموزش جاوا اسکریپت ورژن ES6 به بعد"
            />
          </Link>
        </div>
        <div className="col-12 col-md-8 col-lg-8 content">
          <h1>دوره کامل آموزش جاوا اسکریپت ورژن ES6 به بعد</h1>
          <p>
            این دوره با هدف سادگی بیان و کامل بودن، بهترین راه برای یادگیری جاوا
            اسکریپت با آخرین ویژگی‌های آن است. اگر مشتاق یادگیری هستید دست به
            کار شوید و من همراهتان در طول مسیر یادگیری خواهم بود.
          </p>
          <br />
          <span className="courses-content-price">440,000 تومان</span>
          <br />
          <br />
          <Link
            className="btn btn-warning no-decoration margin-left-10"
            to="/es6-es7-etc-babel-webpack-javascript-course"
          >
            مشاهده جزئیات
          </Link>
          <Button onClick={() => handleBuy('javascript')} variant="info">
            خرید دوره جاوا اسکریپت ES6
          </Button>
          <div className="note">
            سود فروش این دوره به حساب
            <Link to="/yarra-foundation-charity" className="secondary">
              {' '}
              خیریه یارا{' '}
            </Link>
            واریز می‌شود
          </div>
        </div>
      </div>

      <div className="row content-container">
        <div className="col-12 col-md-4 col-lg-4 content-image">
          <Link to="/react-advanced-course">
            <img src={reactAdvancedImage} alt="دوره React JS پیشرفته" />
          </Link>
        </div>
        <div className="col-12 col-md-8 col-lg-8 content">
          <h1>دوره React JS پیشرفته</h1>
          <p>
            در این دوره از Eslint, EditorConfig و Prettier شروع می‌کنم که محیط
            یک پروژه و ابزار‌های کمکی هستند و بعد بیشتر و عمیق تر وارد React و
            فریم‌ورک‌هایی مثل Gatsby و NextJs می‌شوم. سپس بیشتر به Server Side
            Rendering می‌پردازم و با Restful API ها و GraphQL Endpoint ها
            پروژه‌هایی را برنامه نویسی میکنم. پیچیدگی مطالب و میزان محتوایی که
            در این دوره عرضه می‌شود بسیار زیاد است و لازم هست در هر کدام از این
            ویدئو ها تمرکز بیشتری کرد. مطئمنا بخش رفع ایرادات و سوالات پیش‌امده
            برای دوره کمک بیشتری خواهد کرد که یادگیری بهتری داشته باشید
          </p>
          <br />
          <span className="courses-content-price">2,480,000 تومان</span>
          <br />
          <br />
          <Link
            className="btn btn-warning no-decoration margin-left-10"
            to="/react-advanced-course"
          >
            مشاهده جزئیات
          </Link>
          <Button onClick={() => handleBuy('react-advanced')} variant="info">
            خرید دوره React JS پیشرفته
          </Button>
        </div>
      </div>

      <div className="row content-container">
        <div className="col-12 col-md-4 col-lg-4 content-image">
          <Link to="/react-basic-course">
            <img src={reactBasicImage} alt="دوره React JS مقدماتی" />
          </Link>
        </div>
        <div className="col-12 col-md-8 col-lg-8 content">
          <h1>دوره React JS مقدماتی</h1>
          <p>
            این دوره با هدف آشنایی با React و بررسی تمام کارهایی که با این
            Library میتوان کرد شکل گرفته است. شروع خوبی برای پیاده‌سازی اپ‌های
            ساده است ، شما یاد خواهید گرفت:
          </p>
          <ul>
            <li>چگونه با React کار کنید و یک اپ ساده را شروع کنید</li>
            <li>
              شما مفاهیم Virtual DOM و تفاوت آن با حالت معمولی را خواهید آموخت
            </li>
            <li>
              شما می‌توانید از Hooks ها که Function های جدید در React هستند
              استفاده کنید
            </li>
            <li>
              شما می‌توانید یک اپ فروشگاهی بنویسید و با LocalStorage کار کنید و
              سبد خرید طراحی کنید
            </li>
            <li>
              شما می‌توانید صفحات مختلف در وب‌سایت خود بسازید و آن را در جاهای
              مختلف Deploy کنید
            </li>
            <li>
              شما میتوانید انیمیشن و عکس و آیکن در پروژه استفاده کنید و ساختار
              خوبی به پروژه خود بدهید
            </li>
            <li>
              شما با کتابخانه Create React App کار خواهید کرد و به آن مسلط
              می‌شوید
            </li>
          </ul>
          <br />
          <span className="courses-content-price">870,000 تومان</span>
          <br />
          <br />
          <Link
            className="btn btn-warning no-decoration margin-left-10"
            to="/react-basic-course"
          >
            مشاهده جزئیات
          </Link>
          <Button onClick={() => handleBuy('react-basic')} variant="info">
            خرید دوره React JS مقدماتی
          </Button>
        </div>
      </div>
    </>
  )
}

export default SpecialOffer
