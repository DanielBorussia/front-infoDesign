import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Home from "../pages/Home/Home";
import SectionPageLayout from "../pages/Section/DashboardPageLayout";
import AnalyticsSection from "../pages/Section/AnalyticsSection";

const appRoutes = [
  {
    index: true,
    element: <Home />,
    state: "home"
  },

  {
    path: "/tramos",
    element: <SectionPageLayout />,
    state: "",
    sidebarProps: {
      displayText: "Tramos",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <Home />,
        state: "Tramos.listado"
      },
      {
        path: "/tramos/listado",
        element: <Home />,
        state: "tramos.listado",
        sidebarProps: {
          displayText: "Listado"
        },
      },
      {
        path: "/tramos/analiticas",
        element: <AnalyticsSection />,
        state: "tramos.analiticas",
        sidebarProps: {
          displayText: "Analiticas"
        }
      }
    ]
  }
];

export default appRoutes;