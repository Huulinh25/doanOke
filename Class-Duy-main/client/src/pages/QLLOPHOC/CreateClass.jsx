import axios from 'axios';
import React,{ useState}  from 'react';
import { useNavigate } from 'react-router-dom';



function CreateClass(){
  const [teacher_name,setTeacherName] =useState('');
  const [class_name, setClassName] = useState('');
  const [status,setStatus] =useState('');
  const [total_students,setTotalStudent] =useState('');
  const [createdAt, setStartDate] = useState('');       // Khởi tạo biến start_date với giá trị ban đầu là chuỗi rỗng
  const navigate = useNavigate();
 

  function handleSubmit(event){
    event.preventDefault();
     axios.post('http://localhost:8081/api/class',  {
      class_name,
      status,
      total_students,
      teacher_name,
      createdAt,
      
    })
    .then(res => {
      console.log(res);
      navigate('/Class'); // thành công sẽ chuyển hướng 
    }).catch(err => console.log(err));

  }

  return (
    <div className="container-fluid">
  <h1 className="h3 mb-4 text-gray-800 text-center">
    Thêm lớp
    <small className="d-block mt-2">(Điền thông thông tin lớp vào biểu mẫu dưới đây)</small>
  </h1>
  <form className="mt-5" onSubmit={handleSubmit}>
    <h4 className="h4 mb-4 text-gray-800">Biểu mẫu:</h4>
    <div className="form-row">
      <div className="col-12">
        <label htmlFor="">Tên lớp:</label>
        <input
          type="text"
          placeholder="Nhập tên lớp"
          className="form-control form-control-lg"
          onChange={(e) => setClassName(e.target.value)}
          required
        />
        <p className="err2"></p>
      </div>
    </div>
    <div className="form-row">
      <div className="col-6">
        <label htmlFor="">Sĩ số:</label>
        <input
          type="text"
          placeholder="Nhập sĩ số học sinh"
          className="form-control form-control-lg"
          onChange={(e) => setTotalStudent(e.target.value)}
          required
        />
        <p className="err2"></p>
      </div>
      <div className="col-6">
        <label htmlFor="">Ghi chú:</label>
        <input
          type="text"
          placeholder="Nhập ghi chú"
          className="form-control form-control-lg"
          onChange={(e) => setStatus(e.target.value)}
        />
         <p className="err2"></p>
      </div>
      
    </div>
    <div className="text-center mt-5">
      <button type="submit" className="btn-lg btn-primary">
        Thêm lớp
      </button>
    </div>
  </form>
</div>

  
  );
}

export default CreateClass;