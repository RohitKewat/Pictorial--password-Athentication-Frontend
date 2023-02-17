import { useState } from 'react';

// import SelectedImages from './SelectedImages';
const Password = () => {
    const [imageIds, setImageIds] = useState([]);
    console.log(imageIds);
    const handleImageClick = (imageId) => {
        setImageIds([...imageIds, imageId]); 
    }

    return (
        <>
            <div className="form-group position-relative mb-4">
                <input type="text" className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" hidden id="password" placeholder="Password" value={imageIds} required />
            </div>
            <div className="password">
                <div className="passimg" onClick={() => handleImageClick(1)} id="s01"><img src="images\10.png" alt="" className="patimg" /></div>
                <div className="passimg" onClick={() => handleImageClick(2)} id="s02"><img src="images\11.png" alt="" className="patimg" /></div>
                <div className="passimg" onClick={() => handleImageClick(3)} id="s03"><img src="images\12.png" alt="" className="patimg" /></div>
                <div className="passimg" onClick={() => handleImageClick(4)} id="s04"><img src="images\13.png" alt="" className="patimg" /></div>
                <div className="passimg" onClick={() => handleImageClick(5)} id="s05"><img src="images\14.png" alt="" className="patimg" /></div>
                <div className="passimg" onClick={() => handleImageClick(6)} id="s06"><img src="images\15.png" alt="" className="patimg" /></div>
                <div className="passimg" onClick={() => handleImageClick(7)} id="s07"><img src="images\16.png" alt="" className="patimg" /></div>
                <div className="passimg" onClick={() => handleImageClick(8)} id="s08"><img src="images\17.png" alt="" className="patimg" /></div>
                <div className="passimg" onClick={() => handleImageClick(9)} id="s09"><img src="images\18.png" alt="" className="patimg" /></div>
                <div className="passimg" onClick={() => handleImageClick(10)} id="s10"><img src="images\19.png" alt="" className="patimg" /></div>
                <div className="passimg" onClick={() => handleImageClick(11)} id="s11"><img src="images\20.png" alt="" className="patimg" /></div>
                <div className="passimg" onClick={() => handleImageClick(12)} id="s12"><img src="images\21.png" alt="" className="patimg" /></div>
                <div className="passimg" onClick={() => handleImageClick(13)} id="s13"><img src="images\22.png" alt="" className="patimg" /></div>
                <div className="passimg" onClick={() => handleImageClick(14)} id="s14"><img src="images\23.png" alt="" className="patimg" /></div>
                <div className="passimg" onClick={() => handleImageClick(15)} id="s15"><img src="images\24.png" alt="" className="patimg" /></div>
                {/* <SelectedImages imageIds={imageIds} /> */}
            </div>
        </>
    );
}
export default Password;