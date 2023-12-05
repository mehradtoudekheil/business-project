import React from 'react';
import { useContext } from 'react';
import MyContext from "./../../../context/MyContext";
import galleryImage1 from './../../../../img/about.jpg';
import galleryImage2 from "./../../../../img/banner1.jpg";


const GalleryManage = () => {

const info = useContext(MyContext);


    return (
        <div>
            <h3 className='pt-5 text-center'>
                مدیریت گالری
            </h3>
            <div className='w-100 mt-4 d-flex justify-content-center'>
                <table className='gallery-setting-table'>
                    <thead>
                        <tr>
                            <th className='gallery-table-th'>آیدی</th>
                            <th className='gallery-table-th'>تصویر</th>
                            <th className='gallery-table-th'>آدرس</th>
                            <th className='gallery-table-th'>آلت</th>
                            <th className='gallery-table-th'>اصلی</th>
                            <th className='gallery-table-th'>ویرایش</th>
                            <th className='gallery-table-th'>حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            info.galleryItems.map(item=>{
                               return (
                                <tr key={item.id}>
                                <td className='gallery-table-th'>{item.id}</td>
                                <td className='gallery-table-th'>
                                    <img src={item.src} className="gallery-table-image" alt="" />
                                </td>
                                <td className='gallery-table-th'>{item.src}</td>
                                <td className='gallery-table-th'>متن alt</td>
                                <td className='gallery-table-th'>
                                    {item.main ? "yes" : "no"}
                                </td>
                                <td className='gallery-table-th'>
                                    <button className='btn btn-primary'>Edit</button>
                                </td>
                                <td className='gallery-table-th'>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                               )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GalleryManage;