#!/bin/bash

# Create directories if they don't exist
mkdir -p src/app/ecommerce/{seller-ledger,invoicing,awbs,inventory-rules}
mkdir -p src/app/reports/{daily,monthly,analytics}
mkdir -p src/app/system/{settings,users,logs}

# Template for the pages
PAGE_TEMPLATE='import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function PAGE_NAME() {
  return (
    <>
      <Breadcrumb pageName="PAGE_TITLE" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* PAGE_TITLE content goes here */}
      </div>
    </>
  );
}'

# Create all pages with proper names
create_page() {
    local path=$1
    local title=$2
    local name=$3
    echo "${PAGE_TEMPLATE/PAGE_TITLE/$title}" > "src/app/$path/page.tsx"
    echo "${PAGE_TEMPLATE/PAGE_NAME/$name}" > "src/app/$path/page.tsx"
}

# eCommerce pages
create_page "ecommerce/seller-ledger" "Seller Ledger" "SellerLedgerPage"
create_page "ecommerce/invoicing" "Invoicing" "InvoicingPage"
create_page "ecommerce/awbs" "AWBs" "AWBsPage"
create_page "ecommerce/inventory-rules" "Inventory Rules" "InventoryRulesPage"

# Reports pages
create_page "reports/daily" "Daily Reports" "DailyReportsPage"
create_page "reports/monthly" "Monthly Summary" "MonthlySummaryPage"
create_page "reports/analytics" "Analytics" "AnalyticsPage"

# System pages
create_page "system/settings" "Settings" "SettingsPage"
create_page "system/users" "Users" "UsersPage"
create_page "system/logs" "Logs" "LogsPage"
