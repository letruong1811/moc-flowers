import colors from '../color';
import data from '../data';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ImageWithRatio = ({ src }) => {
  const [isSquare, setIsSquare] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      const ratio = width - height;

      setIsSquare(ratio !== 0 ? false : true);
    };
  }, [src]);

  return (
    <div
      style={{
        width: '268px',
        height: '357px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff',
      }}
    >
      <div
        style={{
          width: '268px',
          height: isSquare ? '268px' : '357px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: isSquare ? 'center' : 'flex-end',
          alignItems: isSquare ? 'center' : 'start',
        }}
      >
        <img
          src={src}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '4px',
            objectFit: 'cover',
            objectPosition: isSquare ? 'center' : 'right',
          }}
        />
      </div>
    </div>
  );
};

function removeTransparentPixels(image, callback) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { data, width, height } = imageData;

    let top = height,
      left = width,
      right = 0,
      bottom = 0;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        if (data[idx + 3] > 0) {
          if (x < left) left = x;
          if (x > right) right = x;
          if (y < top) top = y;
          if (y > bottom) bottom = y;
        }
      }
    }

    const croppedWidth = right - left + 1;
    const croppedHeight = bottom - top + 1;

    const croppedCanvas = document.createElement('canvas');
    const croppedCtx = croppedCanvas.getContext('2d');

    croppedCanvas.width = croppedWidth;
    croppedCanvas.height = croppedHeight;

    croppedCtx.drawImage(
      canvas,
      left,
      top,
      croppedWidth,
      croppedHeight,
      0,
      0,
      croppedWidth,
      croppedHeight
    );

    callback(croppedCanvas.toDataURL());
  };
}

