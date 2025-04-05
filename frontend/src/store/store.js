// store.js
import { create } from "zustand";
import Dashboard from "../views/dashboard";
import { HiOutlineDocumentText } from "react-icons/hi";
import Services from "../views/services";
import Devices from "../views/devices";
import SearchPage from "../views/search";
import TransactionDetail from "../views/transaction-detail";
import DashboardIcon from "../components/ui/icons/Dashboard";
import DeviceDataZkp from "../views/device-data-zkp";
import CommitmentData from "../views/commitment";
import { LiaShareAltSolid } from "react-icons/lia";
import { GrBusinessService } from "react-icons/gr";
import { SiGoogledataflow } from "react-icons/si";
import { TbWorldShare } from "react-icons/tb";

export const usePageStore = create((set) => ({
  searchString: "",
  pages: [
    {
      route: "/",
      title: "Transactions",
      key: "transactions",
      component: <Dashboard />,
      Icon: DashboardIcon,
    },
    {
      route: "/device-data-zkp",
      title: "Zero-Knowledge Proofs",
      key: "device-data-zkp",
      component: <DeviceDataZkp />,
      Icon: SiGoogledataflow,
    },
    {
      route: "/device-commitments",
      title: "Commitments",
      key: "commitments",
      component: <CommitmentData />,
      Icon: HiOutlineDocumentText,
    },
    {
      route: "/shared-devices",
      title: "Shared Devices",
      key: "devices",
      component: <Devices />,
      Icon: TbWorldShare,
    },
    {
      route: "/published-services",
      title: "Published Services",
      key: "services",
      component: <Services />,
      Icon: GrBusinessService,
    },
    {
      route: "/search",
      key: "search",
      component: <SearchPage />,
      hidden: true,
    },
    {
      route: "/tx/:id",
      key: "transaction-detail",
      component: <TransactionDetail />,
      hidden: true,
    },
    /* {
			route: "/tx",
			title: "Transactions",
			key: "transactions",
			component: <AllTransactionsPage />,
			Icon: HiOutlineCash,
		}, */
  ],
  setSearch: (string) => set({ searchString: String(string) }),
}));
