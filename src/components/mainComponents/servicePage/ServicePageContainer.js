import React from 'react';
import serviceImg from '../../../img/about.jpg';
import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import ServiceItem from '../homePage/itemsC/ServiceItem';


const ServicePageContainer = () => {

    const info = useContext(MyContext);

    return (
        <section className=''>
        <div className='d-flex flex-wrap py-3'>
            <div className='col-12 col-md-6 p-1' >
            <div className='service-info d-flex justify-content-center'>
                <p className='service-text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </div>
            </div>
            <div className='col-12 col-md-6 p-1' >
            <div className='d-flex justify-content-center'>
                <img src={serviceImg} className="service-img" alt="" />
            </div>
            </div>
        </div>
        <div className='d-flex flex-wrap pb-5'>
            {
                info.serviceItems.map(item=>{
                    return <ServiceItem key={item.id} title={item.title} text={item.text} src={item.src}/>
                })
            }
        </div>
        </section>
    );
};

export default ServicePageContainer;