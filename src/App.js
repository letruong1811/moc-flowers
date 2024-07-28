import './App.css';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import colors from './color';
import { FaShoppingBag } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FaClipboardList } from 'react-icons/fa';
import { RiRefund2Line } from 'react-icons/ri';
import { MdMessage } from 'react-icons/md';
import { SiServerless } from 'react-icons/si';
import HomeScreen from './screens/HomeSrceen';

function App() {
  const line = {
    borderLeft: '1px solid #89E2F5',
    margin: '0px 8px',
    padding: '1px 0px',
  };
  const line2 = {
    borderLeft: '1px solid #89E2F5',
    margin: '0px 12px',
    padding: '1px 0px',
  };
  return (
    <BrowserRouter>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          minWidth: '1366px',
          minHeight: '100vh',
          background: colors.grey[0],
        }}
      >
        <div
          style={{
            width: '1366px',
            alignItems: 'center',
          }}
        >
          <header
            style={{
              background: colors.background[0],
              top: '0%',
              zIndex: '999',
              position: 'sticky',
            }}
          >
            <Navbar
              style={{
                background: colors.primary[0],
                display: 'flex',
                height: '45px',
                justifyContent: 'space-between',
                alignItems: 'start',
              }}
            >
              <Nav>
                <div
                  style={{
                    paddingLeft: '99px',
                    paddingTop: '9px',
                    display: 'flex',
                  }}
                >
                  <FaFacebookF
                    className="icons-header"
                    style={{
                      color: colors.ink[3],
                    }}
                  />
                  <div style={line}></div>
                  <FaInstagram
                    className="icons-header1"
                    style={{
                      color: colors.ink[3],
                    }}
                  />
                </div>
              </Nav>
              <Nav
                className=" align-self-center justify-content-end"
                style={{
                  display: 'flex',
                  padding: '10px 99px 10px 0px',
                }}
              >
                <Nav.Link
                  className="name-header"
                  style={{
                    color: colors.ink[3],
                    textDecoration: 'none',
                  }}
                >
                  Blog
                </Nav.Link>
                <div style={line}></div>
                <Nav.Link
                  style={{
                    color: colors.ink[3],
                    textDecoration: 'none',
                  }}
                  className="name-header"
                >
                  Giới thiệu
                </Nav.Link>
                <div style={line}></div>
                <div
                  style={{ width: '24px', height: '24px', marginRight: '8px' }}
                >
                  <FaUser
                    className="icon-user"
                    style={{ color: colors.ink[3] }}
                  />
                </div>
                <Nav.Link
                  style={{
                    color: colors.ink[3],
                    textDecoration: 'none',
                  }}
                  className="name-header"
                >
                  Đăng nhập
                </Nav.Link>
              </Nav>
            </Navbar>

            <Navbar
              style={{
                display: 'flex',
                background: colors.ink[3],
                position: 'relative',
                top: '-2px',
                height: '88px',
                borderBottom: '0.5px solid',
                borderBottomColor: colors.grey[0],
                color: colors.grey[0],
              }}
            >
              <Nav>
                <div
                  style={{
                    paddingLeft: '99px',
                    paddingTop: '14px',
                    display: 'flex',
                  }}
                >
                  <img
                    className="icon-home"
                    src="/images/anhdaidien.jpg"
                    alt=""
                  />

                  <img className="icon-name " src="/images/anhten.jpg" alt="" />
                </div>
              </Nav>
              <Nav
                className="align-self-center"
                style={{
                  display: 'flex',
                  paddingTop: '25px',
                  paddingLeft: '432px',
                }}
              >
                <Nav
                  style={{
                    display: 'flex',
                    width: '315px',
                    height: '40px',
                    border: '1px solid',
                    borderColor: colors.grey[0],
                    borderRadius: '20px',
                    marginRight: '24px',
                  }}
                >
                  <input
                    type="text"
                    style={{
                      background: colors.ink[3],
                      color: colors.grey[1],
                      width: '100%',
                      border: 'none',
                      borderRadius: '20px',
                      boxSizing: 'content-box',
                      animationName: 'mui-auto-fill-cancel',
                      letterSpacing: 'inherit',
                      animationDuration: '10ms',
                      whiteSpace: 'pre-line',
                      wordBreak: 'break-word',
                      outline: '0px',
                      margin: '9px 18px',
                    }}
                    className="search-size"
                    placeholder="Tìm kiếm sản phẩm"
                  />
                  <div
                    style={{
                      alignContent: 'center',
                      justifyContent: 'center',
                      margin: '1px 18px 0px 0px',
                      color: colors.ink[1],
                    }}
                  >
                    <IoSearch className="icon-search" />
                  </div>
                </Nav>

                <Nav style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    className="position-relative "
                    style={{
                      background: colors.ink[3],
                      border: 'none',
                      position: 'relative',
                      color: colors.grey[0],
                    }}
                  >
                    <FaShoppingBag className="icon-shopping" />
                    <span
                      style={{
                        position: 'absolute',
                        top: '7px',
                        right: '4px',
                        transform: 'translate(50%, -50%)',
                      }}
                    >
                      <div
                        style={{
                          background: 'red',
                          width: '16px',
                          height: '16px',
                          padding: '0px',
                          color: 'white',
                          border: '0.5px solid white',
                          borderRadius: '50%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            lineHeight: '14px',
                            top: '0.5px',
                            left: '4px',
                            position: 'absolute',
                          }}
                        >
                          2
                        </span>
                      </div>
                    </span>
                  </div>
                </Nav>
              </Nav>
            </Navbar>

            <Navbar
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                background: colors.ink[3],
                height: '80px',
              }}
            >
              <div
                style={{
                  paddingLeft: '100px',
                  display: 'flex',
                }}
              >
                <div>
                  <Nav.Link href="/" bsPrefix="navbar-home font-subtitile">
                    Trang chủ
                  </Nav.Link>
                  <div
                    style={{
                      width: '100%',
                      height: '2px',
                      background: colors.ink[0],
                      marginTop: '10px',
                    }}
                  ></div>
                </div>
                <Nav.Link href="/" bsPrefix="navbar-item font-subtitile">
                  Lan hồ điệp
                </Nav.Link>
                <Nav.Link href="/" bsPrefix="navbar-item font-subtitile">
                  Chủ đề theo mùa
                </Nav.Link>
                <Nav.Link href="/" bsPrefix="navbar-item font-subtitile">
                  Sinh nhật
                </Nav.Link>
                <Nav.Link href="/" bsPrefix="navbar-item font-subtitile">
                  Chúc mừng
                </Nav.Link>
                <Nav.Link href="/" bsPrefix="navbar-item font-subtitile">
                  Chia buồn
                </Nav.Link>

                <Nav.Link href="/" bsPrefix="navbar-discount font-subtitile">
                  <div style={{ display: 'flex' }}>
                    <img
                      style={{
                        width: '24px',
                        height: '24px',
                        marginRight: '8px',
                      }}
                      src="/images/anh17.jpg"
                      alt=""
                    />
                    KHUYẾN MÃI
                  </div>
                </Nav.Link>
              </div>
            </Navbar>
          </header>
          <main style={{ background: colors.background[0] }}>
            <Container bsPrefix="main-cotain">
              <Routes>
                <Route path="/" element={<HomeScreen />} />
              </Routes>
            </Container>
          </main>
          <footer>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '58px',
                background: colors.primary[0],
              }}
            >
              <div
                style={{
                  display: 'flex',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      display: 'flex',

                      marginRight: '8px',
                    }}
                  >
                    <FaClipboardList
                      style={{
                        color: colors.ink[3],
                        width: '24px',
                        height: '24px',
                        padding: '1px 0px 1px 4px',
                      }}
                    />
                  </div>
                  <Nav.Link
                    className="name-header"
                    style={{
                      color: colors.ink[3],
                      textDecoration: 'none',
                    }}
                  >
                    Hướng dẫn đặt hàng, thanh toán
                  </Nav.Link>
                </div>
                <div style={line2}></div>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      display: 'flex',

                      marginRight: '8px',
                    }}
                  >
                    <RiRefund2Line
                      style={{
                        width: '24px',
                        height: '24px',
                        color: colors.ink[3],
                        padding: '3px 0px 0px 8px',
                      }}
                    />
                  </div>
                  <Nav.Link
                    style={{
                      color: colors.ink[3],
                      textDecoration: 'none',
                    }}
                    className="name-header"
                  >
                    Quy định đổi trả, hoan tiền
                  </Nav.Link>
                </div>
                <div style={line2}></div>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      display: 'flex',

                      marginRight: '8px',
                    }}
                  >
                    <MdMessage
                      style={{
                        width: '24px',
                        height: '24px',
                        color: colors.ink[3],
                        padding: '4px 0px 0px 8px',
                      }}
                    />
                  </div>
                  <Nav.Link
                    style={{
                      color: colors.ink[3],
                      textDecoration: 'none',
                    }}
                    className="name-header"
                  >
                    Câu hỏi thường gặp
                  </Nav.Link>
                </div>
                <div style={line2}></div>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      display: 'flex',
                      marginRight: '8px',
                    }}
                  >
                    <SiServerless
                      style={{
                        color: colors.ink[3],
                        width: '24px',
                        height: '24px',
                        padding: '2px 0px 0px 4px',
                      }}
                    />
                  </div>
                  <Nav.Link
                    className="name-header"
                    style={{
                      color: colors.ink[3],
                      textDecoration: 'none',
                    }}
                  >
                    Dịch vụ khác
                  </Nav.Link>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '100%',
                height: '282px',
                background: colors.background[1],
              }}
            >
              <Row
                style={{
                  paddingLeft: '99px',
                  paddingTop: '56px',
                  display: 'flex',
                }}
              >
                <Col md={3}>
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    <img
                      style={{ width: '43.96px', height: '40px' }}
                      src="/images/anhdaidien.jpg"
                      alt=""
                    />
                    <img
                      style={{
                        width: '181.2px',
                        height: '34.48px',
                        paddingLeft: '5.84px',
                        background: 'none',
                      }}
                      src="/images/anhfooter2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className="name-header"
                    style={{
                      paddingTop: '24px',
                      width: '268px',
                      height: '65px',
                      color: colors.ink[3],
                    }}
                  >
                    <p>
                      Mộc Flowers luôn cam kết đặt chất lượng hoa luôn tươi mới
                      lên hàng đầu giao cho khách hàng.
                    </p>
                  </div>
                </Col>
                <Col md={3} style={{ paddingLeft: '32px' }}>
                  <div
                    style={{
                      marginTop: '2px',
                      color: colors.ink[3],
                      height: '22px',
                    }}
                    className="font-subtitile"
                  >
                    Thông tin shop
                  </div>
                  <div
                    className="text-help"
                    style={{ display: 'flex', paddingTop: '16px' }}
                  >
                    <table
                      className="font-caption1 table-footer"
                      style={{ color: colors.ink[3] }}
                    >
                      <tbody>
                        <tr>
                          <td>Điện thoại</td>
                          <td className="font-subtitile2">+84 356 435 789</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td className="font-subtitile2">
                            mocflowers@gmail.com
                          </td>
                        </tr>
                        <tr>
                          <td>Website</td>
                          <td className="font-subtitile2">mocflowers.com</td>
                        </tr>
                        <tr>
                          <td>Giờ mở cửa</td>
                          <td className="font-subtitile2">7:00AM - 8:00PM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
                <Col md={3} style={{ paddingLeft: '38px' }}>
                  <div
                    style={{
                      marginBottom: '24px',
                      color: colors.ink[3],
                      height: '22px',
                    }}
                    className="font-subtitile"
                  >
                    Sản phẩm
                  </div>

                  <ul
                    style={{
                      color: colors.ink[3],
                    }}
                    className="font-caption1 none-bullets"
                  >
                    <li>Lan hồ điệp</li>
                    <li>Hoa chủ đề theo các mùa</li>
                    <li>Hoa sinh nhật</li>
                    <li style={{ margin: '0px', padding: '0px' }}>
                      Hoa chúc mừng
                    </li>
                  </ul>
                </Col>
                <Col md={3} style={{ paddingLeft: '132px' }}>
                  <div
                    style={{
                      marginTop: '2px',
                      color: colors.ink[3],
                      height: '22px',
                    }}
                    className="font-subtitile"
                  >
                    Theo dõi chúng tôi
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      paddingTop: '24px',
                    }}
                  >
                    <div
                      className="icons-footer align-self-center"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '0.5px solid',
                        borderColor: '#D3D7DE',
                        marginRight: '24px',
                      }}
                    >
                      <div style={{ paddingLeft: '4px' }}></div>
                      <FaFacebookF
                        className="icons-header"
                        style={{
                          color: colors.ink[3],
                        }}
                      />
                    </div>
                    <div
                      className="icons-footer align-self-center"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '0.5px solid',
                        borderColor: '#D3D7DE',
                        marginRight: '24px',
                      }}
                    >
                      <div style={{ paddingLeft: '4px' }}></div>
                      <FaInstagram
                        className="icons-header1"
                        style={{
                          color: colors.ink[3],
                        }}
                      />
                    </div>
                    <div
                      className="icons-footer align-self-center"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '0.5px solid',
                        borderColor: '#D3D7DE',
                        marginRight: '24px',
                      }}
                    >
                      <div style={{ paddingLeft: '4px' }}></div>
                      <FaGooglePlusG
                        className="icons-header1"
                        style={{
                          color: colors.ink[3],
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', paddingTop: '24px' }}>
                    <div
                      style={{
                        display: 'flex',
                      }}
                    >
                      <img
                        style={{ width: '193px', height: '73px' }}
                        src="/images/anh16.png"
                        alt=""
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              style={{
                background: colors.background[2],
                width: '100%',
                height: '38px',
                display: 'flex',
              }}
            >
              <div
                className="name-header align-self-center"
                style={{
                  display: 'flex',
                  paddingLeft: '99px',
                  width: '359px',
                  color: colors.ink[3],
                }}
              >
                <p>Copyright ©2021, mocflowers.com, All rights reserved</p>
              </div>
              <div
                className="name-header align-self-center"
                style={{
                  display: 'flex',
                  paddingLeft: '589px',
                  width: '220px',
                  color: colors.ink[3],
                }}
              >
                <p>Thiết kế Website bởi Epal Solution</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
