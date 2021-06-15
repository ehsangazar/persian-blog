import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import notFoundProfile from './404.png'

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location} title={'۴۰۴'}>
      <SEO title={'گم‌شده اید'} />
      <div id="content">
        <div class="container">
          <div class="about-us">
            <div class="row align-items-center">
              <>
                <div class="col-4 content-image">
                  <img src={notFoundProfile} alt="گم شده‌اید" />
                </div>
                <div class="col-8 content">
                  <h1>گم شده‌اید؟</h1>
                  <br />
                  <p>به نظر دنبال صفحه‌ای می‌گردید که وجود ندارد! حال جرا</p>
                  <ul>
                    <li>ممکنه صفحه بوده! ولی دیگه نیست، که عجیبه و بعیده</li>
                    <li>
                      ممکنه صفحه بوده، الان موفت نیست؟ که اونم باز با Gatsby
                      بعیده و غریبه
                    </li>
                    <li>
                      من میگم، صفحه از اول نبوده، پس شما چرا اینجایین؟ شاید یکی
                      شما رو گمراه کرده؟
                    </li>
                    <li>
                      شایدم خودت از قصد گم شدی؟ پیش میاد، ولی خبری نیست اینجا
                      خلاصه، امیدوارم پیدا شی
                    </li>
                  </ul>
                  <br />
                  <p>
                    حالا که Debugging کامل انجام شد، وقتشه برگردیم سرجای
                    اصلیمون، پس روی یکی از منو‌های بالا کلیک کن و این موضوع بین
                    خودمون بمونه
                    <br />
                    <br />
                    ارادتمند
                    <br />
                    گازار
                  </p>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
