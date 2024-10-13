import { Sun, TriangleAlert, Zap } from 'lucide-react';

import { InfoSection } from './_components/info-section';

const RootPage = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col items-center justify-center h-full px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
        <div className="flex space-x-2 text-center">
          <InfoSection
            sectionIcon={<Sun />}
            sectionItemTitles={[
              '"Explain quantum computing in simple terms"',
              '"Got any creative ideas for a 10 year old’s birthday?"',
              '"How do I make an HTTP request in Javascript?"',
            ]}
            sectionTitle="Examples"
          />
          <InfoSection
            sectionIcon={<Zap />}
            sectionItemTitles={[
              'Remembers what user said earlier in the conversation',
              'Allows user to provide follow-up corrections',
              'Trained to decline inappropriate requests',
            ]}
            sectionTitle="Capabilities"
          />
          <InfoSection
            sectionIcon={<TriangleAlert />}
            sectionItemTitles={[
              'May occasionally generate incorrect information',
              'May occasionally produce harmful instructions or biased content',
              'Limited knowledge of world and events after 2021',
            ]}
            sectionTitle="Limitation"
          />
        </div>
      </div>
    </div>
  );
};

export default RootPage;
