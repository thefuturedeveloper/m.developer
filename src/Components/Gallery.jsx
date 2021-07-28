import React from 'react';
import ImageGallery from 'react-image-gallery';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img6.jpg';
import img7 from '../Images/img7.jpg';
import img8 from '../Images/img8.jpg';
import img9 from '../Images/img9.jpg';
import img10 from '../Images/img10.jpg';


const Gallery = () => {
    const images = [
        {original: img1,thumbnail: img1,thumbnailHeight:"100px",originalHeight:"455px",description:"All Friends after exam"},
        {original: img2 ,thumbnail:img2,thumbnailHeight:"100px",originalHeight:"455px",description:"In Events Hall"},
        {original: img3 ,thumbnail:img3,thumbnailHeight:"100px",originalHeight:"455px",description:"Friend giving treat after exam in deoband" },
        {original: img4,thumbnail: img4,thumbnailHeight:"100px",originalHeight:"455px",description:"Last exam of graduation"},
        {original: img5 ,thumbnail:img5,thumbnailHeight:"100px",originalHeight:"455px",description:"Event Day of college" },
        {original: img6 ,thumbnail:img6,thumbnailHeight:"100px",originalHeight:"455px",description:"College event day, with all friends & junior" },
        {original: img7,thumbnail: img7,thumbnailHeight:"100px",originalHeight:"455px",description:"Tiktok friend"},
        {original: img8 ,thumbnail:img8,thumbnailHeight:"100px",originalHeight:"455px",description:"Treat time" },
        {original: img9 ,thumbnail:img9,thumbnailHeight:"100px",originalHeight:"455px",description:"Gang in JBR"},
        {original: img10 ,thumbnail:img10,thumbnailHeight:"100px",originalHeight:"455px",description:"Gang in CLG"},
       
      ];
return(
    <>
       <div className="container-fluid my-2 main">
       <ImageGallery items={images} />
       </div>
    </>
)
}

export default Gallery;