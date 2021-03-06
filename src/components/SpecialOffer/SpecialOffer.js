import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import SpecialMessage from '../SpecialMessage/SpecialMessage'
import reactBasicImage from './../Footer/React-Basic.png'
import javaScriptImage from './../Footer/JavaScript.png'
import reactAdvancedImage from './../Footer/React-Advanced.png'
import awsConceptsImage from './../Footer/AWS-Concepts.png'
import workImg from '../Footer/Work-Logo.png'
import cleanCodeImg from '../Footer/Clean-Code.png'

import MyApp from '../../contexts/MyApp'
import RELEASES from '../../configs/handleFeatures'

const SpecialOffer = ({ location, features }) => {
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
      <div className="container">
        <div className="justify-content-md-center row">
          <SpecialMessage />
          <div className="col-12 col-md-8">
            <p>
              شاید بهتر باشد این دوره‌ها را دوره‌های منتورشیپ بنامیم، چرا که من
              در تمام دوره‌ی یادگیریتان در کنارتان خواهم بود. تا بحال فکر
              کرده‌اید که معلم خصوصی بگیرید؟ فرض کنید معلمتان ویدئو‌های کلاس را
              ذخیره کرده، شما میبینید و در نهایت می‌توانید هر وقت که خواستید
              برای رفع ایراد بروید و یا ساعتی خصوصی یا در کلاس عمومی به بررسی
              کدها بپردازیم.
              <br />
              <br />
              شاید پروژه‌ای از مشتری خود گرفته‌اید، می‌خواهید بهترین نتیجه را بر
              اساس آموخته‌های خود ارائه دهید، بهترین کار شروع انجام پروژه است و
              سپس کدهایتان را برای code review برای من بفرستید. یا اگر خطایی
              وجود دارد بپرسید.
              <br />
              <br />
              هر آنچه که باشد من همراهتان خواهم بود، زمان زیادی را با هم سپری
              خواهیم کرد و به رفع ایرادات یا مرور کدهایتان می‌پردازیم.
              <br />
              <br />
              هدف از این دوره‌ها افزایش کیفیت یادگیری است. یادگیری برای دانشی که
              ارتباط مستقیم با بازار کار دارد. شما مطالب را از کسی می‌آموزید که
              سال‌هاست با این تکنولوژی‌ها کار کرده است و حال قصد دارد سختی‌های
              یادگیری را برای سایرین ساده کند.
              <br />
              <br />
              پس بهتر است دست به کار شوید. امروز زمان آن رسیده است که
              آموخته‌هایتان را بیشتر کنید و در بازار کار رقابت کنید.
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="row content-container">
        <div className="col-12 col-md-4 col-lg-4 content-image">
          <Link to="/clean-code-course">
            <img src={cleanCodeImg} alt="دوره آنلاین کد تمیز" />
          </Link>
        </div>
        <div className="col-12 col-md-8 col-lg-8 content">
          <h1>دوره آنلاین کد تمیز</h1>
          <p>
            یه دوره تخصصی برای کسانی که علاقه مندند کد‌های تمیزتری بنویسند،
            بدانند چه چیزی را Refactor کنند و احتمالا برای شرکت‌های بهتری اپلای
            کنند.
            <br />
            شرکت‌های خوب اکثرا برنامه‌نویسان زیاد و با تجربه‌ای برایشان اپلای
            میکنند و آن‌ها هم کد‌های تستی را به آن‌ها میدهند. برنامه‌نویسان زمان
            خوبی برای اجرای اولیه می‌گذارند و سپس در طی جلسه‌ی بعدی که حضوری یا
            آنلاین با مدیر بخش برنامه‌نویسان و یکی از برنامه‌نویسان حرفه‌ای
            برگزار می‌شود نیاز جدیدی را در پروژه‌ی شما که توسط شما کد زده شده
            است تعریف می‌کنند.
            <br />
            یعنی فرض کنید قرار است اطلاعات را از API بخوانید! آن‌ها از شما
            می‌خواهند که اطلاعات بیشتری را نمایش دهید و یا تحلیل کرده و سپس
            نمایش دهید
            <br />
            داشتن ساختار! دانستن کد تمیز باعث می‌شود در این جلسات با اطمینان
            کد‌های کمی را تغییر دهید و نیازشان را پیاده ‌سازی کنید و در غیر این
            صورت در دام تغییر میفتید و با استرس زیاد در جلسه مطمئنا نتیجه‌ای
            نخواهید گرفت
            <br />
            این دوره بسیار کاربردی‌ است و نیازمند مرور هر چند ماه است تا مطالب
            ملکه‌ی ذهنتان شود
          </p>
          <br />
          <span className="courses-content-price">110,000 تومان</span>
          <br />
          <br />
          <Link
            className="btn btn-warning no-decoration margin-left-10"
            to="/clean-code-course/"
          >
            مشاهده جزئیات
          </Link>
          <Button onClick={() => handleBuy('clean-code')} variant="info">
            خرید دوره آنلاین کد تمیز
          </Button>
          <br />
          <br />
        </div>
      </div>

      {features.workCourse && (
        <div className="row content-container">
          <div className="col-12 col-md-4 col-lg-4 content-image">
            <Link to="/find-a-programming-job-course">
              <img
                src={workImg}
                alt="چطور وارد دنیای برنامه‌نویسی شویم و چطور پیشرفت کنیم؟"
              />
            </Link>
          </div>
          <div className="col-12 col-md-8 col-lg-8 content">
            <h1>چطور وارد دنیای برنامه‌نویسی شویم و چطور پیشرفت کنیم؟</h1>
            <p>
              دوره‌ای را با جواب دادن به سوالات دوستان و رفع نیاز دانشجویان
              دوره‌ها فراهم کرده ام. که قصد دارم آن‌ها را در ابتدای مسیر
              کاری‌شان یاری کنم. در این دوره بسیاری از مهارت‌های کاریابی و
              پیشرفت شغلی را یاد خواهید گرفت
              <br />
              <br />
              این دوره مختص به تازه‌واردان نیست، بلکه کسانی که حرفه‌ای هستند و
              سابقه‌ی کار دارند نیز مطمئنا جای یادگیری زیادی خواهند داشت
            </p>
            <br />
            <Link
              className="btn btn-warning no-decoration margin-left-10"
              to="/find-a-programming-job-course"
            >
              مشاهده جزئیات
            </Link>
            <Button onClick={() => handleBuy('work-course')} variant="info">
              این دوره رایگان می‌باشد
            </Button>
            <br />
            <br />
          </div>
        </div>
      )}

      <div className="row content-container">
        <div className="col-12 col-md-4 col-lg-4 content-image">
          <Link to="/amazon-web-services-concepts-course">
            <img
              src={awsConceptsImage}
              alt="دوره آنلاین معرفی مفاهیم AWS یا Amazon Web Services"
            />
          </Link>
        </div>
        <div className="col-12 col-md-8 col-lg-8 content">
          <h1>دوره آنلاین معرفی مفاهیم AWS یا Amazon Web Services</h1>
          <p>
            در طول این دوره یاد میگیرید که AWS چه نقش مهمی را در کاریابی و
            پیاده‌سازی اپلیکیشن‌های مهم در شرکت‌های دنیا دارد.
          </p>
          <br />
          <p>
            شاید شما هر روز با HTML, CSS و JavaScript کار می‌کنید و شاید یادگیری
            تکنولوژی‌های سروری برایتان سخت تر باشد، شاید فکر می‌کنید که چرا
            می‌بایست این تکنولوژی را یاد بگیرید، اما امروزه بیش از ۱۶ هزار شغل
            حتی در سطح Mid-Level FrontEnd Developer درخواست آشنایی یا تسلط به
            سرویس‌های معروف AWS را دارند و هر روز این تعداد در حال افزایش است.
          </p>
          <br />
          <p>
            این دوره با هدف توضیح سرویس‌های AWS و معرفی کاربرد‌های ساده‌ی آن‌ها
            تهیه شده است و امیدوارم دروازه‌ی خوبی برای یادگیری‌های آینده باشد.
            استقبال شما دوستان مطمئنا تشویقی خواهد بود که دوره‌های بعدی در
            راستای یادگیری AWS را در این وب‌سایت به زبان فارسی قرار دهم.
          </p>
          <br />
          <p>
            برنامه‌نویسان FrontEnd یا Backend در هر زبانی، افرادی که علاقه‌ی
            فراوان به Machine Learning یا AI دارند، یا اگر به Robotic
            علاقه‌مندید یا می‌خواهید وارد دنیال Blockchain شوید و یا Solution
            Architect هستید، شاید هم Business Analyst یا Manager یک شرکت هستید،
            این دوره برای شما الزامی است.
          </p>
          <br />
          <span className="courses-content-price">330,000 تومان</span>
          <br />
          <br />
          <Link
            className="btn btn-warning no-decoration margin-left-10"
            to="/amazon-web-services-concepts-course"
          >
            مشاهده جزئیات
          </Link>
          <Button onClick={() => handleBuy('aws-concepts')} variant="info">
            خرید دوره آموزش مفاهیم AWS
          </Button>
          <br />
          <br />
        </div>
      </div>

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
