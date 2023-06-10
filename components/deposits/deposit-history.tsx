import { useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import Loading from "../../shared/loading/Loading";
import { formatCurrency } from "../../utils/formatCurrency";
import * as Md from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useTransaction } from "../../hooks/useFetchTransaction";

const DepositHistory = () => {
  const { transactions, loading } = useTransactions("/deposits");

  return (
    <div className="w-[90%] mx-auto text-white my-10">
      <h4 className="underline text-2xl font-semibold">Deposit History</h4>
      {transactions.length < 1 ? (
        <NoDeposit />
      ) : (
        <DepositTable transactions={transactions} loading={loading} />
      )}
    </div>
  );
};

const NoDeposit = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center p-4">
        <Md.MdNotes className="text-[80px] text-neutral-500" />
        <p>No Deposits Yet</p>
      </div>
    </section>
  );
};

const DepositTable = ({ transactions, loading }: any) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [id, setId] = useState<string | null>(null);

  function openModal(id: string) {
    setId(id);
    setDisplayModal(true);
  }

  return (
    <>
      <div className="mt-4">
        {loading ? (
          <Loading />
        ) : (
          transactions.map((transaction: any) => (
            <>
              <div
                key={transaction.id}
                onClick={() => openModal(transaction.id)}
                className="flex items-center justify-between cursor-pointer hover:bg-bg/40 p-3 ease transition-all rounded-xl"
              >
                <div>
                  <h3 className="font-semibold uppercase">
                    {transaction.coin}
                  </h3>
                  <h3 className="text-neutral-400 font-semibold">
                    {transaction.date}
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold">
                    {formatCurrency(transaction.amount)}
                  </h3>
                  <h3 className="text-neutral-400 font-semibold">
                    {transaction.approved ? "Completed" : "0/3 block confirm"}
                  </h3>
                </div>
              </div>
            </>
          ))
        )}
      </div>
      <DepositDetailsModal
        show={displayModal}
        close={setDisplayModal}
        id={id}
      />
    </>
  );
};

const DepositDetailsModal = ({ id, show, close }: any | unknown) => {
  const { transaction, loading } = useTransaction(id);

  return (
    <AnimatePresence>
      <motion.section
        key={show}
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
        className={
          show
            ? "absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-card/30 backdrop-blur-sm"
            : "hidden"
        }
      >
        <div className="md:w-[50%] w-[80%] mx-auto md:mt-14 bg-bg p-4">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-xl underline">Deposit Details</h4>
            <Md.MdClose
              className="cursor-pointer"
              onClick={() => close(false)}
            />
          </div>
          {/* details */}
          {loading ? (
            <Loading />
          ) : (
            <div className="my-8 md:space-y-4">
              <div>
                <h4 className="text-neutral-400 font-semibold">Time</h4>
                <h4 className="font-semibold">{transaction?.date}</h4>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                    status
                  </h4>
                  {transaction?.approved ? (
                    <p className="font-semibold text-teal-400">Completed</p>
                  ) : (
                    <p className="font-semibold text-red-600">Processing</p>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                    Block Confirmation
                  </h4>
                  {transaction?.approved ? (
                    <p className="font-semibold text-teal-400">(3/3)</p>
                  ) : (
                    <p className="font-semibold text-red-600">(0/3)</p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                    Coin
                  </h4>
                  <p className="font-semibold uppercase">{transaction?.coin}</p>
                </div>
                <div>
                  <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                    Recipient Account
                  </h4>
                  <p className="font-semibold">Main Account</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                  Amount
                </h4>
                <p className="font-semibold">
                  {formatCurrency(transaction?.amount)}
                </p>
              </div>
              <div>
                <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                  Fee
                </h4>
                <p className="font-semibold">{formatCurrency(0)}</p>
              </div>
              <div>
                <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                  Network
                </h4>
                <p className="font-semibold uppercase">
                  {transaction?.network
                    ? transaction?.coin
                    : transaction?.network}
                </p>
              </div>
              <div>
                <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                  Receiving Address
                </h4>
                <p className="font-semibold">
                  {transaction?.address ? transaction?.address : "N/A"}
                </p>
              </div>
              <div>
                <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                  Transaction Hash
                </h4>
                <p className="font-semibold underline">
                  {transaction?.hash ? transaction?.hash : "N/A"}
                </p>
              </div>
              <div>
                <h4 className="font-semibold my-2 text-neutral-400 capitalize">
                  Remarks
                </h4>
                <p className="font-semibold ">
                  {transaction?.remarks ? transaction?.remarks : "N/A"}
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default DepositHistory;
