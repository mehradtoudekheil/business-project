import React from 'react';
import { useContext } from 'react';
import MyContext from "./../../../context/MyContext";


const AwardsManage = () => {

const inifo = useContext(MyContext);

    return (
        <div>
           <h3 className='pt-5 text-center'>مدیریت آیتم های دستاورد و مجوز ها </h3>
           <div className='d-flex justify-content-center w-100 mt-5'>
            <table className='awards-setting-table'>
                <thead>
                    <tr>
                        <th className='awards-setting-th'>آیدی</th>
                        <th className='awards-setting-th'>عنوان</th>
                        <th className='awards-setting-th'>عکس</th>
                        <th className='awards-setting-th'>متن alt</th>
                        <th className='awards-setting-th'>ویرایش</th>
                        <th className='awards-setting-th'>حذف</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inifo.awardItems.map(item=>{
                            return (
                                <tr key={item.id}>
                                    <td className='awards-setting-td'>{item.id}</td>
                                    <td className='awards-setting-td'>{item.title}</td>
                                    <td className='awards-setting-td'>{item.src}</td>
                                    <td className='awards-setting-td'>alt text</td>
                                    <td className='awards-setting-td'>
                                        <button className='btn btn-primary'>Edit</button>
                                    </td>
                                    <td className='awards-setting-td'>
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

export default AwardsManage;