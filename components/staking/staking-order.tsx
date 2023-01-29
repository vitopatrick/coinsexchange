import Loading from "../../shared/loading/Loading";
import { formatCurrency } from "../../utils/formatCurrency";
import { useFetchStakes } from "./hook/useFetchStaking";

const StakingOrder = () => {
  const { loading } = useFetchStakes();
  return (
    <section className="text-white font-main my-3">
      <div className="mx-2">
        <header>
          <h4 className="font-semibold text-2xl py-3">Staking Orders</h4>
        </header>
        {loading && <Loading />}
        {!loading && <StakingTable />}
      </div>
    </section>
  );
};

const StakingTable = () => {
  const { stakes } = useFetchStakes();

  return (
    <>
      {stakes.length < 0 ? (
        <div className="font-semibold flex items-center justify-center my-8 text-base text-gray_bg">
          Opps Nothing here
        </div>
      ) : (
        <>
          <section className="grid grid-cols-5 gap-4 bg-bg py-3 px-2 rounded-t font-semibold">
            <div>Plan</div>
            <div>Duration</div>
            <div>Amount</div>
            <div>APR</div>
            <div>Date</div>
          </section>
          {stakes.map((stake: any) => (
            <StakingItem
              key={stake.amount + Math.random()}
              plan={stake.plan}
              amount={stake.amount}
              duration={stake.duration}
              apr={stake.apr}
              date={stake.date}
            />
          ))}
        </>
      )}
    </>
  );
};

const StakingItem = ({ plan, duration, amount, apr, date }: any) => {
  return (
    <div className="grid grid-cols-5 py-3 px-2 bg-bg/50">
      <div>{plan}</div>
      <div>{duration}</div>
      <div>{formatCurrency(amount)}</div>
      <div>{apr}</div>
      <div>{date}</div>
    </div>
  );
};

export default StakingOrder;
