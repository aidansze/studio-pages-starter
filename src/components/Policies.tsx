export interface PoliciesProps {
    policies: {
        name: string;
        description: string;
    }[];
}


export const initialProps: PoliciesProps = {
    policies: [{name: "policy 1", description: "policy description" }],
};

const Policies = ({ policies }: PoliciesProps) => {
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {policies.map((policy)=> (
            <div
                key={policy.name}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
            >
                <dt>
                    {}
                    <span className="mt-4 text-sm font-medium text-gray-900">
                        {policy.name}
                    </span>
                </dt>
                <dd className="m-1 text-sm text-gray-500">{policy.description}</dd>
            </div>
        ))}
    </div>
};

export default Policies;