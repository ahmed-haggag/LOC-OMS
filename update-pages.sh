name: Update Pages
on:
  workflow_dispatch:

jobs:
  update-pages:
    runs-on: ubuntu-latest
    permissions:
      contents: write  # Add this line to ensure write permissions
    steps:
      - name: Start Time
        run: |
          echo "Workflow started at: 2025-07-29 23:06:46"
          echo "START_TIME=$(date +%s)" >> $GITHUB_ENV

      - uses: actions/checkout@v3
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          fetch-depth: 0  # Add this to ensure we have the full history
      
      - name: Configure Git
        run: |
          git config --global user.name "github-actions[bot]"
          git config --global user.email "github-actions[bot]@users.noreply.github.com"
      
      - name: Run Update Script
        run: |
          echo "Current directory: $(pwd)"
          echo "List files: $(ls -la)"
          echo "Running update script at: $(date -u '+%Y-%m-%d %H:%M:%S')"
          if [ ! -f "update-pages.sh" ]; then
            echo "Creating update-pages.sh"
            cat > update-pages.sh << 'EOL'
#!/bin/bash

# Current timestamp for logging
echo "Script started at: 2025-07-29 23:06:46"
echo "Current user: ahmed-haggag"

# Function to create/update a page file
update_page() {
    local path=$1
    local title=$2
    local component=$3
    
    echo "Updating $path"
    
    mkdir -p "src/app/$path"
    
    cat > "src/app/$path/page.tsx" << EOF
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
EOF
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

echo "Files created successfully"
echo "Starting git operations..."

# Git commands to commit and push changes
git add src/app/
git status
git commit -m "Updated page components with correct titles and names - 2025-07-29 23:06:46"
git push origin HEAD:main

echo "Script completed successfully"
EOL
          fi
          
          chmod +x update-pages.sh
          bash ./update-pages.sh
          
      - name: End Time and Duration
        if: always()
        run: |
          echo "Workflow ended at: $(date -u '+%Y-%m-%d %H:%M:%S')"
          END_TIME=$(date +%s)
          DURATION=$((END_TIME - ${{ env.START_TIME }}))
          echo "Total execution time: ${DURATION} seconds"
