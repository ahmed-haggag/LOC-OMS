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
        title: "Products",
        url: "/products",
        icon: HiOutlineCube,
      },
    ],
  },
  {
    group: "Operations",
    items: [
      {
        title: "Orders",
        url: "/orders",
        icon: HiOutlineShoppingBag,
      },
      {
        title: "Sellers",
        url: "/sellers",
        icon: HiOutlineUsers,
      },
      {
        title: "Invoices",
        url: "/invoices",
        icon: HiOutlineDocumentReport,
      },
    ],
  },
  {
    group: "Others",
    items: [
      {
        title: "Settings",
        url: "/settings",
        icon: HiOutlineCog,
      },
    ],
  },
];

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
