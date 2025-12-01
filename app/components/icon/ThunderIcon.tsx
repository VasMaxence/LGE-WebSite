interface Props {
    width: number;
    height: number;
    color: string;
}

const ThunderIcon: React.FC<{ width: number; height: number; color: string }> = ({ width, height, color }: Props) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.3286 5.2793L7.19995 11.2524H10.3286L7.98235 18.7193L17.76 11.2524H13.4582L15.8044 5.2793H10.3286Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ThunderIcon;

