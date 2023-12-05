import React from 'react';

const AddAwards = () => {
    return (
        <div>
           <h3 className='pt-5 text-center'> 
            افزودن آیتم به صفحه درباره ما
           </h3>
           <div className='w-100 d-flex justify-content-center mt-5'>
                <form className="awards-form col-10 col-md-4">
                    <div className="form-group">
                        <label htmlFor="awardsTitleInput">عنوان :</label>
                        <input type="text"  placeholder='عنوان : ' id='awardsTitleInput' className='form-control mt-2'/>
                    </div>
                    <div className="form-group my-4">
                        <label htmlFor="awardsAltTextInput"> متن alt : </label>
                        <input type="text"  placeholder='alt متن : ' id='awardsAltTextInput' className='form-control mt-2'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="awardsImgInput">آپلود عکس :</label>
                        <input type="file" id='awardsImgInput' className='form-control my-4'/>
                    </div>
                    <button className='btn btn-success w-100'>افزودن</button>
                </form>
            </div>
        </div>
    );
};

export default AddAwards;