"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "@/contexts/sidebar-context";
import {
  HiOutlineHome,
  HiOutlineCube,
  HiOutlineShoppingBag,
  HiOutlineUsers,
  HiOutlineDocumentReport,
  HiOutlineCog,
  HiOutlineCalculator,
  HiOutlineClipboardList,
  HiOutlineDocumentDuplicate,
  HiOutlineTruck,
  HiOutlineTemplate,
  HiOutlineChartBar,
  HiOutlineChartPie,
  HiOutlineChartSquareBar,
} from "react-icons/hi";

const SIDEBAR_ITEMS = [
  {
    group: "Main",
    items: [
      {
        title: "Dashboard",
        url: "/",
        icon: HiOutlineHome,
      },
      {
        title: "Orders",
        url: "/orders",
        icon: HiOutlineShoppingBag,
      },
      {
        title: "Products",
        url: "/products",
        icon: HiOutlineCube,
      },
      {
        title: "Customers",
        url: "/customers",
        icon: HiOutlineUsers,
      },
    ],
  },
  {
    group: "eCommerce",
    items: [
      {
        title: "Calculated Orders",
        url: "/ecommerce/calculated-orders",
        icon: HiOutlineCalculator,
      },
      {
        title: "Seller Ledger",
        url: "/ecommerce/seller-ledger",
        icon: HiOutlineClipboardList,
      },
      {
        title: "Invoicing",
        url: "/ecommerce/invoicing",
        icon: HiOutlineDocumentDuplicate,
      },
      {
        title: "AWBs",
        url: "/ecommerce/awbs",
        icon: HiOutlineTruck,
      },
      {
        title: "Inventory Rules",
        url: "/ecommerce/inventory-rules",
        icon: HiOutlineTemplate,
      },
    ],
  },
  {
    group: "Reports",
    items: [
      {
        title: "Daily Reports",
        url: "/reports/daily",
        icon: HiOutlineChartBar,
      },
      {
        title: "Monthly Summary",
        url: "/reports/monthly",
        icon: HiOutlineChartPie,
      },
      {
        title: "Analytics",
        url: "/reports/analytics",
        icon: HiOutlineChartSquareBar,
      },
    ],
  },
  {
    group: "System",
    items: [
      {
        title: "Settings",
        url: "/system/settings",
        icon: HiOutlineCog,
      },
      {
        title: "Users",
        url: "/system/users",
        icon: HiOutlineUsers,
      },
      {
        title: "Logs",
        url: "/system/logs",
        icon: HiOutlineDocumentReport,
      },
    ],
  },
];

// Rest of the Sidebar component code remains the same

export function Sidebar() {
  const pathname = usePathname();
  const { setIsOpen, isOpen, isMobile, toggleSidebar } = useSidebarContext();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? [] : [title]));
  };

  return (
    <aside
      className={clsx(
        "bg-white dark:bg-gray-900 w-64 min-h-screen transition-all border-r border-gray-200 dark:border-gray-800",
        {
          "-ml-64": isMobile && !isOpen,
          "ml-0": isMobile && isOpen,
        }
      )}
    >
      <div className="p-6 font-bold text-lg">LOCAList OMS</div>
      <nav className="space-y-4 px-4">
        {SIDEBAR_ITEMS.map((section) => (
          <div key={section.group}>
            <div className="text-xs text-gray-400 uppercase px-2 py-1">
              {section.group}
            </div>
            {section.items.map((item) => {
              const isActive = pathname === item.url;
              return (
                <Link
                  key={item.title}
                  href={item.url}
                  className={clsx(
                    "flex items-center px-3 py-2 text-sm rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800",
                    {
                      "bg-gray-100 dark:bg-gray-800 text-black dark:text-white":
                        isActive,
                      "text-gray-700 dark:text-gray-300": !isActive,
                    }
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.title}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
