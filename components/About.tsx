import {
  CogIcon,
  CashIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Cryptocurrency',
    icon: CashIcon,
    description:
      'Profits are held in Bitcoins, and you know how volatile that is 😉',
  },
  {
    name: 'Artificial Intelligence',
    icon: CogIcon,
    description: 'Our data scientists heard this buzzword is in every company?',
  },
  {
    name: 'Preferred Location',
    icon: LocationMarkerIcon,
    description: 'Big bucks were spent to have our servers next to brokers 🤑',
  },
];

export default function About() {
  return (
    <div className="relative bg-secondary py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-yellow-450 uppercase">
          About us
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
          How do we lose all your money
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-yellow-450">
          With our decade of experiences, we discovered the secret sauce to
          trading:
        </p>
        <p className="max-w-prose mx-auto text-xl text-yellow-450">
          Yolo 100% with 💎 hands (If you know, you know)
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                {/* <div className="flow-root bg-primary rounded-lg px-6 pb-8"> */}
                <div className="flex bg-primary rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-yellow-450 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-yellow-450">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
