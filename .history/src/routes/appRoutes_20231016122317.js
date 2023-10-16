import { lazy } from 'react';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SectionPageLayout from "../pages/Section/DashboardPageLayout";
const Home = lazy(() => import("../pages/Home/Home"));
const AnalyticsSection = lazy(() => import("../pages/Section/AnalyticsSection"));

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