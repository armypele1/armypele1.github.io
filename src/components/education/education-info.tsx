interface Props {
  title: string;
  dateRange: string;
  description: string;
  icon: React.ReactNode;
}

const EducationInfo = ({ title, dateRange, icon, description }: Props) => {
  return (
    <div className="flex gap-4">
      {icon}
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2 items-center justify-between">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm font-light">{dateRange}</p>
        </div>
        <p className="text-md text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default EducationInfo;
