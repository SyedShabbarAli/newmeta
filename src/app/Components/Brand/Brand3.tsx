const Brand3 = () => {

        const chooseContent = [
        {img:'/assets/brand-logo/DalInnovates_2023-DzzngbPp.webp'},                         
        {img:'/assets/brand-logo/MCE-C1FK3Bdc.webp'},                         
        {img:'/assets/brand-logo/Medtech-Dcl14M2B.png'},                         
        {img:'/assets/brand-logo/NL-DbqNmfkK.webp'},                         
        {img:'/assets/brand-logo/download.webp'},                         
        {img:'/assets/brand-logo/genesis-BDdNM6op.webp'},                         
        {img:'/assets/brand-logo/mitacs-DVbLWvkK.webp'},                         
        {img:'/assets/brand-logo/nrc-vOIxbf_i.webp'},                         
      ]; 

    return (
<section className="cs_brands_slider">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_center cs_mb_25">
          <h3 className="cs_brand_title cs_fs_20 text-capitalize mb-0">Millions of clients trust us.</h3>
        </div>
        <div className="cs_horizontal_slider_wrapper">
          <div className="cs_slider_in">
            <div className="cs_brands_list">
            {chooseContent.map((item, i) => (
              <div key={i} className="cs_center">
               <img src={item.img} alt="brand-img" />
              </div>
                ))}
            </div>
            <div className="cs_brands_list">
            {chooseContent.map((item, i) => (
              <div key={i} className="cs_center">
               <img src={item.img} alt="brand-img" />
              </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Brand3;