import React, { useState, useEffect } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import reactBasicImage from './React-Basic.png'
import javaScriptImage from './../Footer/JavaScript.png'
import cleanCodeImg from '../Footer/Clean-Code.png'
import { useQueryParam, StringParam } from 'use-query-params'
import { Link } from 'gatsby'
import { Button, Form, Alert } from 'react-bootstrap'
import NewsletterConfirmModal from '../NewsletterConfirmModal/NewsletterConfirmModal'
import fetchHandler from '../../utils/fetchHandler'

const Footer = () => {
  const [showConfirmEmailModal, setShowConfirmEmailModal] = useState(false)
  const [email, setEmail] = useState('')
  const [
    isLoadingNewsletterModalSubmit,
    setLoadingNewsletterModalSubmit,
  ] = useState(false)
  const [
    isLoadingNewsletterConfirmModal,
    setIsLoadingNewsletterConfirmModal,
  ] = useState(false)
  const [
    responseOfApiRegisteringNewsletter,
    setResponseOfApiRegisteringNewsletter,
  ] = useState(null)
  const [newsletterEmailToken, setNewsletterEmailToken] = useQueryParam(
    'newsletterEmailToken',
    StringParam
  )
  const handleCloseConfirmEmailModal = () => setShowConfirmEmailModal(false)
  const handleChangeNewsletterEmail = (event) => setEmail(event.target.value)

  useEffect(() => {
    if (newsletterEmailToken) {
      handleConfirmEmail()
    }
  }, [])

  const handleConfirmEmail = async () => {
    setIsLoadingNewsletterConfirmModal(true)
    setShowConfirmEmailModal(true)
    try {
      await fetchHandler({
        method: 'POST',
        url: '/api/v1/newsletter/validate',
        body: {
          security_hash: newsletterEmailToken,
        },
      })
    } catch (e) {
      console.error(e)
    }
    setIsLoadingNewsletterConfirmModal(false)
  }

  const handleSubmitRegisterNewsletter = async (event) => {
    if (event) event.preventDefault()
    setLoadingNewsletterModalSubmit(true)
    localStorage.setItem('newsletter', true)
    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/newsletter/register',
        body: {
          email,
        },
      })
      if (result.data.success) {
        setResponseOfApiRegisteringNewsletter({
          type: 'success',
          message:
            'با تشکر، ایمیلی به شما ارسال شده است، لطفا آن‌را باز کنید و روی گزینه تایید ایمیل کلیک نمایید.',
        })
      } else {
        setResponseOfApiRegisteringNewsletter({
          type: 'danger',
          message: result.data.message,
        })
      }
    } catch (e) {
      console.error(e)
    }
    setLoadingNewsletterModalSubmit(false)
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="col-12">
                <div className="center-line-title">
                  <h5>اخبار و مقالات سایت را دنبال کنید</h5>
                </div>
                <div className="social-block">
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://t.me/fa_ehsangazar_com"
                  >
                    <i className="fab fa-telegram"></i>
                  </OutboundLink>
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/gazar_in_persian"
                  >
                    <i className="fab fa-instagram"></i>
                  </OutboundLink>
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/company/fa-ehsangazar-com"
                  >
                    <i className="fab fa-linkedin"></i>
                  </OutboundLink>
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.youtube.com/channel/UC-NKQJ0bsHTXS_PzYCSvVUQ"
                  >
                    <i className="fab fa-youtube"></i>
                  </OutboundLink>
                </div>
              </div>
              <div className="col-12 space-up">
                <div className="center-line-title">
                  <h5>عضویت در خبرنامه</h5>
                </div>
                <Form
                  onSubmit={
                    !isLoadingNewsletterModalSubmit
                      ? handleSubmitRegisterNewsletter
                      : null
                  }
                >
                  {responseOfApiRegisteringNewsletter && (
                    <Alert variant={responseOfApiRegisteringNewsletter.type}>
                      {responseOfApiRegisteringNewsletter.message}
                    </Alert>
                  )}
                  <div className="newsletter-form-footer">
                    <Form.Control
                      onChange={handleChangeNewsletterEmail}
                      type="email"
                      value={email}
                      placeholder="ایمیل خود را وارد نمایید"
                    />
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={isLoadingNewsletterModalSubmit}
                    >
                      ثبت نام
                    </Button>
                  </div>
                </Form>
              </div>
              <div className="col-12 space-up">
                <div className="center-line-title">
                  <h5>تماس با من</h5>
                </div>
                <p className="contact-method">
                  اگر می‌خواهید با من در ارتباط باشید پیامی به{` `}
                  <OutboundLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://t.me/ehsangazar"
                  >
                    تلگرام
                  </OutboundLink>{' '}
                  من، یا ایمیلی به me@ehsangazar.com بفرستید.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="col-12">
                <div className="footer-col -feature-post">
                  <div className="center-line-title">
                    <h5>دوره‌ها با همکاری مکتب‌خونه</h5>
                  </div>
                  <div className="feature-post-block d-flex flex-wrap">
                    <div className="col-12 post-card -tiny">
                      <OutboundLink
                          className="card__cover"
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-Clean-Code-mk1125"
                        >
                        <img src={cleanCodeImg} alt="دوره آنلاین کد تمیز" />
                      </OutboundLink>
                      <div className="card__content">
                        <OutboundLink
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-Clean-Code-mk1125"
                        >
                          دوره آنلاین کد تمیز
                        </OutboundLink>
                      </div>
                    </div>
                    <div className="col-12 post-card -tiny">
                      <OutboundLink
                        className="card__cover"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA-mk1122/"
                      >
                        <img
                          src={javaScriptImage}
                          alt="آموزش جاوا اسکریپت (JavaScript)"
                        />
                      </OutboundLink>
                      <div className="card__content">
                        <OutboundLink
                          className="card__content-link"
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA-mk1122/"
                        >
                          آموزش جاوا اسکریپت (JavaScript)
                        </OutboundLink>
                      </div>
                    </div>
                    <div className="col-12 post-card -tiny">
                      <OutboundLink
                        className="card__cover"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%85%D9%82%D8%AF%D9%85%D8%A7%D8%AA%DB%8C-react-js-mk1127/"
                      >
                        <img
                          src={reactBasicImage}
                          alt="دوره React JS مقدماتی"
                        />
                      </OutboundLink>
                      <div className="card__content">
                        <OutboundLink
                          className="card__content-link"
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%85%D9%82%D8%AF%D9%85%D8%A7%D8%AA%DB%8C-react-js-mk1127/"
                        >
                          دوره React JS مقدماتی
                        </OutboundLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>Ehsan Gazar ©</p>
          <ul>
            <li>
              <Link to={'/'}>خانه</Link>
            </li>
            <li>
              <Link to="/about">درباره</Link>
            </li>
            <li>
              <Link to="/terms-conditions">قوانین و مقررات</Link>
            </li>
            <li>
              <Link to="/privacy-policy">حریم خصوصی</Link>
            </li>
          </ul>
        </div>

        <NewsletterConfirmModal
          showConfirmEmailModal={showConfirmEmailModal}
          handleCloseConfirmEmailModal={handleCloseConfirmEmailModal}
          isLoadingNewsletterConfirmModal={isLoadingNewsletterConfirmModal}
        />
      </div>
    </footer>
  )
}

export default Footer
