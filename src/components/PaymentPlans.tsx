
export interface PaymentPlansProps {
  title: string;
  plans: {
    name: string;
    price?: string;
    features: string[];
  }[];
}

export const initialProps: PaymentPlansProps = {
  title: "Choose a Plan",
  plans: [
    {
      name: "Basic Plan",
      price: "19.99",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Premium Plan",
      price: "29.99",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Ultimate Plan",
      price: "39.99",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
  ],
};

const PaymentPlans = ({ title, plans }: PaymentPlansProps) => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">{title}</h2>
        <div className="mt-10">
          <div className="rounded-lg shadow-lg bg-white overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              {plans.map((plan, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                  <p className="mt-2 text-lg text-gray-500">${plan.price} / month</p>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-green-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                            />
                          </svg>
                        </span>
                        <p className="ml-2 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlans;