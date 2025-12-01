interface Props {
  height: number;
  color: string;
}

const CwdBottomIcon: React.FC<{ height: number; color: string }> = ({ height, color }: Props) => {
  const ratio = 9 / 56;

  return (
    <svg width={height * ratio} height={height} viewBox="0 0 9 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.79297 31.6094V-0.000165939H5.05736V31.6094H3.79297Z" fill={color} />
      <path d="M8.85066 35.4023H0V44.253H8.85066V35.4023Z" fill={color} />
      <path d="M8.21836 47.4141H0.63208V55.0003H8.21836V47.4141Z" stroke={color} strokeWidth="0.777083" />
    </svg>
  );
};

export default CwdBottomIcon;
