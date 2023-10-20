import 'react-datepicker/dist/react-datepicker.css';
// import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


export default function UpdateStudent() {
    const navigate = useNavigate();

    // const notifyError = (errorMessage) => {
    //     toast.error(errorMessage, {
    //       position: 'top-right',
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: 'light',
    //     });
    //   };
    //   const notifySuccess = (errorMessage) => {
    //     toast.success(errorMessage, {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //       });
    // };
    return (
        <div className="container-fluid">
          <button className="btn btn-primary" onClick={() => navigate('/student')}>
            <i className="bi bi-arrow-left"></i> Quay lại
          </button>
           <h1 className="h3 mb-4 text-gray-800 text-center">
            Cập nhập học sinh
            <small className="d-block mt-2">(Điền thông tin học sinh vào biểu mẫu dưới đây)</small>
          </h1>
          <form className="mt-5 needs-validation" >
            <h4 className="h4 mb-4 text-gray-800">Biểu mẫu:</h4>
            <div className="form-row "> 
              <div className="col-6 was-validated">
                <label htmlFor="">Mã giáo viên: (Bắt buộc)</label>
                <input type="text" placeholder='Nhập ID giáo viên' className="form-control form-control-lg" 
                required/>
                <div className="invalid-feedback">Vui lòng nhập mã giáo viên</div>
              </div>
              <div className="col-6 was-validated">
                <label htmlFor="">Họ và tên: (Bắt buộc)</label>
                <input type="text" placeholder='Nhập tên học sinh' className="form-control form-control-lg" 
                required/>
                <div className="invalid-feedback">Vui lòng nhập tên học sinh</div>
              </div>
            </div>
            <div className="form-row mt-3"> 
              <div className="col-6 was-validated">
                <label htmlFor="">Lớp: (Bắt buộc)</label>
                <input type="text" placeholder='Nhập ID lớp' className="form-control form-control-lg" 
                required/>
                <div className="invalid-feedback">Vui lòng nhập mã lớp</div>
              </div>
              <div className="col-6">
                <label htmlFor="">Email:</label>
                <input type="email" placeholder='Nhập email học sinh' className="form-control form-control-lg" 
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col-6 was-validated">
                <label htmlFor="">Giới tính: (Bắt buộc)</label>
                <select
                  className="form-control form-control-lg was-validated"
                  required
                >
                  <option value="">Chọn giới tính</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
                <div className="invalid-feedback">Vui lòng chọn giới tính</div>
              </div>
              <div className="col-6">
                <label htmlFor="">Số điện thoại:</label>
                <input type="text" placeholder='Nhập số điện thoại' className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col-6">
                <label htmlFor="">Quê quán:</label>
                <input type="text" placeholder='Nhập quê quán' className="form-control form-control-lg" 
                />
              </div>
              <div className="col-6">
                <label htmlFor="">Ngày sinh:</label>
                <div>
                <input
                  type="text"
                  placeholder="Nhập ngày sinh (yyyy-MM-dd)"
                  className="form-control form-control-lg"
                />
                </div>
                
              </div>
            </div>
            <div className="text-center mt-3">
              <button type="submit" className="btn-lg btn-primary ">Cập nhập</button>
            </div>
          </form>
          {/* <ToastContainer /> */}
        </div>
    );
}

