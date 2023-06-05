import css from "./block2.module.scss";
import cssB1 from "./block1.module.scss";
import { Col, Row } from "antd";
import Image from "next/image";
import { i1, i2, i3, i4, i5, i6 } from "../public/staticImage/index";
export function Block2() {
  return (
    <>
      <div
        className={css.reason}
        style={{ color: "black", backgroundColor: "white" }}
      >
        <div className={cssB1.content}>
          <Row>
            <Col span={24}>
              <h2 className={css.titleh2}>
                Trải nghiệm đầy đủ các tính năng cao cấp LogisForce{" "}
              </h2>
            </Col>
            <Row className={css.reasonWrap} gutter={[50, 30]}>
              <Col xs={24} sm={24} md={12}>
                <div className={css.reasonItem}>
                  <div className={css.reasonItemImg}>
                    <Image
                      decoding="async"
                      src={i1}
                      alt="Nâng cao năng suất"
                      className={css.imgResponsive}
                      data-ll-status="loaded"
                    />
                  </div>
                  <div className={css.reasonItemContent}>
                    {/* <div className={css.Iitle}>
                      Nâng cao{" "}
                      <span style={{ color: "#4262ef" }}>năng suất</span>
                    </div> */}
                    <div className={css.des}>
                      <div>
                        Quản lý thông tin khách hàng, đối tác và nhà cung cấp{" "}
                      </div>
                      {/* <div>Tự động tổng hợp báo cáo thuế, BCTC chính xác, </div> */}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <div className={css.reasonItem}>
                  <div className={css.reasonItemImg}>
                    <Image
                      decoding="async"
                      src={i2}
                      alt="Nâng cao năng suất"
                      className={css.imgResponsive}
                      data-ll-status="loaded"
                    />
                  </div>
                  <div className={css.reasonItemContent}>
                    {/* <div className={css.Iitle}>
                      Nâng cao{" "}
                      <span style={{ color: "#4262ef" }}>năng suất</span>
                    </div> */}
                    <div className={css.des}>
                      <div>Quản lý và in ấn báo giá</div>
                      {/* <div>Tự động tổng hợp báo cáo thuế, BCTC chính xác, </div> */}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <div className={css.reasonItem}>
                  <div className={css.reasonItemImg}>
                    <Image
                      decoding="async"
                      src={i3}
                      alt="Nâng cao năng suất"
                      className={css.imgResponsive}
                      data-ll-status="loaded"
                    />
                  </div>
                  <div className={css.reasonItemContent}>
                    {/* <div className={css.Iitle}>
                      Nâng cao{" "}
                      <span style={{ color: "#4262ef" }}>năng suất</span>
                    </div> */}
                    <div className={css.des}>
                      <div>Quản lý lô hàng FCL, LCL, Consol, Logistics...</div>
                      {/* <div>Tự động tổng hợp báo cáo thuế, BCTC chính xác, </div> */}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <div className={css.reasonItem}>
                  <div className={css.reasonItemImg}>
                    <Image
                      decoding="async"
                      src={i4}
                      alt="Nâng cao năng suất"
                      className={css.imgResponsive}
                      data-ll-status="loaded"
                    />
                  </div>
                  <div className={css.reasonItemContent}>
                    {/* <div className={css.Iitle}>
                      Nâng cao{" "}
                      <span style={{ color: "#4262ef" }}>năng suất</span>
                    </div> */}
                    <div className={css.des}>
                      <div>
                        In tất cả các chứng từ HBL, HAWB, AN, Recharge và Tax
                        Invoice...
                      </div>
                      {/* <div>Tự động tổng hợp báo cáo thuế, BCTC chính xác, </div> */}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <div className={css.reasonItem}>
                  <div className={css.reasonItemImg}>
                    <Image
                      decoding="async"
                      src={i6}
                      alt="Nâng cao năng suất"
                      className={css.imgResponsive}
                      data-ll-status="loaded"
                    />
                  </div>
                  <div className={css.reasonItemContent}>
                    {/* <div className={css.Iitle}>
                      Nâng cao{" "}
                      <span style={{ color: "#4262ef" }}>năng suất</span>
                    </div> */}
                    <div className={css.des}>
                      <div>Quản lý quy trình phê duyệt online</div>
                      {/* <div>Tự động tổng hợp báo cáo thuế, BCTC chính xác, </div> */}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <div className={css.reasonItem}>
                  <div className={css.reasonItemImg}>
                    <Image
                      decoding="async"
                      src={i5}
                      alt="Nâng cao năng suất"
                      className={css.imgResponsive}
                      data-ll-status="loaded"
                    />
                  </div>
                  <div className={css.reasonItemContent}>
                    {/* <div className={css.Iitle}>
                      Nâng cao{" "}
                      <span style={{ color: "#4262ef" }}>năng suất</span>
                    </div> */}
                    <div className={css.des}>
                      <div>Quản lý giá mua từ hãng tàu, nhà cung cấp</div>
                      {/* <div>Tự động tổng hợp báo cáo thuế, BCTC chính xác, </div> */}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Col span={24} className={css.buttonTry}>
              <Col xs={24} md={24} className={css.buttonTry}>
                <Row style={{ width: "100%" }} gutter={50}>
                  <Col xs={24} md={12}>
                    <a href="#targetDiv" className={css.BtnBlue}>
                      Dùng thử miễn phí
                    </a>
                  </Col>

                  <Col xs={24} md={12}>
                    <a
                      href="https://drive.google.com/file/d/1pRmU7SzpJhRqInNDsfnslRaFwkI_lfPB/view?usp=sharing"
                      target={"_blank"}
                      rel="noreferrer"
                      className={css.BtnOr}
                    >
                      Xem thêm chức năng
                    </a>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
