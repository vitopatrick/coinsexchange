import React from "react";

const RiskBody = () => {
  return (
    <section>
      <div className="w-[90%] mx-auto">
        <h3 className="font-bold text-4xl my-3">Tax</h3>
        <div>
          <p className="capitalize leading-loose mb-6">
            It is your responsibility to report and pay any taxes that may arise
            from transacting on the Volume Exchange Services, and you
            acknowledge that Volume Exchange does not provide legal or tax
            advice relative to these transactions. If you have any doubts about
            your tax status or obligations when using Volume Exchange Services,
            or with respect to the Digital Assets held to the credit of your
            Volume Exchange account, you may wish to seek independent advice.
            You acknowledge that, when, where and as required by applicable
            legislation, Volume Exchange shall report information regarding your
            transactions, transfers, distributions or payments to tax or other
            public authorities
          </p>
          <p className="capitalize leading-loose mb-6">
            Similarly, when, where and as required by applicable law, Volume
            Exchange shall withhold taxes related to your transactions,
            transfers, distributions or payments. Applicable legislation could
            also prompt Volume Exchange to request you for additional tax
            information, status, certificates or documentation. You acknowledge
            that failure to answer these requests within the timeframe defined,
            may result in withholding taxes by Volume Exchange , to be remitted
            to tax authorities as defined by relevant law. You are encouraged to
            seek professional and personal tax advice regarding the above and
            before making any digital asset transaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RiskBody;