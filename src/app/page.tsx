"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import TransactionsTable from "@/components/transactionsTable";
import { ConnectWalletButton } from "@/components/head/connectWalletButton";
import { Logo } from "@/components/head/logo";
import { useSuiBalance } from "@/hooks/useSuiBalance";
// import { useAccounts } from "@mysten/dapp-kit";

export default function Home() {
  // const account = useAccounts();
  const data = useSuiBalance(
    "0xf385e34ddfdb51c28524978d89bd795594a1069581498b904e8ca9d0d2b09b84"
  );
  console.log("当前SUI余额:", data);
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />
          <ConnectWalletButton />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex justify-between">
          <Tabs defaultValue="sui">
            <TabsList>
              <TabsTrigger value="sui" className="px-8">
                SUI
              </TabsTrigger>
              <TabsTrigger value="usdc" className="px-8">
                USDC
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Button variant="outline">Select Date</Button>
        </div>

        <div className="border border-blue-400 rounded-lg p-4 min-h-[400px]">
          <Button variant="outline" className="mb-4">
            Chart type
          </Button>

          <div className="w-full h-[300px] flex items-center justify-center text-muted-foreground">
            Chart will be displayed here
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Button variant="link" className="text-black hover:text-gray-700">
              Transfer
            </Button>
            <Button variant="link" className="text-black hover:text-gray-700">
              Contract Interactions
            </Button>
          </div>
          <Button variant="outline">Export CSV</Button>
        </div>
      </main>
      <TransactionsTable />
    </div>
  );
}
