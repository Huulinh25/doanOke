import Home from '../pages/Home';
import Login from '../layout/Login';
import LoginSuccess from '../layout/LoginSuccess';
import Register from '../layout/Register';
import ForgotPassword from '~/layout/ForgotPassword';
import ChangePassword from '~/layout/ChangePassword';
import AddAssignment from '~/pages/QLBTAP/AddAssignment';
import AddCriteria from '~/pages/QLBTAP/AddCriteria';
import Assignment from '~/pages/QLBTAP/Assignment';
import EditAssignment from '~/pages/QLBTAP/EditAssignment';
import Profile from '~/pages/USER/Profile';
import UpdatePass from '~/pages/USER/UpdatePass';
import Marking from '~/pages/Marking';
import Student from '~/pages/QLHOCSINH/Student';
import CreateStudent from '~/pages/QLHOCSINH/CreateStudent';

import UpdateStudent from '~/pages/QLHOCSINH/UpdateStudent';
import Class from '~/pages/QLLOPHOC/Class';
import CreateClass from '~/pages/QLLOPHOC/CreateClass';
import UpdateClass from '~/pages/QLLOPHOC/UpdateClass';




//Public routes
const publicRoutes = [
    { path: '/login', component: Login, layout: null },
    { path: '/login-success/:userId', component: LoginSuccess, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/forgot-password', component: ForgotPassword, layout: null },
    { path: '/change-password', component: ChangePassword, layout: null },
    { path: '/', component: Home },
    // QLBAITAP
    { path: '/add-assignment', component: AddAssignment },
    { path: '/add-criteria', component: AddCriteria },
    { path: '/edit-assignment', component: EditAssignment },
    { path: '/assignment', component: Assignment },
    //QLHSINH
    { path: '/student', component: Student },
    { path: '/createStudent', component: CreateStudent },
    { path: '/student/updateStudent', component: UpdateStudent },
    // { path: '/student/updateStudent/:id', component: UpdateStudent },
    //QLLOPHOC
    { path: '/class', component: Class },
    { path: '/createClass', component: CreateClass },
    { path: '/updateClass/:id', component: UpdateClass },





    //USER
    { path: '/user-profile', component: Profile },
    { path: '/update-password', component: UpdatePass },
    //Chấm bài
    { path: '/marking', component: Marking },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
