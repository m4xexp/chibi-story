import React, { useState, useEffect } from "react";
import Gallery from "../Gallery";
import axios from "axios";

function Chiblis() {
  const chiblis = [
    {
      title: "Asleep Chibli",
      thumbnailUrl:
        "https://res.cloudinary.com/khaokruacooking/image/upload/v1610773824/image/asleep-chibli_k6iez5.jpg?fbclid=IwAR2JhpzZl_zWKNqg-1yS3LhtagiDBuX362RA1xUoz7huFNM4yxnpYZtWlxo",
      date: "12/12/2020",
      story: "เจ้าอ้วนกำลังง่วงพอดี เลยคว้ามือถือมาถ่ายไว้ได้ทัน",
    },
    {
      title: "Happy Chibli",
      thumbnailUrl:
        "https://res.cloudinary.com/khaokruacooking/image/upload/v1610773824/image/socute-chibli_tbfsdi.jpg?fbclid=IwAR2gWnLzlWGQRfpONjk8qdm3zCdhC2UJYkCJlFz7Y_XFAmBBO2qCZR368IU",
      date: "12/12/2020",
      story:
        "เจ้าตัวกำลังนอนเล่นบนกระเป๋าอย่างมีความสุข เลยเรียกไปรอบนึง ก่อนที่จะถ่ายไว้",
    },
    {
      title: "On the Bag",
      thumbnailUrl:
        "https://res.cloudinary.com/khaokruacooking/image/upload/v1610773824/image/god-chibli_mx6mkf.jpg?fbclid=IwAR1dw-7qr-1cgFNBqzj6zcX1yO0wRJtBuyzaHhGnCFQriA75B0qqicdKnPQ",
      date: "12/12/2020",
      story:
        "เป็นประจำของทุกวันที่จะมานอนบนกระเป๋าใบนี้ ซึ่งวันนี้ก็เช่นกัน พร้อมนอนในท่ามือแนบลำตัว",
    },
    {
      title: "Cuties Chibli ",
      thumbnailUrl:
        "https://res.cloudinary.com/khaokruacooking/image/upload/v1610773824/image/smart-chibli_qhmwps.jpg?fbclid=IwAR2N61-5-4d0zQfUk0xh1s3t_0eBE7LyEOSr7bSqDt9Z25F_TmAoN3j1tv4",
      date: "12/12/2020",
      story:
        "กำลังง่วงๆ ซึมๆ เลยยิบกล้องใหญ่ขึ้นมา แล้วเรียก เจ้าตัวก็เลยหันมาแบบงงๆ",
    },
  ];

  const [addStory, setAddStory] = useState({});

  axios({
    method: "get",
    url: "http://localhost:5000/story",
  })
    .then((res) => {

      chiblis.push(res.data[0]);
      console.log("This is new Chibli", chiblis);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <div>
      <Gallery chiblis={chiblis} />
    </div>
  );
}

export default Chiblis;
