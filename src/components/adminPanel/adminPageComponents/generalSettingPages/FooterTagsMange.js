import React from 'react';
import { useContext } from 'react';
import MyContext from '../../../context/MyContext'

const FooterTagsManage = () => {

    const info = useContext(MyContext);

    return (
        <div>
            <h3 className='p-5 text-center'>تگ های فوتر</h3>
          
            <div className='d-flex justify-content-center w-100'>
            <table className='admin-footer-tags-table'>
                <thead>
                    <tr>
                        <th className='admin-footer-tags-th'>آیدی</th>
                        <th className='admin-footer-tags-th'>عنوان</th>
                        <th className='admin-footer-tags-th'>آدرس</th>
                        <th className='admin-footer-tags-th'>ویرایش</th>
                        <th className='admin-footer-tags-th'>حذف</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        info.footerTags.map(item=>{
                            return(
                                <tr key={item.id}>
                                    <td className='admin-footer-tags-td'>{item.id}</td>
                                    <td className='admin-footer-tags-td'>{item.title}</td>
                                    <td className='admin-footer-tags-td'>{item.href}</td>
                                    <td className='admin-footer-tags-td'>
                                        <button className='footer-tags-edit-btn btn btn-primary'>Edit</button>
                                        </td>
                                    <td className='admin-footer-tags-td'>
                                        <button className='footer-tags-delete-btn btn btn-danger'>Delete</button>
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

export default FooterTagsManage;