import React from 'react';
import MyContext from "./../../../context/MyContext";
import { useContext } from 'react';
import { FaCheck, FaTimes, FaPen } from 'react-icons/fa'

const ServiceManage = () => {

    const info = useContext(MyContext);

    const hendleDelServiceItem = (e) => {
        let clickedItemId = e.target.dataset.id;
        let MyServiceItems = info.serviceItems;

        const itemIndex = MyServiceItems.findIndex(item => item.id == clickedItemId);
        console.log(itemIndex);
        if (itemIndex > -1) {
            MyServiceItems.splice(itemIndex, 1);
        }

        document.getElementById(`service-td-${clickedItemId}`).style.display = "none";

        info.setServiceItems(MyServiceItems);
        console.log(info.serviceItems);
    }


    const addMarkToService = (e) => {
        let clickedItemId = e.target.dataset.id;
        let myServiceItems = info.serviceItems;
        let markedItems = myServiceItems.filter(item => item.showInPage);
        if (markedItems.length >= 3) {
            alert("you cant mark above 3 number")
        } else {

            const itemIndex = myServiceItems.findIndex(item => item.id == clickedItemId);

            if (myServiceItems[itemIndex].showInPage) {
                alert("this item is true");
            } else {
                myServiceItems[itemIndex].showInPage = true;
                info.setServiceItems(myServiceItems);
                alert("item marked successfuly")
            }

        }
       
    }




    return (
        <div>
            <h2 className='admin-item-title p-3'>مدیریت آیتم های خدمات</h2>
            <hr />
            <h5 className='text-center pt-4'>آیتم های فعلی</h5>
            <div className='w-100 d-flex justify-content-center pt-4'>
                <table className='admin-service-table'>
                    <thead>
                        <tr>
                            <th className='service-admin-th'>آیدی</th>
                            <th className='service-admin-th'>تصویر</th>
                            <th className='service-admin-th'>عنوان</th>
                            <th className='service-admin-th'>متن</th>
                            <th className='service-admin-th'>نشانه گذاری</th>
                            <th className='service-admin-th'>|حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            info.serviceItems && info.serviceItems.map((item) => {
                                return (<tr id={`service-td-${item.id}`}>
                                    <td className='service-admin-td'>{item.id}</td>
                                    <td className='service-admin-td'>{item.src}
                                        <button className='service-admin-src-btn'>تغییر تصویر</button>
                                    </td>
                                    <td className='service-admin-td'>{item.title}<br />
                                        <button className='mt-3 service-admin-src-btn'>
                                            <FaPen />
                                        </button>
                                    </td>
                                    <td className='service-admin-td'>{item.text}
                                        <button className='mt-3 service-admin-src-btn'>
                                            <FaPen />
                                        </button></td>
                                    <td className='service-admin-td'>{item.showInPage ? "yes" : "no"}
                                        <div className='d-flex mt-2'>
                                            <button className='service-admin-check-button ms-3' >
                                                <FaCheck />
                                                <div  data-id={item.id} onClick={(e) => addMarkToService(e)} className="p-1">
                                                    p
                                                </div>
                                                </button>
                                            <button className='service-admin-times-button'><FaTimes /></button>
                                        </div>
                                    </td>
                                    <td className='service-admin-td'   >
                                        <button className='service-admin-trash-btn' data-id={item.id} onClick={(e) => hendleDelServiceItem(e)}>
                                            حذف
                                        </button>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceManage;