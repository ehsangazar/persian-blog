import "./App.css";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaRegWindowRestore,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Container maxW="2xl">
        <Box display={"flex"} py={4}>
          <Wrap>
            <WrapItem>
              <Avatar
                size={["lg", "2xl"]}
                name="احسان گازار"
                src="./ehsan-gazar-wrist-up.jpg"
              />{" "}
            </WrapItem>
          </Wrap>
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            px={4}
          >
            <Heading as="h1" size={["xl", "3xl"]} pb={2}>
              احسان گازار
            </Heading>
            <Text>برنامه‌نویس، مدرس، بلاگر و صخره نورد</Text>
          </Box>
        </Box>
        <Box py={4}>
          <Text textAlign={"justify"}>
            برنامه‌نویسی رو از ۱۷ سالگی با QBasic شروع کردم و بعد رفتم سراغ C. و
            بعد C++. از جاوا خیلی خوشم میومد اما علاقه‌ی زیادی به برنامه‌نویسی
            وب داشتم. چندین سایت برای سرگرمی با HTML، CSS و JavaScript نوشتم.
            اما کافی نبود، تصمیم گرفتم که در دانشگاه خواجه نصیر سخت افزار بخونم.
            Assembly و رباتیک فوق‌العاده بودن. الگوریتم‌ها و هوش مصنوعی هم
            همینطور. دوباره مشغول PHP و تمام فریم‌ورک‌های آن شدم، مدارک
            ماکروسافت و MCSE رو گذروندم JQuery یک پدیده بود و بعد Ruby on Rails.
            ویندوز یا لینوکس؟ Mac OS, Debian, Fedora. پایتون چیست؟ و دوباره وقت
            آن رسید که از JavaScript استفاده کنم. تبدیل به Full Stack JavaScript
            Developer شدم, Dojo Toolkit, Backbone یا AngularJS یا شایدم React.
            React برنده شد. انگولار ورژن ۲ شد و Ember به خودش اومد و حالا Vue
            حرفی برای گفتن داره. React Native؟ برنامه‌نویسی NodeJs یا شایدم کلا
            DevOps Engineer؟ اما الان بیش از هر چیزی AWS.
          </Text>
          <Text textAlign={"justify"}>
            این زندگی من در دهه‌ی گذشته بوده و برنامه دارم یک دهه دیگه با همین
            سرعت ادامه بدم. در حال حاضر در ملبورن استرالیا در یکی از بهترین
            شرکت‌های اینجا به عنوان Engineering Lead کار میکنم
          </Text>
          <Text textAlign={"justify"}>
            همیشه به یاد دادن علاقه‌‌مند بودم و الان فرصتی رو پیدا کردم که برای
            شما دوره‌هایی رو آماده کنم که عقیده دارم کیفیت آن‌ها شما رو غافل‌گیر
            خواهد کرد. یکی از ویژگی‌های من تشویق و ترغیب دوستان برای رسیدن به
            اهدافشون هست و امیدوارم بتونم کمکی در جهت یادگیری شما باشم.
          </Text>
          <Text textAlign={"justify"}>
            اگر حرفه‌ای هستید، یا در حال یادگیری، خوشحال میشم ایمیل یا پیامی از
            شما در شبکه‌های اجتماعی بگیرم و گپی بزنیم.
          </Text>
          <Text textAlign={"justify"}>
            اگر هم می‌خواید رزومه‌ی من رو ببینید سری به بزنید
          </Text>
          <Box pt={8}>
            <div className="video-container">
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/TfxrwU8CYs0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              ></iframe>
            </div>
          </Box>
          <Box
            py={8}
            display="grid"
            gridGap={4}
            gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
          >
            <Link
              className="button-link"
              href="https://www.facebook.com/ehsan.gzr"
              isExternal
            >
              <Button
                w={"100%"}
                colorScheme="facebook"
                leftIcon={<FaFacebook />}
              >
                Facebook
              </Button>
            </Link>
            <Link
              className="button-link"
              href="https://www.linkedin.com/in/gazar/"
              isExternal
            >
              <Button
                w={"100%"}
                colorScheme="linkedin"
                leftIcon={<FaLinkedin />}
              >
                Linkedin
              </Button>
            </Link>
            <Link
              className="button-link"
              href="https://twitter.com/ehsangazar"
              isExternal
            >
              <Button w={"100%"} colorScheme="twitter" leftIcon={<FaTwitter />}>
                Twitter
              </Button>
            </Link>
            <Link
              className="button-link"
              href="https://www.instagram.com/ehsangazar/"
              isExternal
            >
              <Button w={"100%"} colorScheme="red" leftIcon={<FaInstagram />}>
                Instagram
              </Button>
            </Link>
            <Link
              className="button-link"
              href="mailto:me@ehsangazar.com"
              isExternal
            >
              <Button
                w={"100%"}
                colorScheme="green"
                leftIcon={<FaRegWindowRestore />}
              >
                Email
              </Button>
            </Link>
          </Box>
        </Box>
        <Box pt={12}>
          <Heading as="h2" size="xl" pb={4}>
            پرشیا جی‌اس
          </Heading>
          <Text textAlign={"justify"}>
            کامیونیتی و گروهی برای برنامه‌نویسان فارسی زبان که من و سایر دوستان
            در آن فعال هستیم، به سوالات شما پاسخ می‌دهیم و طی جلساتی ماهانه راجب
            موضوعات متفاوت صحبت می‌کنیم
          </Text>
          <Text textAlign={"justify"}>
            این گروه فرصت مناسبی است که چه به عنوان حرفه‌ای و چه فردی که تنها
            علاقه‌مند به برنامه‌نویسی است، وارد آن شوید و با شرکت در برنامه‌های
            مختلف به یکدیگر کمک کنیم.
          </Text>
          <Text textAlign={"justify"}>
            لطفا برای دریافت اطلاعات بیشتر عضو Discord گروه شوید
          </Text>
          <Box
            py={8}
            display="grid"
            gridGap={4}
            gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
          >
            <Link
              className="button-link"
              href="https://persiajs.dev/"
              isExternal
            >
              <Button w={"100%"} colorScheme="orange" leftIcon={<FaLink />}>
                Website
              </Button>
            </Link>
            <Link
              className="button-link"
              href="https://discord.gg/sN2dkKaG3D"
              isExternal
            >
              <Button w={"100%"} colorScheme="purple" leftIcon={<FaDiscord />}>
                Discord
              </Button>
            </Link>
            <Link
              className="button-link"
              href="https://www.youtube.com/c/PersiaJS"
              isExternal
            >
              <Button w={"100%"} colorScheme="red" leftIcon={<FaYoutube />}>
                Youtube
              </Button>
            </Link>
            <Link
              className="button-link"
              href="https://www.instagram.com/persiajs.dev/"
              isExternal
            >
              <Button w={"100%"} colorScheme="red" leftIcon={<FaInstagram />}>
                Instagram
              </Button>
            </Link>
          </Box>
        </Box>
        <Box pt={12}>
          <Heading as="h2" size="xl" pb={4}>
            دوره‌های آموزشی
          </Heading>
          <Text textAlign={"justify"}>
            به عنوان یک برنامه‌نویس، شخصی که سال‌ها برنامه‌نویسی کرده است و هنوز
            به این کار مشغول است، و به عنوان کسی که سال‌ها مسئول توسعه
            توانایی‌های برنامه‌نویسان دیگر در سطح شرکت، کامیونیتی و یا
            سخنرانی‌ها بوده است، دوره‌هایی را با هدف آشنایی شما با مباحث مختلف و
            حرفه‌ای تر شدن آماده کرده‌ام.
          </Text>
          <Text textAlign={"justify"}>
            در این دوره‌ها تلاش داشته‌ام نشان دهم که چطور جستجو کنید، چطور
            Documentation ها را بخوانید و چطور دستورات را کپی کرده و جواب سوالات
            خود را پیدا کنید. ضمن آنکه محتوای دوره‌ها را به روز نگه می‌دارم
            امیدوارم جز یادگیری ترفند‌های ابزار‌های مختلف، روش تفکری یک
            برنامه‌نویس را یاد بگیرید.
          </Text>
          <Text textAlign={"justify"}>
            من از دانشجویان خود انتظار دارم، زمان زیادی را به کد زدن بپردازند،
            در کامیونیتی persiajs.dev به عناوین مختلف فعال باشند و فراموش نکنند
            که یک برنامه‌نویس حرفه‌ای کسی است که توانایی توضیح و یاددهی به
            دیگران را نیز دارد.
          </Text>
          <Accordion py={8} allowMultiple>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                <Box flex="1" textAlign="right">
                  دوره آنلاین آموزش طراحی وب‌سایت (Front-End)
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bgColor="gray.100">
                <div className="video-container">
                  <video width="320" height="240" controls>
                    <source
                      src="https://video-resolver.maktabkhooneh.org/videos/5132185349256164.mp4?expire=1668050953&token=69b332f2155f29302beaedb1aa08eb0a&md5=abMy8hVfKTAr6u2xqgjrCg=="
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <Text textAlign={"justify"} py={4}>
                  می‌خواهید وارد دنیای وب شوید، بهترین دوره برای شروع پایه‌های
                  برنامه‌نویسی تحت وب در این دوره آموزش داده می‌شود و این درگاهی
                  است برای شما تا یک وب‌سایت طراحی کنید.
                </Text>
                <Box
                  py={8}
                  display="grid"
                  gridGap={4}
                  gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
                >
                  <Link
                    href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D9%88%D8%A8%D8%B3%D8%A7%DB%8C%D8%AA-front-end-mk1658/"
                    isExternal
                  >
                    <Button w={"100%"} colorScheme="teal" leftIcon={<FaLink />}>
                      آموزش طراحی وب‌سایت (Front-End)
                    </Button>
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                <Box flex="1" textAlign="right">
                  دوره آنلاین آموزش React JS مقدماتی
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bgColor="gray.100">
                <div className="video-container">
                  <iframe
                    width="300"
                    height="160"
                    src="https://www.youtube.com/embed/qCoTdTqDbVk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  ></iframe>
                </div>
                <Text textAlign={"justify"} py={4}>
                  دانش CSS و HTML خوبی دارید؟ می‌توانید با این دوره برنامه‌نویسی
                  تحت وب را سریع تر پیش ببرید و بعد در دوره‌های دیگر تخصصی شوید.
                </Text>
                <Box
                  py={8}
                  display="grid"
                  gridGap={4}
                  gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
                >
                  <Link
                    href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%85%D9%82%D8%AF%D9%85%D8%A7%D8%AA%DB%8C-react-js-mk1127/"
                    isExternal
                  >
                    <Button w={"100%"} colorScheme="teal" leftIcon={<FaLink />}>
                      آموزش React JS مقدماتی
                    </Button>
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                <Box flex="1" textAlign="right">
                  دوره آنلاین آموزش جاوا اسکریپت
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bgColor="gray.100">
                <div className="video-container">
                  <iframe
                    width="300"
                    height="160"
                    src="https://www.youtube.com/embed/zcL632_70_o"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  ></iframe>
                </div>
                <Text textAlign={"justify"} py={4}>
                  اگر کمی با HTML و CSS آشنا باشید و می‌دانید چطور یک وب‌سایت
                  کار می‌کند، وقت آن است که تمامی ویژگی‌های جاوا اسکریپت را مرور
                  کنید، مطمئنا دوره‌ای است که علاوه بر تمرین‌ها می‌بایست چندین
                  بار طی ماه‌های متوالی ببینید و از دستورات آن استفاده کنید
                </Text>
                <Box
                  py={8}
                  display="grid"
                  gridGap={4}
                  gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
                >
                  <Link
                    href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA-mk1122/"
                    isExternal
                  >
                    <Button w={"100%"} colorScheme="teal" leftIcon={<FaLink />}>
                      آموزش جاوا اسکریپت
                    </Button>
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                <Box flex="1" textAlign="right">
                  دوره آنلاین آموزش Node JS
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bgColor="gray.100">
                <div className="video-container">
                  <iframe
                    width="300"
                    height="160"
                    src="https://www.youtube.com/embed/9UpUjEm7Jxc"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  ></iframe>
                </div>
                <Text textAlign={"justify"} py={4}>
                  جاوااسکریپت تنها به فرانت اند محدود نمی‌شود، می‌خواهید پا به
                  دنیای بک‌اند بگذارید این دوره با مفاهیم زیادی شما را آشنا
                  می‌کند. مطمئنا دنیای بک‌اند پیچیدگی‌های زیادی دارد و این دوره
                  ضمن یادگیری آسان‌ترین و بهترین روش، ذهن شما را به سوالات زیادی
                  برای ادامه‌ی تخقیقات و یادگیری‌های بیشتر باز می‌‌کند
                </Text>
                <Box
                  py={8}
                  display="grid"
                  gridGap={4}
                  gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
                >
                  <Link
                    href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA-mk1122/"
                    isExternal
                  >
                    <Button w={"100%"} colorScheme="teal" leftIcon={<FaLink />}>
                      آموزش Node JS
                    </Button>
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                <Box flex="1" textAlign="right">
                  دوره آنلاین آموزش React Native
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bgColor="gray.100">
                <div className="video-container">
                  <iframe
                    width="300"
                    height="160"
                    src="https://www.youtube.com/embed/SWxhdCGrRaI"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  ></iframe>
                </div>
                <Text textAlign={"justify"} py={4}>
                  جاوا‌اسکریپت محدود به وب نمی‌شود و این دوره به شما یاد می‌دهد
                  چطور یک برنامه‌ی Native برای اندروید یا ios بنویسید
                </Text>
                <Box
                  py={8}
                  display="grid"
                  gridGap={4}
                  gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
                >
                  <Link
                    href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-react-native-mk1419/"
                    isExternal
                  >
                    <Button w={"100%"} colorScheme="teal" leftIcon={<FaLink />}>
                      آموزش React Native
                    </Button>
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                <Box flex="1" textAlign="right">
                  دوره آنلاین آموزش React JS پیشرفته
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bgColor="gray.100">
                <div className="video-container">
                  <iframe
                    width="300"
                    height="160"
                    src="https://www.youtube.com/embed/iAz80SZkc1g"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  ></iframe>
                </div>
                <Text textAlign={"justify"} py={4}>
                  یک قدم فراتر بروید، خودتان را دانش‌های React و ساختار‌های
                  پیشرفته و پیچیده تر آشنا کنید. بیشتر دست به کد شوید و
                  پروژه‌های بزرگتری توسعه دهید. دوره‌ای که دانش شما را در دنیای
                  قرانت اند بسیار پیشرفت خواهد داد، دوستان در این دوره یاد
                  میگیرند چطور دنیای فرانت اند را ببینند و در انتها بسیاری از
                  نکات ریز را یاد خواهند گرفت
                </Text>
                <Box
                  py={8}
                  display="grid"
                  gridGap={4}
                  gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
                >
                  <Link
                    href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87-%D8%B1%DB%8C-%D8%A7%DA%A9%D8%AA-mk1128/"
                    isExternal
                  >
                    <Button w={"100%"} colorScheme="teal" leftIcon={<FaLink />}>
                      آموزش React JS پیشرفته
                    </Button>
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                <Box flex="1" textAlign="right">
                  دوره آنلاین آموزش کد تمیز
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bgColor="gray.100">
                <div className="video-container">
                  <iframe
                    width="300"
                    height="160"
                    src="https://www.youtube.com/embed/fXCnDTDYMjY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                  ></iframe>
                </div>
                <Text textAlign={"justify"} py={4}>
                  دوره‌ای که حاصل تجربه و نتایج کتاب‌هایی است که برای نوشتن کد
                  تمیز تهیه شده تا به شما بهترین تجربه‌ی برنامه‌نویسی را یاد
                  دهد. این دوره را چندین بار می‌بایست ببینید، تمارین آن بسیار
                  سخت هستند و می‌بایست دقت زیادی در تمیزی کد خود داشته باشید
                </Text>
                <Box
                  py={8}
                  display="grid"
                  gridGap={4}
                  gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
                >
                  <Link
                    href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-Clean-Code-mk1125/"
                    isExternal
                  >
                    <Button w={"100%"} colorScheme="teal" leftIcon={<FaLink />}>
                      آموزش کد تمیز
                    </Button>
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box pt={12}>
          <Heading as="h2" size="xl" pb={4}>
            سخنرانی‌ها
          </Heading>
          <Text textAlign={"justify"}>
            این‌ها لیستی از سخنرانی‌‌هاست که در طی سال‌ها ارائه کرده ام و اگر
            علاقه مندین در دانشگاه شما یا شرکت شما نیز نقشی داشته باشم، لطفا از
            طریق راه‌های ارتباطی من یک پیغام برایم بفرستید.
          </Text>
          <Box>
            <Heading as="h3" size="md" pb={4} py={4}>
              انگلیسی
            </Heading>
            <UnorderedList className="direction-ltr">
              <ListItem className="direction-ltr">
                Shortcut To Leadership after Pat Kua Course, 2022
              </ListItem>
              <ListItem className="direction-ltr">
                How to be effecting in engineering meetings 2022
              </ListItem>
              <ListItem className="direction-ltr">
                Culture of Remote working 2022
              </ListItem>
              <ListItem className="direction-ltr">
                How to be effecting in engineering meetings 2022
              </ListItem>
              <ListItem className="direction-ltr">
                How to be an effective software engineering leader 2022
              </ListItem>
              <ListItem className="direction-ltr">
                How to Learn, How to Teach for engineers 2022
              </ListItem>
              <ListItem className="direction-ltr">
                How to present a talk, soft skill for engineers 2022
              </ListItem>
              <ListItem className="direction-ltr">
                How to Write, soft skill for engineers 2021
              </ListItem>
              <ListItem className="direction-ltr">
                Serverless and How to develop with Kinesis AWS in BetEasy
              </ListItem>
              <ListItem className="direction-ltr">
                Progressive Web App in CHE Proximity Meetup, Melbourne, 2018
              </ListItem>
              <ListItem className="direction-ltr">
                ElasticSearch in NodeJs Meetup, Melbourne, 2018
              </ListItem>
              <ListItem className="direction-ltr">
                General issues in engineering management 2018
              </ListItem>
              <ListItem className="direction-ltr">Git Flow 2018</ListItem>
              <ListItem className="direction-ltr">
                NodeJs Frameworks in NodeJs Meetup, Melbourne, 2018
              </ListItem>
              <ListItem className="direction-ltr">
                Software Architecture in CHE Proximity Meetup, Melbourne, 2017
              </ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Heading as="h3" size="md" pb={4} py={4}>
              فارسی
            </Heading>
            <UnorderedList>
              <ListItem>
                معرفی دنیای فرا‌انت - انجمن علمی دانشگاه قم سال ۲۰۲۲
              </ListItem>
              <ListItem>
                تفاوت GraphQL و Rest در شرکت RoundTableApps سال ۲۰۱۶
              </ListItem>
              <ListItem>
                تجربه‌ی من در استفاده از Angular 2 سال ۲۰۱۶ در TehranJS
              </ListItem>
              <ListItem>Domain Driven Design چیست در نت‌برگ سال ۲۰۱۵</ListItem>
              <ListItem>Scrum چیست سال ۲۰۱۵ در نت‌برگ</ListItem>
            </UnorderedList>
          </Box>
        </Box>
        <Box pt={12}>
          <Heading as="h2" size="xl" pb={4}>
            بررسی کد و تصحیح پروژه
          </Heading>
          <Text textAlign={"justify"}>
            تمرین‌های شما توسط منتور و یا توسط خود من تصحیح خواهد شد. و یا
            می‌توانید پروژه ی خود را در قالبی برای من ارسال کنید و من برای شما
            آن را بررسی کنم. اکثر موارد از سیستم loom استفاده میکنم که می‌توانید
            در زیر چند مثال از تمارین دوستانتان که توسط من بررسی شده‌اند را
            ببینید.
          </Text>
          <UnorderedList py={8}>
            <ListItem>
              <Link
                href="https://loom.com/share/folder/4aa3a36129754655b244f1d5eed86e1b"
                isExternal
                color={"teal.500"}
              >
                سوالات عمومی
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://loom.com/share/folder/604f3c4d913649eca22e75433fa99c06"
                isExternal
                color={"teal.500"}
              >
                دوره React مقدماتی
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://loom.com/share/folder/378bd5ad1306486ba18cfc433cb36003"
                isExternal
                color={"teal.500"}
              >
                دوره جاوااسکریپت
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://loom.com/share/folder/0c68306f776542f0993bef5ab6551284"
                isExternal
                color={"teal.500"}
              >
                دوره React پیشرفته
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://loom.com/share/folder/ffd6584fa7024d82aac3b0ec171ca74d"
                isExternal
                color={"teal.500"}
              >
                دوره NodeJS
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://loom.com/share/folder/724f8826533142aa9c40af569efff9e9"
                isExternal
                color={"teal.500"}
              >
                دوره React Native
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://loom.com/share/folder/88000ac35e2341be99971dbe06b3095d"
                isExternal
                color={"teal.500"}
              >
                دوره کد تمیز
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box pt={12}>
          <Heading as="h2" size="xl" pb={4}>
            خبرنامه
          </Heading>
          <Text textAlign={"justify"}>
            برای دریافت آخرین‌ها لطفا عضو خبرنامه شوید، ایمیل خود را تایید کنید
            و آپدیت دوره‌ها و مطالب را دریافت کنید.
          </Text>
          <Box height={["700px", "500px"]}>
            <iframe
              title="Newsletter"
              width="100%"
              height="100%"
              src="https://902d9b13.sibforms.com/serve/MUIEAF3xYIBE2X-F64JG3PsFo4MbB2NLOn_MZmmL2tcTCIQWmbvp_oFGEJQyUdj8KHIQXGizoidEbKkO2mORWgFsBhhFEZbWwxosO6ag2OYVD1Z6Qocj-RII98dkwbUwz2oIRbDD_ccm11uVi-Ef84CHF4nqW0ppRQosmoaUIzdsx_BgCZSw-jIyAB-DsN9tYhi19l9t4_WV1N2X"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
        <Box pt={12}>
          <Divider />
          <Box py={8}>
            <Text className="direction-ltr" textAlign={"center"}>
              ©ehsangazar
            </Text>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
