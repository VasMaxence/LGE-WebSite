interface Props {
  height: number;
  color: string;
}

const CwdTopIcon: React.FC<{ height: number; color: string }> = ({ height, color }: Props) => {
  const ratio = 9 / 56;

  return (
    <svg width={height * ratio} height={height} viewBox="0 0 9 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.79272 23.7793V55.3888H5.05712V23.7793H3.79272Z" fill={color} />
      <path d="M8.85066 19.9863H0V11.1357H8.85066V19.9863Z" fill={color} />
      <path d="M8.21836 7.97461H0.63208V0.388325H8.21836V7.97461Z" stroke={color} strokeWidth="0.777083" />
    </svg>
  );
};

export default CwdTopIcon;
