// ==========================================
//  MOBILE VIEW COMPONENT
// ==========================================
function WalletPageMobile() {
  type MainTab = "assets" | "send" | "receive" | "activities";
  type SendTab = "single" | "multi";
  type AssetFilterTab = "assets" | "nft";

  const [activeTab, setActiveTab] = useState<MainTab>("assets");
  const [activeSendTab, setActiveSendTab] = useState<SendTab>("single");
  const [sendStep, setSendStep] = useState<"form" | "confirm">("form");
  const [activeAssetFilter, setActiveAssetFilter] = useState<AssetFilterTab>("assets");

  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  // Helper for copy function
  const handleCopy = async () => {
    if (!inputRef.current) return;
    await navigator.clipboard.writeText(inputRef.current.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Dummy Data
  const balance = "4,631.21";
  const assets = [
    { name: "Bitcoin", symbol: "BTC", amount: "0.01912343", value: "$10,234.23", icon: bitcoin, trend: "bearish" },
    { name: "Solana", symbol: "SOL", amount: "20,000.85", value: "$10,234.23", icon: solana, trend: "bullish" },
    { name: "BNB Smart Chain", symbol: "BNB", amount: "1,580.8565", value: "$10,234.23", icon: bnb, trend: "bearish" },
    { name: "Ethereum", symbol: "ETH", amount: "0.15828", value: "$10,234.23", icon: ethereum, trend: "bullish" },
    { name: "Ethereum", symbol: "ETH", amount: "0.15828", value: "$10,234.23", icon: ether, trend: "bullish" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] font-manrope text-white pb-10">

      {/* TOP NAVIGATION */}
      <header className="flex items-center justify-between px-5 py-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#B1F128] flex items-center justify-center">
            <span className="text-black font-bold text-xs">T</span>
          </div>
          <p className="font-semibold text-sm">TIWI <br /><span className="text-[10px] text-gray-400 font-normal">Protocol</span></p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#B1F128] text-black text-xs font-bold px-4 py-2 rounded-full">Connect</button>
          <button><IoMenu size={24} className="text-white" /></button>
        </div>
      </header>

      {/* TICKER BAR */}
      <div className="px-5 mb-6">
        <div className="flex justify-between items-center bg-[#0F120F] rounded-lg p-2 px-3 text-xs">
          <span className="text-white">50+ Active Chains</span>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <span className="text-white">TWC $0.095</span>
            <span className="text-red-500">-12.1%</span>
          </div>
        </div>
      </div>

      {/* BREADCRUMBS */}
      <div className="px-5 mb-4 text-sm text-[#8A929A]">
        {activeTab === 'assets' ? (
          <span>Portfolio</span>
        ) : (
          <div className="flex items-center gap-1">
            <button onClick={() => { setActiveTab('assets'); setSendStep('form'); }}>Portfolio</button>
            <span className="text-gray-600"> &gt; </span>
            <span className="text-white capitalize">{activeTab}</span>
          </div>
        )}
      </div>

      {/* MAIN CARD */}
      <div className="mx-4 rounded-[32px] border border-[#1A1F1A] bg-[#0A0D0A] p-5 relative overflow-hidden">
        {/* Glow Line */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B1F128] to-transparent opacity-50" />

        {/* Balance Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#8A929A] text-xs">Total Balance</span>
            <IoEyeOutline className="text-[#8A929A] text-xs" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">${balance}</h1>
          <p className="text-[#B1F128] text-sm flex items-center gap-1">
            +$61.69 (+2.51%) <span className="text-[#8A929A]">today</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <button onClick={() => setActiveTab('send')} className={`flex flex-col items-center justify-center py-4 rounded-2xl border transition-all duration-200 ${activeTab === 'send' ? 'bg-[#151A15] border-[#B1F128] text-[#B1F128]' : 'bg-[#151A15] border-transparent text-[#8A929A] hover:bg-[#1A201A]'}`}>
            <RiSendPlaneLine size={20} className="mb-2" />
            <span className="text-xs font-medium">Send</span>
          </button>
          <button onClick={() => setActiveTab('receive')} className={`flex flex-col items-center justify-center py-4 rounded-2xl border transition-all duration-200 ${activeTab === 'receive' ? 'bg-[#151A15] border-[#B1F128] text-[#B1F128]' : 'bg-[#151A15] border-transparent text-[#8A929A] hover:bg-[#1A201A]'}`}>
            <HiDownload size={20} className="mb-2" />
            <span className="text-xs font-medium">Receive</span>
          </button>
          <button onClick={() => setActiveTab('activities')} className={`flex flex-col items-center justify-center py-4 rounded-2xl border transition-all duration-200 ${activeTab === 'activities' ? 'bg-[#151A15] border-[#B1F128] text-[#B1F128]' : 'bg-[#151A15] border-transparent text-[#8A929A] hover:bg-[#1A201A]'}`}>
            <MdHistory size={20} className="mb-2" />
            <span className="text-xs font-medium">Activities</span>
          </button>
        </div>

        {/* =========================================================
            DYNAMIC CONTENT AREA
           ========================================================= */}
        {/* ASSETS */}
        {activeTab === 'assets' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-center mb-4">
              <div className="flex bg-[#151A15] rounded-full p-1">
                <button onClick={() => setActiveAssetFilter('assets')} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${activeAssetFilter === 'assets' ? 'bg-[#B1F128] text-black' : 'text-[#8A929A]'}`}>Assets</button>
                <button onClick={() => setActiveAssetFilter('nft')} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${activeAssetFilter === 'nft' ? 'bg-[#B1F128] text-black' : 'text-[#8A929A]'}`}>NFTs</button>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-[#151A15] flex items-center justify-center"><Image src="/search-02.svg" alt="search" width={16} height={16} /></div>
                <div className="w-8 h-8 rounded-full bg-[#151A15] flex items-center justify-center"><Image src="/filter.svg" alt="filter" width={16} height={16} /></div>
              </div>
            </div>

            {activeAssetFilter === 'assets' ? (
              <div className="space-y-3">
                {assets.map((asset, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-[#0F120F] border border-[#1A1F1A]">
                    <div className="flex items-center gap-3">
                      <Image src={asset.icon} alt={asset.symbol} width={32} height={32} />
                      <div><p className="text-sm font-bold text-white">{asset.symbol}</p><p className="text-[10px] text-[#8A929A]">{asset.name}</p></div>
                    </div>
                    <div><Image src={asset.trend === 'bullish' ? bullish : bearish} alt="trend" width={60} height={20} /></div>
                    <div className="text-right"><p className="text-sm font-bold text-white">{asset.amount}</p><p className="text-[10px] text-[#8A929A]">{asset.value}</p></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {nfts.map((nft) => (
                  <div key={nft.id} className="bg-[#0F120F] rounded-2xl p-2 border border-[#1A1F1A]">
                    <Image src={nft.image} alt={nft.name} width={150} height={150} className="w-full aspect-square rounded-xl object-cover mb-2" />
                    <p className="text-xs font-bold text-white truncate">{nft.name}</p>
                    <p className="text-[10px] text-[#8A929A]">Floor: {nft.floor}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SEND FLOW */}
        {activeTab === 'send' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            {sendStep === 'form' ? (
              /* ================= FORM STEP ================= */
              <>
                <div className="flex border-b border-[#1A1F1A] mb-6">
                  <button onClick={() => setActiveSendTab('single')} className={`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${activeSendTab === 'single' ? 'border-[#B1F128] text-[#B1F128]' : 'border-transparent text-[#8A929A]'}`}>Send To One</button>
                  <button onClick={() => setActiveSendTab('multi')} className={`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${activeSendTab === 'multi' ? 'border-[#B1F128] text-[#B1F128]' : 'border-transparent text-[#8A929A]'}`}>Multi-Send</button>
                </div>

                <div className="bg-[#0F120F] rounded-2xl p-4 flex justify-between items-center border border-[#1A1F1A] mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image src={ethereum} alt="ETH" width={40} height={40} />
                      {/* Dropdown arrow next to coin */}
                    </div>
                    <div>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <span className="text-lg font-bold text-white">ETH</span>
                        <IoChevronDown className="text-[#8A929A]" />
                      </div>
                      <span className="text-xs text-[#8A929A]">Ethereum</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end text-[#8A929A] text-[10px] mb-0.5"><BsWallet2 /><span>0.0342ETH</span></div>
                    <p className="text-lg font-bold text-white">11.496</p><p className="text-xs text-[#8A929A]">$0</p>
                  </div>
                </div>

                <div className="bg-[#0F120F] rounded-2xl p-4 border border-[#1A1F1A] mb-6">
                  {activeSendTab === 'single' ? (
                    <>
                      <label className="text-xs font-semibold text-white mb-3 block">To:</label>
                      <div className="relative">
                        <input ref={inputRef} type="text" placeholder="Enter Wallet Address" className="w-full bg-[#050505] rounded-xl py-4 px-4 pr-10 text-sm text-white placeholder-[#585858] outline-none border border-[#1A1F1A] focus:border-[#B1F128]" />
                        <button onClick={handleCopy} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A929A]">{copied ? <FiCheck /> : <FiCopy />}</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <label className="text-xs font-semibold text-white mb-3 block">To:</label>
                      <div className="relative mb-4"><p className="text-xs text-[#8A929A] mb-3">Add multiple wallet addresses or upload a list.</p></div>
                      <button className="w-full border border-[#1A1F1A] rounded-xl py-3 flex items-center justify-center gap-2 text-[#8A929A] text-xs hover:border-[#B1F128] transition-colors"><FiCopy /><span>Attach CSV File</span></button>
                    </>
                  )}
                </div>
                <button onClick={() => setSendStep('confirm')} className="w-full bg-[#B1F128] text-black font-bold py-4 rounded-full text-sm hover:opacity-90 transition-opacity">Next</button>
              </>
            ) : (
              /* ================= CONFIRM STEP ================= */
              <div className="animate-in fade-in zoom-in-95 duration-200 pt-2">

                {/* Go Back Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setSendStep('form')}
                    className="flex items-center gap-2 border border-[#B1F128] text-[#B1F128] px-5 py-2 rounded-xl text-xs font-bold transition-opacity hover:opacity-80"
                  >
                    <IoArrowBack size={16} />
                    <span>Go Back</span>
                  </button>
                </div>

                {activeSendTab === 'single' ? (
                  // Single Send Confirm Details
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs text-[#8A929A] mb-1">From:</p>
                      <p className="text-xs text-[#E0E0E0] font-medium font-mono">0x06187ejie9urourT432</p>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="max-w-[70%]">
                        <p className="text-xs text-[#8A929A] mb-1">To:</p>
                        <p className="text-xs text-[#E0E0E0] font-medium font-mono break-all">0x06187ejie9urourT432</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-[#8A929A] mb-1">Network</p>
                        <p className="text-xs text-[#E0E0E0] font-medium">ETH</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-1 text-[#8A929A] text-xs">
                        <span>Network Fee:</span>
                        <div className="border border-[#8A929A] rounded-full w-3 h-3 flex items-center justify-center text-[8px] opacity-70">i</div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-[#E0E0E0] font-medium">$0.04460</p>
                        <p className="text-xs text-[#8A929A]">$0.044</p>
                      </div>
                    </div>

                    <button className="w-full bg-[#B1F128] text-black font-bold py-4 rounded-full text-sm mt-8 hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(177,241,40,0.3)]">
                      Confirm
                    </button>
                  </div>
                ) : (
                  // Multi Send Confirm Details
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs text-[#8A929A] mb-1">Total Recipients:</p>
                      <p className="text-sm text-[#E0E0E0] font-medium">12</p>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-[#8A929A] mb-1">Amount Per Participant</p>
                        <p className="text-sm text-[#E0E0E0] font-medium">100 ETH</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-[#8A929A] mb-1">Network</p>
                        <p className="text-sm text-[#E0E0E0] font-medium">ETH</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-1 text-[#8A929A] text-xs max-w-[60%]">
                        <span>Estimated Network Fee (Batch Send):</span>
                        <div className="border border-[#8A929A] rounded-full w-3 h-3 flex items-center justify-center text-[8px] shrink-0 opacity-70">i</div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-[#E0E0E0] font-medium">$0.04460</p>
                        <p className="text-xs text-[#8A929A]">$0.044</p>
                      </div>
                    </div>

                    <button className="w-full bg-[#B1F128] text-black font-bold py-4 rounded-full text-sm mt-8 hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(177,241,40,0.3)]">
                      Confirm Multi-Send
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* RECEIVE TAB */}
        {activeTab === 'receive' && (
          <div className="space-y-4">
            <div className="bg-black p-4 rounded-md">
              <p className="text-xs text-[#7C7C7C] mb-2">Select Asset</p>

              {/* Asset dropdown */}
              <details className="bg-[#121712] rounded-full group relative w-full">
                {/* Trigger */}
                <summary
                  className="w-full flex cursor-pointer list-none items-center rounded-full bg-[#121712] p-2 text-left outline-none"
                >
                  {/* Icon */}
                  <Image
                    src={ethereum}
                    alt="Ethereum"
                    width={36}
                    height={36}
                    className="shrink-0"
                  />

                  {/* Text */}
                  <div className="ml-3 leading-tight">
                    <p className="text-sm font-semibold text-[#FFF]">ETH</p>
                    <p className="text-xs font-medium text-[#7C7C7C]">Ethereum</p>
                  </div>
                  <IoChevronDown
                    size={16}
                    className="ml-auto text-[#B5B5B5] transition-transform group-open:rotate-180"
                  />
                </summary>


                {/* Dropdown menu */}
                <div
                  className="absolute left-0 z-10 mt-2 w-full min-w-55 rounded-xl bg-[#0B0F0A] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#141A16]">
                    <Image src={ethereum} alt="" width={24} height={24} />
                    <span className="text-sm text-[#E6ECE9]">Ethereum</span>
                  </button>

                  {/* Add more assets here */}
                </div>
              </details>
            </div>

            {/* Warning */}
            <div className="rounded-xl bg-[#2B1F0D] px-1 py-3 text-xs text-center text-[#FFF]">
              Only send <span className="font-semibold">Ethereum (ETH)</span> to this address.
              Other assets will be lost forever.
            </div>

            {/* QR + Address */}
            <div className="">
              <div className="flex justify-center">
                <Image
                  src="/qr-code2.svg"
                  alt="QR Code"
                  width={20}
                  height={20}
                  className="w-48 h-48 rounded-md"
                />
              </div>

              <div className="w-full">
                <p className="text-center pt-4 text-xs break-all text-[#B5B5B5]">
                  0x06193i092j9g9iu2ngmu0939i-4ti938hT432
                </p>

                <button className="flex w-full items-center justify-center gap-2 rounded-full border border-[#B1F128] px-3 py-1.5 text-xs text-[#B1F128] mt-3">
                  <FiCopy size={14} />
                  Copy Address
                </button>

                <button className="flex w-full items-center justify-center gap-2 rounded-full border border-[#B1F128] px-3 py-1.5 text-xs text-[#B1F128] mt-2">
                  <GoShareAndroid size={14} />
                  Share Address
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ACTIVITIES TAB*/}
        {activeTab === 'activities' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
             {/* List Container - No BG, just spacing */}
             <div className="flex flex-col gap-6 mt-2">
                {transactions.map((tx, i) => (
                   <div key={i} className="flex justify-between items-start">
                      {/* Left: Type & Date */}
                      <div className="flex flex-col gap-1">
                         <span className="text-sm font-bold text-white capitalize">{tx.type}</span>
                         <span className="text-xs font-medium text-[#8A929A]">{tx.date}</span>
                      </div>
                      {/* Right: Amount & USD */}
                      <div className="flex flex-col gap-1 items-end">
                         {/* Conditional Color: Green for received, White for sent */}
                         <span className={`text-sm font-bold ${tx.type === 'received' ? 'text-[#B1F128]' : 'text-white'}`}>
                            {tx.amount}
                         </span>
                         <span className="text-xs font-medium text-[#8A929A]">{tx.usd}</span>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
}













// // ==========================================
// //  MOBILE VIEW COMPONENT
// // ==========================================
// function WalletPageMobile() {
//   type MainTab = "assets" | "send" | "receive" | "activities";
//   type SendTab = "single" | "multi";
//   type AssetFilterTab = "assets" | "nft";

//   const [activeTab, setActiveTab] = useState<MainTab>("assets");
//   const [activeSendTab, setActiveSendTab] = useState<SendTab>("single");
//   const [sendStep, setSendStep] = useState<"form" | "confirm">("form");
//   const [activeAssetFilter, setActiveAssetFilter] = useState<AssetFilterTab>("assets");

//   const inputRef = useRef<HTMLInputElement>(null);
//   const [copied, setCopied] = useState(false);

//   const handleCopy = async () => {
//     if (!inputRef.current) return;
//     await navigator.clipboard.writeText(inputRef.current.value);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 1500);
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] font-manrope text-white pb-10">

//       {/* 1. TOP NAVIGATION */}
//       <header className="flex items-center justify-between px-5 py-6">
//         <div className="flex items-center gap-2">
//           <div className="w-6 h-6 rounded-full bg-[#B1F128] flex items-center justify-center">
//             <span className="text-black font-bold text-xs">T</span>
//           </div>
//           <p className="font-semibold text-sm">TIWI <br /><span className="text-[10px] text-gray-400 font-normal">Protocol</span></p>
//         </div>
//         <div className="flex items-center gap-3">
//           <button className="bg-[#B1F128] text-black text-xs font-bold px-4 py-2 rounded-full">Connect</button>
//           <button><IoMenu size={24} className="text-white" /></button>
//         </div>
//       </header>

//       {/* 2. TICKER BAR */}
//       <div className="px-5 mb-6">
//         <div className="flex justify-between items-center bg-[#0F120F] rounded-lg p-2 px-3 text-xs">
//           <span className="text-white">50+ Active Chains</span>
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4 bg-white rounded-full"></div>
//             <span className="text-white">TWC $0.095</span>
//             <span className="text-red-500">-12.1%</span>
//           </div>
//         </div>
//       </div>

//       {/* 3. BREADCRUMBS */}
//       <div className="px-5 mb-4 text-sm text-[#8A929A]">
//         {activeTab === 'assets' ? (
//           <span>Portfolio</span>
//         ) : (
//           <div className="flex items-center gap-1">
//             <button onClick={() => { setActiveTab('assets'); setSendStep('form'); }}>Portfolio</button>
//             <span className="text-gray-600"> &gt; </span>
//             <span className="text-white capitalize">{activeTab}</span>
//           </div>
//         )}
//       </div>

//       {/* 4. MAIN CARD */}
//       <div className="mx-4 rounded-4xl border border-[#1A1F1A] bg-[#0A0D0A] p-5 relative overflow-hidden">
//         <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#B1F128] to-transparent opacity-50" />

//         {/* Balance */}
//         <div className="mb-6">
//           <div className="flex items-center gap-2 mb-1">
//             <span className="text-[#8A929A] text-xs">Total Balance</span>
//             <IoEyeOutline className="text-[#8A929A] text-xs" />
//           </div>
//           <h1 className="text-3xl font-bold text-white mb-1">${balance}</h1>
//           <p className="text-[#B1F128] text-sm flex items-center gap-1">
//             +$61.69 (+2.51%) <span className="text-[#8A929A]">today</span>
//           </p>
//         </div>

//         {/* Action Buttons */}
//         <div className="grid grid-cols-3 gap-3 mb-8">
//           <button onClick={() => setActiveTab('send')} className={`flex flex-col items-center justify-center py-4 rounded-2xl border transition-all duration-200 ${activeTab === 'send' ? 'bg-[#151A15] border-[#B1F128] text-[#B1F128]' : 'bg-[#151A15] border-transparent text-[#8A929A] hover:bg-[#1A201A]'}`}>
//             <RiSendPlaneLine size={20} className="mb-2" />
//             <span className="text-xs font-medium">Send</span>
//           </button>
//           <button onClick={() => setActiveTab('receive')} className={`flex flex-col items-center justify-center py-4 rounded-2xl border transition-all duration-200 ${activeTab === 'receive' ? 'bg-[#151A15] border-[#B1F128] text-[#B1F128]' : 'bg-[#151A15] border-transparent text-[#8A929A] hover:bg-[#1A201A]'}`}>
//             <HiDownload size={20} className="mb-2" />
//             <span className="text-xs font-medium">Receive</span>
//           </button>
//           <button onClick={() => setActiveTab('activities')} className={`flex flex-col items-center justify-center py-4 rounded-2xl border transition-all duration-200 ${activeTab === 'activities' ? 'bg-[#151A15] border-[#B1F128] text-[#B1F128]' : 'bg-[#151A15] border-transparent text-[#8A929A] hover:bg-[#1A201A]'}`}>
//             <MdHistory size={20} className="mb-2" />
//             <span className="text-xs font-medium">Activities</span>
//           </button>
//         </div>

//         {/* Dynamic Content */}
//         {activeTab === 'assets' && (
//           <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex bg-[#151A15] rounded-full p-1">
//                 <button onClick={() => setActiveAssetFilter('assets')} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${activeAssetFilter === 'assets' ? 'bg-[#B1F128] text-black' : 'text-[#8A929A]'}`}>Assets</button>
//                 <button onClick={() => setActiveAssetFilter('nft')} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${activeAssetFilter === 'nft' ? 'bg-[#B1F128] text-black' : 'text-[#8A929A]'}`}>NFTs</button>
//               </div>
//               <div className="flex gap-2">
//                 <div className="w-8 h-8 rounded-full bg-[#151A15] flex items-center justify-center"><Image src="/search-02.svg" alt="search" width={16} height={16} /></div>
//                 <div className="w-8 h-8 rounded-full bg-[#151A15] flex items-center justify-center"><Image src="/filter.svg" alt="filter" width={16} height={16} /></div>
//               </div>
//             </div>

//             {activeAssetFilter === 'assets' ? (
//               <div className="space-y-3">
//                 {assets.map((asset, i) => (
//                   <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-[#0F120F] border border-[#1A1F1A]">
//                     <div className="flex items-center gap-3">
//                       <Image src={asset.icon} alt={asset.symbol} width={32} height={32} />
//                       <div><p className="text-sm font-bold text-white">{asset.symbol}</p><p className="text-[10px] text-[#8A929A]">{asset.name}</p></div>
//                     </div>
//                     <div><Image src={asset.trend === 'bullish' ? bullish : bearish} alt="trend" width={60} height={20} /></div>
//                     <div className="text-right"><p className="text-sm font-bold text-white">{asset.amount}</p><p className="text-[10px] text-[#8A929A]">{asset.value}</p></div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="grid grid-cols-2 gap-3">
//                 {nfts.map((nft) => (
//                   <div key={nft.id} className="bg-[#0F120F] rounded-2xl p-2 border border-[#1A1F1A]">
//                     <Image src={nft.image} alt={nft.name} width={150} height={150} className="w-full aspect-square rounded-xl object-cover mb-2" />
//                     <p className="text-xs font-bold text-white truncate">{nft.name}</p>
//                     <p className="text-[10px] text-[#8A929A]">Floor: {nft.floor}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {activeTab === 'send' && (
//           <div className="animate-in fade-in slide-in-from-right-4 duration-300">
//             <div className="flex border-b border-[#1A1F1A] mb-6">
//               <button onClick={() => setActiveSendTab('single')} className={`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${activeSendTab === 'single' ? 'border-[#B1F128] text-[#B1F128]' : 'border-transparent text-[#8A929A]'}`}>Send To One</button>
//               <button onClick={() => setActiveSendTab('multi')} className={`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${activeSendTab === 'multi' ? 'border-[#B1F128] text-[#B1F128]' : 'border-transparent text-[#8A929A]'}`}>Multi-Send</button>
//             </div>

//             {sendStep === 'form' ? (
//               <>
//                 <div className="bg-[#0F120F] rounded-2xl p-4 flex justify-between items-center border border-[#1A1F1A] mb-4">
//                   <div className="flex items-center gap-3">
//                     <details className="bg-[#121712] rounded-full group relative w-fit">
//                       <summary className="flex cursor-pointer list-none items-center gap-3 rounded-full bg-[#121712] px-2 py-3 text-left outline-none">
//                         {/* Icon */}
//                         <Image
//                           src={ethereum}
//                           alt="Ethereum"
//                           width={36}
//                           height={36}
//                           className="shrink-0"
//                         />
//                         {/* Text */}
//                         <div className="leading-tight">
//                           <p className="text-sm font-semibold text-[#FFF]">ETH</p>
//                           <p className="text-xs font-medium text-[#7C7C7C]">Ethereum</p>
//                         </div>
//                         <IoChevronDown size={16} className="ml-2 text-[#B5B5B5] transition-transform group-open:rotate-180" />
//                       </summary>
//                       {/* Dropdown menu */}
//                       <div
//                         className="absolute left-0 z-10 mt-2 w-full min-w-55 rounded-xl bg-[#0B0F0A] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
//                         <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#141A16]">
//                           <Image src={ethereum} alt="" width={24} height={24} />
//                           <span className="text-sm text-[#E6ECE9]">Ethereum</span>
//                         </button>

//                         {/* Add more assets here */}
//                       </div>
//                     </details>
//                   </div>


//                   <div className="text-right">
//                     <div className="flex items-center gap-1 justify-end text-[#8A929A] text-[10px] mb-0.5"><BsWallet2 /><span>0.0342ETH</span></div>
//                     <p className="text-lg font-bold text-white">11.496</p><p className="text-xs text-[#8A929A]">$0</p>
//                   </div>
//                 </div>

//                 <div className="bg-[#0F120F] rounded-2xl p-4 border border-[#1A1F1A] mb-6">
//                   {activeSendTab === 'single' ? (
//                     <>
//                       <label className="text-xs font-semibold text-white mb-3 block">To:</label>
//                       <div className="relative">
//                         <input ref={inputRef} type="text" placeholder="Enter Wallet Address" className="w-full bg-[#050505] rounded-xl py-4 px-4 pr-10 text-sm text-white placeholder-[#585858] outline-none border border-[#1A1F1A] focus:border-[#B1F128]" />
//                         <button onClick={handleCopy} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A929A]">{copied ? <FiCheck /> : <FiCopy />}</button>
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <label className="text-xs font-semibold text-white mb-3 block">To:</label>
//                       <div className="relative mb-4"><p className="text-xs text-[#8A929A] mb-3">Add multiple wallet addresses or upload a list.</p></div>
//                       <button className="w-full border border-[#1A1F1A] rounded-xl py-3 flex items-center justify-center gap-2 text-[#8A929A] text-xs hover:border-[#B1F128] transition-colors"><FiCopy /><span>Attach CSV File</span></button>
//                     </>
//                   )}
//                 </div>
//                 <button onClick={() => setSendStep('confirm')} className="w-full bg-[#B1F128] text-black font-bold py-4 rounded-full text-sm hover:opacity-90 transition-opacity">Next</button>
//               </>
//             ) : (
//               <div className="animate-in fade-in zoom-in-95 duration-200">
//                 <div className="bg-[#0F120F] rounded-2xl p-4 border border-[#1A1F1A] mb-6 space-y-4">
//                   <h3 className="text-center text-[#8A929A] text-sm">Confirm Transaction</h3>
//                   <div className="bg-[#050505] p-3 rounded-xl"><p className="text-xs text-[#8A929A]">Total Amount</p><p className="text-xl font-bold text-white">11.496 ETH</p></div>
//                   <div className="flex justify-between text-xs"><span className="text-[#8A929A]">Network Fee</span><span className="text-white">0.004 ETH</span></div>
//                   <div className="flex justify-between text-xs"><span className="text-[#8A929A]">Total USD</span><span className="text-white">$24,120.50</span></div>
//                 </div>
//                 <div className="flex gap-3">
//                   <button onClick={() => setSendStep('form')} className="flex-1 bg-transparent border border-[#B1F128] text-[#B1F128] font-bold py-4 rounded-full text-sm">Back</button>
//                   <button className="flex-1 bg-[#B1F128] text-black font-bold py-4 rounded-full text-sm">Confirm Send</button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {activeTab === 'receive' && (
//           <div className="animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col items-center pt-4">
//             <div className="bg-white p-2 rounded-xl mb-4"><Image src="/qr-code2.svg" alt="QR" width={180} height={180} /></div>
//             <p className="text-white font-mono text-sm mb-4 break-all text-center px-4">0x71C...92F</p>
//             <button className="bg-[#151A15] border border-[#B1F128] text-[#B1F128] px-6 py-2 rounded-full text-xs font-bold">Copy Address</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }