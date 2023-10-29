import InboxIcon from "@mui/icons-material/MoveToInbox.js";
import ViewStudent from "../../pages/ViewStudent/ViewStudent.jsx";

const routes = [
    {
        name: 'View Student',
        key: 'view-student',
        component: <ViewStudent/>,
        path: '/view-student',
        icon: <InboxIcon />,
    },
];

export default routes;
