import Image from "next/image";
import ChartHeader from "@/components/chartHeader";
import { FaShareFromSquare } from "react-icons/fa6";

export default function Home() {
  const userWalletAddress = "0x09....879";
  const reward = 20.61;
  const referralRules = [
    "When someone signs up using your referral link or code, they become your referee permanently.",
    "You earn a percentage of the TIWI Protocol fee (0.25%) from their spot trades only",
    "Rebates are paid in USDT, not in TIWI tokens.",
    "Your earnings depend on your Referral Level, which is based on how much your referees traded in the past 28 days.",
    "You only earn from spot trading volume made by people you referred.",
    "Fees are automatically converted to USDT and stored for monthly payout.",
    "Your rebate rate increases as your referees generate more trading volume.",
    "Rebate earnings update continuously throughout the month.",
    "The claim window opens every 28th of the month.",
    "You can claim your USDT directly to your wallet once claims are enabled.",
  ];

  return (
    <>
      <ChartHeader />

      <section className="mt-4 md:mt-8 px-4">
        {/* Invite friends banner */}
        <div className="flex justify-between items-center rounded-md bg-linear-to-b from-[#B1F128] via-[#00C65F] via-31% to-[#009288] w-full md:max-w-225 mx-auto">
          <p className="ml-5 md:ml-10 font-bold font-manrope text-[20px] md:text-2xl w-8 md:w-52.5 text-black">
            Invite Friends. Unlock rewards.
          </p>

          <Image
            src="/banner-img.svg"
            alt=""
            width={200}
            height={200}
            className="rounded-br-md"
          />
        </div>

        {/* referral rules div */}
        <div className="flex flex-col md:flex-row w-full md:max-w-225 mx-auto">
          {/* referral code input */}
          <div className="bg-[#010501] mt-5 px-4 rounded-md">
            <div className="mt-4 p-3 bg-neutral-900 rounded-lg border border-neutral-800 md:w-108.5">
              {/* TOP ROW: Text and Button */}
              <div className="flex justify-between items-start">
                {/* LEFT SIDE: Invite Message and Reward */}
                <div className="mr-4">
                  <p className="font-manrope font-medium text-base text-gray-300">
                    {userWalletAddress
                      ? `${userWalletAddress.substring(
                          0,
                          6
                        )}....${userWalletAddress.substring(
                          userWalletAddress.length - 3
                        )}`
                      : "0x09....879"}{" "}
                    has recently invited...
                  </p>
                  <p className="font-manrope font-semibold text-base md:text-lg text-[#B1F128]">
                    {reward || "20.61"} USDT
                  </p>
                </div>

                {/* RIGHT SIDE: Position Button */}
                <button className="flex items-center text-[#B5B5B5] font-manrope font-medium text-sm md:text-base whitespace-nowrap">
                  Position &rarr;
                </button>
              </div>

              {/* THE GRADIENT LINE (Separator) - USING FIXED OPTION 1 */}
              <div className="mt-3 h-[1px] w-full bg-gradient-to-r from-[#B1F128] via-[#B1F128]/70 to-transparent"></div>
            </div>

            {/* <div className="mt-4 flex justify-between items-center py-2 border border-green-500 rounded-md md:w-108.5">
              <span className="">
                <p className="font-manrope font-medium text-base">
                  {userWalletAddress} has recently invited...
                </p>
                <p className="font-manrope font-semibold text-base md:text-lg text-[#B1F128]">
                  {reward} USDT
                </p>
              </span>

              <button className="text-[#B5B5B5] font-manrope font-medium text-sm md:text-base">
                Position
              </button>
            </div> */}

            <div>
              <p>Enter Referral Code (Optional)</p>
              <span className="flex justify-between items-center">
                <input
                  className="bg-[#0B0F0A]"
                  placeholder="Enter Referral Code"
                />
                <button className="bg-[#0D3600] border border-[#156200] rounded-full text-[#498F00] font-manrope text-sm md:text-lg">
                  Confirm
                </button>
              </span>
              <button className="border border-[#B1F128] text-[#B1F128] rounded-full py-2 w-full text-sm md:text-lg">
                Generate Referral Code
              </button>
            </div>
          </div>

          {/* referral rules */}
          <div className="bg-[#010501] mt-3 md:mt-5 px-4 rounded-md">
            <h2 className="font-manrope font-semibold text-base md:text-lg">
              Referral rules
            </h2>

            <ol className="space-y-4 mt-2 mb-4">
              {referralRules.map((rule, index) => (
                <li
                  key={index}
                  className="flex items-start text-xs md:text-sm font-manrope font-medium"
                >
                  <span className="shrink-0 mr-2">{index + 1}.</span>
                  <span className="">{rule}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
