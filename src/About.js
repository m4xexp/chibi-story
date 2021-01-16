import React from 'react'

function About() {
    return (
        <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24" id="about">
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                <div className=" w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl m-20 md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 ">
                    <img src="https://res.cloudinary.com/khaokruacooking/image/upload/v1610773824/image/smart-chibli_qhmwps.jpg" className="" />
                </div>

                <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                    <h2 className="m-0 text-xl font-kanit font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        Chibli (จิบิ)
                    </h2>
                    <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg font-kanit font-medium">
                        ลูกแมวพันธุ์สก๊อตทิสโฟล์ด ผสม อเมริกันช็อตแฮร์
                    </p>
                    <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold font-kanit">✓</span></span> <span className="text-lg font-medium font-kanit">อายุ: 3 เดือน</span>
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold font-kanit">✓</span></span> <span className="text-lg font-medium font-kanit">เพศ: ชาย</span>
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold font-kanit">✓</span></span> <span className="text-lg font-medium font-kanit">น้ำหนัก: อ้วน!</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                    <h2 className="font-kanit m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl ">
                        แมวอ้วนแสนขี้เกียจ
            </h2>
                    <p className="font-kanit pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                        วันๆ เอาแต่นอนๆๆๆ แล้วก็กินๆๆๆ จนตัวอ้วนเกินอายุ!
            </p>
                    <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold font-kanit">✓</span></span> <span className="text-lg font-medium font-kanit">ขี้เล่นบางเวลา</span>
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold font-kanit">✓</span></span> <span className="text-lg font-medium font-kanit">คุณหนูมากๆ</span>
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold font-kanit">✓</span></span> <span className="text-lg font-medium font-kanit">เรียนรู้เร็ว</span>
                        </li>
                    </ul>
                </div>

                <div className=" w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 m-20">
                    <img src="https://res.cloudinary.com/khaokruacooking/image/upload/v1610820439/image/on-bed-chibli-2_gfnjje.jpg" className="" />
                </div>
            </div>
        </section>
    )
}

export default About
