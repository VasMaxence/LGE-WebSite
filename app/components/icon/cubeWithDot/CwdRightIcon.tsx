interface Props {
  height: number;
}

const CwdRightIcon: React.FC<{ height: number }> = ({ height }: Props) => {
  const ratio = 78 / 16;

  return (
    <svg width={height * ratio} height={height} viewBox="0 0 78 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M44.9282 8.86917H1.42188L1.42188 7.12893L44.9282 7.12891V8.86917Z" fill="url(#paint0_linear_6328_13630)" />
      <path d="M50.1484 1.90806V14.0898H62.3302V1.90806H50.1484Z" fill="url(#paint1_linear_6328_13630)" />
      <path d="M66.6807 2.77918V13.2207H77.1222V2.77918H66.6807Z" stroke="url(#paint2_linear_6328_13630)" strokeWidth="0.870127" />
      <defs>
        <linearGradient id="paint0_linear_6328_13630" x1="1.42188" y1="7.99905" x2="44.9282" y2="7.99905" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFA01" />
          <stop offset="1" stopColor="#FCC603" />
        </linearGradient>
        <linearGradient id="paint1_linear_6328_13630" x1="50.1484" y1="7.99884" x2="62.3302" y2="7.99884" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFA01" />
          <stop offset="1" stopColor="#FCC603" />
        </linearGradient>
        <linearGradient id="paint2_linear_6328_13630" x1="67.5508" y1="7.9999" x2="79.7326" y2="7.9999" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFA01" />
          <stop offset="1" stopColor="#FCC603" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CwdRightIcon;