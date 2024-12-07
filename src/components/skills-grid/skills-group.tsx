import { PropsWithChildren } from "react";

interface Props {
  title: string;
}

const SkillsGroup = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <div className="relative pt-4 flex-1 flex">
      <h3 className="text-lg font-light absolute top-0 left-4 overflow-y-visible bg-card px-2">{title}</h3>
      <div className="border-2 rounded-xl p-4 pt-7 flex-1">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-stone-400">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SkillsGroup;
