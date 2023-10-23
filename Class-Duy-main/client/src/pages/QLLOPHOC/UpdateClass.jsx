import axios from 'axios';
import React,{ useState, useEffect}  from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



function UpdateClass(){
  const [teacher_name,setTeacherName] =useState('');
  const [class_name, setClassName] = useState('');
  const [status,setStatus] =useState('');
  const [total_student,setTotalStudent] =useState('');
  const [start_date, setStartDate] = useState('');       // Khởi tạo biến start_date với giá trị ban đầu là chuỗi rỗng
  const navigate = useNavigate(); // Khởi tạo biến start_date với giá trị ban đầu là chuỗi rỗng
  const { id } = useParams();
  

  const [ClassData, setClassData] = useState(null);


  //Lấy data để đưa vào input Update
  // Lấy thông tin lớp học từ API và cập nhật state khi component được tạo hoặc id thay đổi
  useEffect(() => {
    axios.get(`http://localhost:8081/api/class/${id}`)
      .then(res => {
        const classData = res.data;
        setTeacherName(classData.teacher_name);
        setClassName(classData.class_name);
        setStatus(classData.status);
        setTotalStudent(classData.total_student);
        setStartDate(classData.start_date);
      })
      .catch(err => console.error(err));
  }, [id]);

  const [selectedDate, setSelectedDate] = useState(null); //React Hook

  const handleDateChange = (date) => { // cập nhật giá trị của selectedDate
    setSelectedDate(date);
  };

  function handleSubmit(event){
    event.preventDefault();
     axios.put('http://localhost:8081/api/UpdateClass/${id}', {
      teacher_name,
      class_name,
      status,
      total_student,
      start_date,
      
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
        <label htmlFor="className">Tên lớp:</label>
        <input
          type="text"
          placeholder="Nhập tên lớp"
          className="form-control form-control-lg"
          onChange={(e) => setClassName(e.target.value)}
          value={class_name}
          id="className"
          required // Add the required attribute
        />
        <p className="err2"></p>
      </div>
    </div>
    <div className="form-row">
      <div className="col-6">
        <label htmlFor="totalStudent">Sĩ số:</label>
        <input
          type="text"
          placeholder="Nhập sĩ số học sinh"
          className="form-control form-control-lg"
          onChange={(e) => setTotalStudent(e.target.value)}
          value={total_student}
          id="totalStudent"
          required // Add the required attribute
        />
        <p className="err2"></p>
      </div>
      <div className="col-6">
        <label htmlFor="status">Ghi chú:</label>
        <input
          type="text"
          placeholder="Nhập ghi chú"
          className="form-control form-control-lg"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
          id="status"
          required // Add the required attribute
        />
        <p className="err3"></p>
      </div>
    </div>
    
    <div className="text-center mt-5">
      <button type="submit" className="btn-lg btn-primary">
        Cập nhập
      </button>
    </div>
  </form>
</div>


  );
}

export default UpdateClass;