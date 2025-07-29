#!/bin/bash

# Current timestamp for the commit message
TIMESTAMP="2025-07-29 22:52:05"
GITHUB_USERNAME="ahmed-haggag"

# Function to create/update a page file
update_page() {
    local path=$1
    local title=$2
    local component=$3
    
    mkdir -p "src/app/$path"
    
    cat > "src/app/$path/page.tsx" << EOL
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function ${component}() {
  return (
    <>
      <Breadcrumb pageName="${title}" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* ${title} content goes here */}
      </div>
    </>
  );
}
EOL
}

# eCommerce pages
update_page "ecommerce/seller-ledger" "Seller Ledger" "SellerLedgerPage"
update_page "ecommerce/invoicing" "Invoicing" "InvoicingPage"
update_page "ecommerce/awbs" "AWBs" "AWBsPage"
update_page "ecommerce/inventory-rules" "Inventory Rules" "InventoryRulesPage"
update_page "ecommerce/calculated-orders" "Calculated Orders" "CalculatedOrdersPage"

# Reports pages
update_page "reports/daily" "Daily Reports" "DailyReportsPage"
update_page "reports/monthly" "Monthly Summary" "MonthlySummaryPage"
update_page "reports/analytics" "Analytics" "AnalyticsPage"

# System pages
update_page "system/settings" "Settings" "SettingsPage"
update_page "system/users" "Users" "UsersPage"
update_page "system/logs" "Logs" "LogsPage"

# Git commands to commit and push changes
git add src/app/
git commit -m "Updated page components with correct titles and names - ${TIMESTAMP}"
git push origin main
