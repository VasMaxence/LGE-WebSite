interface Props {
  height: number;
}

const CwdLeftIcon: React.FC<{ height: number }> = ({ height }: Props) => {
  const ratio = 78 / 16;

  return (
    <svg width={height * ratio} height={height} viewBox="0 0 78 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M33.0718 8.86917H76.5781L76.5781 7.12893L33.0718 7.12891V8.86917Z" fill="url(#paint0_linear_6244_20882)" />
      <path d="M27.8516 1.90806V14.0898H15.6698V1.90806H27.8516Z" fill="url(#paint1_linear_6244_20882)" />
      <path d="M11.3193 2.77918V13.2207H0.877816V2.77918H11.3193Z" stroke="url(#paint2_linear_6244_20882)" strokeWidth="0.870127" />
      <defs>
        <linearGradient id="paint0_linear_6244_20882" x1="76.5781" y1="7.99905" x2="33.0718" y2="7.99905" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFA01" />
          <stop offset="1" stopColor="#FCC603" />
        </linearGradient>
        <linearGradient id="paint1_linear_6244_20882" x1="27.8516" y1="7.99884" x2="15.6698" y2="7.99884" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFA01" />
          <stop offset="1" stopColor="#FCC603" />
        </linearGradient>
        <linearGradient id="paint2_linear_6244_20882" x1="10.4492" y1="7.9999" x2="-1.73256" y2="7.9999" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFA01" />
          <stop offset="1" stopColor="#FCC603" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CwdLeftIcon;