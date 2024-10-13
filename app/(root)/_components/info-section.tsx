import { ReactNode } from 'react';

interface InfoSectionProps {
  sectionIcon: ReactNode;
  sectionItemTitles: string[];
  sectionTitle: string;
}

export const InfoSection = ({ sectionIcon, sectionItemTitles, sectionTitle }: InfoSectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 items-center">
        {sectionIcon}
        <span>{sectionTitle}</span>
      </div>
      <div className="flex flex-col gap-2">
        {sectionItemTitles.map((title) => (
          <div key={title} className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};
