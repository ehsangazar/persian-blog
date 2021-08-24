import React, { useState, useEffect } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { useQueryParam, StringParam } from 'use-query-params'
import { Link } from 'gatsby'
import { Button, Form, Alert } from 'react-bootstrap'
import NewsletterConfirmModal from '../NewsletterConfirmModal/NewsletterConfirmModal'
import fetchHandler from '../../utils/fetchHandler'
import './Footer.css'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5'
import { FaTelegram, FaWhatsappSquare } from 'react-icons/fa'

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
      <div className="footer__newsletter">
        {responseOfApiRegisteringNewsletter && (
          <Alert variant={responseOfApiRegisteringNewsletter.type}>
            {responseOfApiRegisteringNewsletter.message}
          </Alert>
        )}
        <Form
          onSubmit={
            !isLoadingNewsletterModalSubmit
              ? handleSubmitRegisterNewsletter
              : null
          }
        >
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
              عضویت در خبرنامه
            </Button>
          </div>
        </Form>
      </div>

      <div className="footer__socials">
        <OutboundLink
          rel="noopener noreferrer"
          target="_blank"
          href="https://wa.me/%2B61423277852?text=Hey%20Gazar"
        >
          <FaWhatsappSquare />
        </OutboundLink>
        <OutboundLink
          rel="noopener noreferrer"
          target="_blank"
          href="https://t.me/ehsangazar"
        >
          <FaTelegram />
        </OutboundLink>
        <OutboundLink
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/ehsangazar/"
        >
          <IoLogoInstagram />
        </OutboundLink>
        <OutboundLink
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/gazar/"
        >
          <IoLogoLinkedin />
        </OutboundLink>
        <OutboundLink
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.youtube.com/channel/UC-NKQJ0bsHTXS_PzYCSvVUQ"
        >
          <IoLogoYoutube />
        </OutboundLink>
      </div>

      <div className="footer__copyright">
        <h5 className="--noMargin">Ehsan Gazar ©</h5>
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
    </footer>
  )
}

export default Footer
