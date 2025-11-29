import Image from "next/image";

const Cta1 = () => {
    return (
<section className="cs_cta cs_style_1">
      <div className="cs_cta_content_wrapper cs_accent_bg cs_radius_30 cs_bg_filed" data-src="assets/img/cta-bg-1.svg">
        <div className="cs_height_60 cs_height_lg_60"></div>
        <div className="container">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="cs_cta_thumbnail">
                <Image src="/assets/factory-engineers-refining-production-layouts-using-tablet.jpg" alt="Factory engineers refining production layouts" width={536} height={377}   />   
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="cs_cta_text">
                <h2 className="cs_fs_48 cs_semibold cs_white_color cs_mb_20 text-capitalize wow fadeInDown">MetaCrust's Acknowledgement</h2>
                <p className="cs_white_color cs_mb_15">Supported by leading innovation partners.</p>
                <p className="cs_white_color cs_mb_33">
                  MetaCrust acknowledges the generous support of Canada’s foremost innovation and funding organizations. Their backing helps us bring secure, energy-efficient monitoring to every low-powered device—without compromising performance or compliance.
                </p>
             
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_60 cs_height_lg_60"></div>
      </div>
    </section>
    );
};

export default Cta1;