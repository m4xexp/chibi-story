import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogPost from "../components/BlogPost";

function BlogData() {
  // axios({
  //   method: "get",
  //   url: "http://localhost:5000/story",
  // })
  //   .then((res) => {
  //     setStory(res.data[0]);
  //     console.log("This is new Chibli", story);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  const [dataBlog, setDataBlog] = useState([
    {
      title: "ตำลึง! แมวนอนหลับมานานกว่า 50 นาที แต่สุดท้ายฟื้น",
      tag: "ชีวิตประจำวัน",
      thumbnailUrl:
        "https://res.cloudinary.com/khaokruacooking/image/upload/v1610773824/image/asleep-chibli_k6iez5.jpg?fbclid=IwAR2JhpzZl_zWKNqg-1yS3LhtagiDBuX362RA1xUoz7huFNM4yxnpYZtWlxo",
      date: "January 18, 2021",
      story: "เจ้าอ้วนกำลังง่วงพอดี เลยคว้ามือถือมาถ่ายไว้ได้ทัน",
    },
    {
      title: "Happy Chibli",
      tag: "ชีวิตประจำวัน",
      thumbnailUrl:
        "https://res.cloudinary.com/khaokruacooking/image/upload/v1610773824/image/socute-chibli_tbfsdi.jpg?fbclid=IwAR2gWnLzlWGQRfpONjk8qdm3zCdhC2UJYkCJlFz7Y_XFAmBBO2qCZR368IU",
      date: "12/12/2020",
      story:
        "เจ้าตัวกำลังนอนเล่นบนกระเป๋าอย่างมีความสุข เลยเรียกไปรอบนึง ก่อนที่จะถ่ายไว้",
    },
    {
      title: "On the Bag",
      tag: "ชีวิตประจำวัน",
      thumbnailUrl:
        "https://res.cloudinary.com/khaokruacooking/image/upload/v1610773824/image/god-chibli_mx6mkf.jpg?fbclid=IwAR1dw-7qr-1cgFNBqzj6zcX1yO0wRJtBuyzaHhGnCFQriA75B0qqicdKnPQ",
      date: "12/12/2020",
      story:
        "เป็นประจำของทุกวันที่จะมานอนบนกระเป๋าใบนี้ ซึ่งวันนี้ก็เช่นกัน พร้อมนอนในท่ามือแนบลำตัว",
    },
    {
      title: "Cuties Chibli ",
      tag: "ชีวิตประจำวัน",
      thumbnailUrl:
        "https://res.cloudinary.com/khaokruacooking/image/upload/v1610773824/image/smart-chibli_qhmwps.jpg?fbclid=IwAR2N61-5-4d0zQfUk0xh1s3t_0eBE7LyEOSr7bSqDt9Z25F_TmAoN3j1tv4",
      date: "12/12/2020",
      story:
        "กำลังง่วงๆ ซึมๆ เลยยิบกล้องใหญ่ขึ้นมา แล้วเรียก เจ้าตัวก็เลยหันมาแบบงงๆ",
    },
    {
      _id: "600458f017fadb1d5f458748",
      tag: "ชีวิตประจำวัน",
      createdAt: "2021-01-17T15:34:08.060Z",
      date: "2021-01-17T02:22:49.052Z",
      story:
        "กล่องอัลบั้ม BTS ที่คุณนายเพิ่งซื้อมาใหม่ มันหอมขนาดที่ต้องเข้าไปหลับซักงีบ",
      thumbnailUrl:
        "https://res.cloudinary.com/khaokruacooking/image/upload/v1610890247/image/chibli-in-box-crop_gsbjds.jpg",
      title: "Chibli in the box",
      updatedAt: "2021-01-17T15:34:08.060Z",
    },
  ]);

  const Total = dataBlog.length;
  console.log("Length", Total);

  return (
    <div>
      <BlogPost blogs={dataBlog} total={Total} />
    </div>
  );
}

export default BlogData;