function HomeScreen() {
  const imageSlide = data.imageSlide;
  const products = data.products;
  const reasons = data.reasons;
  const aboutUs = data.aboutUs;
  const partners = data.partners;

  const [isMouse, setMouse] = useState(-1);

  const [croppedImages, setCroppedImages] = useState([]);

  useEffect(() => {
    const processImages = async () => {
      const results = [];

      for (const filePath of partners) {
        const img = new Image();
        img.src = filePath;

        await new Promise((resolve) => {
          removeTransparentPixels(img, (croppedSrc) => {
            results.push(croppedSrc);
            resolve();
          });
        });
      }

      setCroppedImages(results);
    };

    processImages();
  }, []);

  return (
    <div>
      {/**Slide san pham noi bat */}
      <div>
        <div
          style={{
            margin: '0px',
            padding: '0px',
            width: '100%',
            height: '440px',
            position: 'relative',
          }}
        >
          <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <div className="carousel-container">
              {imageSlide.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt=""
                  style={{
                    margin: '0px',
                    padding: '0px',
                    width: '1366px',
                    height: '100%',
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                  }}
                />
              ))}
            </div>
          </div>
          {imageSlide.map((image, idx) => (
            <div
              style={{
                position: 'absolute',
                top: '157px',
                left: '98px',
                width: '460px',
              }}
            >
              <h1 style={{ color: colors.ink[0] }}>{image.title}</h1>
              <p style={{ marginTop: '17px', color: colors.ink[2] }}>
                {image.content}
              </p>
            </div>
          ))}

          <div
            style={{
              position: 'absolute',
              top: '408px',
              left: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className="icon-nav-slide-1"
              style={{
                border: '1px solid',
                borderColor: colors.secondary[1],
                borderRadius: '50%',
                position: 'relative',
              }}
            >
              <div
                className="icon-nav-slide-2"
                style={{
                  background: colors.secondary[1],
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '25%',
                  left: '25%',
                }}
              ></div>
            </div>

            <div
              className="icon-nav-slide-2"
              style={{
                border: '1px solid',
                borderColor: colors.grey[0],
                margin: '0px 8px',
                borderRadius: '50%',
                position: 'relative',
              }}
            ></div>
            <div
              className="icon-nav-slide-2"
              style={{
                border: '1px solid',
                borderColor: colors.grey[0],
                margin: '0px 8px',
                borderRadius: '50%',
                position: 'relative',
              }}
            ></div>
          </div>
        </div>
      </div>

      {/**San pham cua chung toi */}
      <Container style={{ padding: '36px 99px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: colors.secondary[0] }}>Sản phẩm của chúng tôi</h2>
          <p style={{ margin: '24px 0px 8px', color: colors.ink[2] }}>
            Với nhiều năm kinh nghiệm phục vụ trong ngành điện hoa, Mộc Flowers
            chúng tôi luôn cố gắng để tạo ra những sản phẩm tốt nhất, đa dạng
            nhất phục vụ cho mọi nhu cầu của khách hàng.
          </p>
        </div>
        <div className="grid-container-product" style={{ borderRadius: '4px' }}>
          {products.map((product, idx) => (
            <div
              key={idx}
              style={{
                margin: '0px',
                padding: '0px',
                width: '268px',
                height: '357px',
                position: 'relative',
              }}
            >
              <ImageWithRatio key={idx} src={product.image} />

              <div
                style={{
                  position: 'absolute',
                  top: '0%',
                  left: '0%',
                  width: '100%',
                  height: '100%',
                  background: 'rgba(14, 14, 14, 0.4)',
                  color: colors.ink[3],
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <h3
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      {product.name}
                    </h3>
                    <Button
                      className="font-subtitile2"
                      style={{
                        backgroundColor: '#FFFFFF00',
                        color: colors.ink[3],
                        padding: '8px 16px',
                        border: '1px solid',
                        borderColor: colors.ink[3],
                        borderRadius: '30px',
                        marginTop: '16px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <span style={{ marginRight: '8px' }}>Xem ngay</span>
                        <IoIosArrowForward className="icon-size-arrow" />
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/**Lý do bạn nên chọn Mộc Flowers */}
      <div
        style={{
          position: 'relative',
          height: '545px',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/anh9.png"
          alt=""
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '0%',
            left: '0%',
            width: '100%',
            height: '100%',
            background: 'rgba(237, 237, 239, 0.75)',
          }}
        />
        <div
          style={{
            padding: '0px',
            position: 'absolute',
            top: '0%',
            left: '0%',
            width: '100%',
            height: '100%',
          }}
        >
          <div style={{ margin: '40px 99px', display: 'block' }}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ color: colors.secondary[0] }}>
                Lý do bạn nên chọn Mộc Flowers
              </h2>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',

                width: '100%',
                marginTop: '40px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '368px',
                  height: '246px',
                  backgroundColor: colors.ink[3],
                  margin: '40px 0px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
                  borderRadius: '4px',
                }}
              >
                <div
                  style={{
                    margin: '24px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <img
                      src={reasons[1].image}
                      alt=""
                      style={{
                        width: '48px',
                        height: '48px',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <p
                      className="font-title"
                      style={{ marginBottom: '12px', color: colors.ink[1] }}
                    >
                      {reasons[1].name}
                    </p>
                    <p
                      className="font-caption1"
                      style={{ color: colors.ink[2] }}
                    >
                      {reasons[1].text}
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  position: 'relative',
                  width: '368px',
                  height: '246px',
                  backgroundColor: colors.ink[3],
                  margin: '40px 0px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
                  borderRadius: '4px',
                }}
              >
                <div
                  style={{
                    margin: '24px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <img
                      src={reasons[2].image}
                      alt=""
                      style={{
                        width: '56px',
                        height: '56px',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <p
                      className="font-title"
                      style={{ marginBottom: '12px', color: colors.ink[1] }}
                    >
                      {reasons[2].name}
                    </p>
                    <p
                      className="font-caption1"
                      style={{ color: colors.ink[2] }}
                    >
                      {reasons[2].text}
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  left: '434px',
                  position: 'absolute',
                  width: '498px',
                  height: '332px',
                  backgroundColor: colors.ink[3],
                  margin: '40px 0px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
                  borderRadius: '4px',
                }}
              >
                {' '}
                <div
                  style={{
                    margin: ' 32px 24px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <img
                      src={reasons[0].image}
                      alt=""
                      style={{
                        width: '64px',
                        height: '64px',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <p
                      className="font-title"
                      style={{ marginBottom: '12px', color: colors.ink[1] }}
                    >
                      {reasons[0].name}
                    </p>
                    <p style={{ color: colors.ink[2] }}>{reasons[0].text}</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                position: 'absolute',
                top: '512px',
                left: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                className="icon-nav-slide-1"
                style={{
                  border: '1px solid',
                  borderColor: colors.secondary[1],
                  borderRadius: '50%',
                  position: 'relative',
                }}
              >
                <div
                  className="icon-nav-slide-2"
                  style={{
                    background: colors.secondary[1],
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '25%',
                    left: '25%',
                  }}
                ></div>
              </div>
              <div
                className="icon-nav-slide-2"
                style={{
                  border: '1px solid',
                  borderColor: colors.ink[3],
                  margin: '0px 8px',
                  borderRadius: '50%',
                  position: 'relative',
                }}
              ></div>{' '}
              <div
                className="icon-nav-slide-2"
                style={{
                  border: '1px solid',
                  borderColor: colors.ink[3],
                  margin: '0px 8px',
                  borderRadius: '50%',
                  position: 'relative',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/**Gioi thieu */}
      <Container style={{ padding: '60px 100px' }}>
        {/**Khách hàng nói gì về chúng tôi */}
        <div>
          <h2
            style={{
              textAlign: 'center',
              color: colors.secondary[0],
              marginBottom: '40px',
            }}
          >
            Khách hàng nói gì về chúng tôi
          </h2>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'flex',

                gap: '32px',
              }}
            >
              {aboutUs.map((image, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '368px',
                    height: '245px',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                    scrollSnapAlign: 'start',
                  }}
                >
                  <img
                    src={image}
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '4px',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
              ))}
            </div>
            <div
              style={{
                position: 'absolute',
                left: '0%',
                top: '0%',
                width: 'calc(100% + 40px)',
                height: '100%',
                marginLeft: '-20px',
                marginRight: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                overflow: 'hidden',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  background: colors.ink[3],
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  boxShadow: '0 2 4 rgba(0, 0, 0, 0.12)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  pointerEvents: 'auto',
                  cursor: 'pointer',
                }}
              >
                <IoIosArrowBack
                  className="icon-size-arrow"
                  style={{ margin: '6px' }}
                />
              </div>
              <div
                style={{
                  background: colors.ink[3],
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  boxShadow: '0 2 4 rgba(0, 0, 0, 0.12)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  pointerEvents: 'auto',
                  cursor: 'pointer',
                }}
              >
                <IoIosArrowForward
                  className="icon-size-arrow"
                  style={{ margin: '6px' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/** Đối tác của chúng tôi */}
        <div>
          <h2
            style={{
              textAlign: 'center',
              color: colors.secondary[0],
              margin: '40px 0px',
            }}
          >
            Đối tác của chúng tôi
          </h2>
          <div style={{ position: 'relative' }}>
            <div
              className="carousel-container"
              style={{
                display: 'flex',
                gap: '20px',
              }}
            >
              {croppedImages.map((image, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '268px',
                    height: '134px',
                    overflow: 'hidden',
                    scrollSnapAlign: 'start',
                    padding: '5px',
                  }}
                >
                  <div
                    key={idx}
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      boxShadow:
                        isMouse === idx
                          ? '0 2px 10px rgba(0, 0, 0, 0.1)'
                          : '0 0 10px 2px rgba(0, 0, 0, 0)',
                    }}
                    onMouseEnter={() => setMouse(idx)}
                    onMouseLeave={() => setMouse(-1)}
                  >
                    <img
                      src={image}
                      alt=""
                      style={{
                        width: '236px',
                        height: '90px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                position: 'absolute',
                left: '0%',
                top: '0%',
                width: 'calc(100% + 40px)',
                height: '100%',
                marginLeft: '-20px',
                marginRight: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                overflow: 'hidden',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  background: colors.ink[3],
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  boxShadow: '0 2 4 rgba(0, 0, 0, 0.12)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  pointerEvents: 'auto',
                  cursor: 'pointer',
                }}
              >
                <IoIosArrowBack
                  className="icon-size-arrow"
                  style={{ margin: '6px' }}
                />
              </div>
              <div
                style={{
                  background: colors.ink[3],
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  boxShadow: '0 2 4 rgba(0, 0, 0, 0.12)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  pointerEvents: 'auto',
                  cursor: 'pointer',
                }}
              >
                <IoIosArrowForward
                  className="icon-size-arrow"
                  style={{ margin: '6px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default HomeScreen;
