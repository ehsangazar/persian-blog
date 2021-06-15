import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import PrivacyImg from './privacy.png'

const PrivacyPolicy = ({ location }) => {
  return (
    <Layout location={location} title={'حریم خصوصی'} page="PrivacyPolicy">
      <SEO title={'حریم خصوصی'} />
      <div id="content">
        <div class="container">
       
          <div class="PrivacyPolicy-us">
            <div class="row content-container">
              <>
                <div class="col-12 col-md-4 col-lg-4 content-image">
                  <img src={PrivacyImg} alt="حریم خصوصی" />
                </div>
                <div class="col-12 col-md-8 col-lg-8 content">
                  <h1>حریم خصوصی</h1>
                  <p>
                    سایت فارسی احسان گازار اهمیت زیادی برای حریم خصوصی شما قائل
                    است. بنابراین هر گونه اطلاعاتی که شما در سایت قرار دهید
                    مطمئنا تنها برای ارتباط با شما و استفاده از محصولات قابل
                    استفاده خواهد بود.
                  </p>
                  <br />
                  <p>
                    در صورتی که در آینده تغییری در این شرایط حاصل شود، در همین
                    صفحه به روز رسانی خواهد شد و استفاده شما از سایت به معنی
                    قبول این شرایط است.
                  </p>
                  <br />
                  <p>
                    سایت فارسی احسان گازار ممکن است از ایمیل و اطلاعات شما در
                    خبرنامه استفاده کند و در صورت نیاز با شما از طریق آن‌ها از
                    طرف احسان گازار تماس گرفته شود. و در صورتی که تمایل به
                    دریافت خبرنامه ندارید، می‌توانید در اسرع وقت با احسان گازار
                    تماس حاصل کرده و عضویت خود را لغو کنید
                  </p>
                  <br />
                  <p>
                    سایت احسان گازار در صورتی که در دیدگاه‌ها و ارتباطات شما با
                    وب‌سایت بی‌احترامی‌ای صورت بگیرد یا به صورت مستقیم و غیر
                    مستقیم شخصی خطاب شود و حرکتی در جهت به زیر سوال بردن آن شخص
                    صورت بگیرد، آن‌ها را پاک خواهد کرد.
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

export default PrivacyPolicy
