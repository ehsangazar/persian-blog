---
title: کار با Async Await در جاوا اسکریپت
date: '2020-09-08'
description: 'کار با Async Await در جاوا اسکریپت'
videoSourceURL: https://www.youtube.com/embed/1jVXS8jVu_I
number: 1
videoTitle: 'کار با Async Await در جاوا اسکریپت'
cover: cover.png
comment: true
homepage: true
category: javascript
---

ویژگی‌ای جدیدتری از Promise ها که در اصل در ورژن بعد از ES6 مطرح شد اسمش هست Async Await.
<br />

در اصل همان Promise ها هستند ولی با ساختار متفاوتی تعریف می‌شوند و در نتیجه کدهای خیلی کمتری مینویسیم

<br />
مثلا در گذشته برای کار کردن با API ها می‌بایست از چند .then استفاده میکردیم که خب به مراتب ساختار رو می‌توانست پیچیده تر کنه.

```javascript
fetch('https://reqres.in/api/users/3')
  .then((response) => {
    response
      .json()
      .then((result) => console.log('result', result))
      .catch((error) => console.log('error', error))
  })
  .catch((error) => console.log('error', error))
```

<br />

ولی با استفاده از Async / Await میشه به راحتی با کدهای کمتری این مثلا رو نوشت و در نتیجه باعث افزایش خوانایی کد میشه.

<br />

```javascript
const fetchAPI = async () => {
  try {
    const response = await fetch('https://reqres.in/api/users/3')
    const result = await response.json()
  } catch (error) {
    console.log('error', error)
  }
}
```

<br />

جزئیات بیشتر را می‌توانید در ویدئو ببینید.

<br />

این یکی از ویدئو‌های
[آموزش جاوا اسکریپت (JavaScript)](https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA-mk1122/)
هست.
