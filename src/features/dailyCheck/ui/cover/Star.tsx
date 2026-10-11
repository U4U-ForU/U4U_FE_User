const SIZES = {
  big: { width: 36, height: 36 },
  small: { width: 22, height: 22 },
};

interface StarProps {
  size?: keyof typeof SIZES;
  className?: string;
}

export default function Star({ size = "small", className }: StarProps) {
  const { width, height } = SIZES[size];

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 36 38"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6879 2.19188C21.2931 0.914202 19.7484 0.585856 18.8681 1.59251L13.4394 7.79965C12.7477 8.59045 11.7617 9.06008 10.7146 9.07348L2.71376 9.17592C1.45721 9.19225 0.556959 10.6673 1.22536 11.8946L5.13747 19.0789C5.6385 19.9991 5.73674 21.0923 5.42006 22.0941L2.90936 30.0357C2.47178 31.42 3.62343 32.5814 4.80912 32.3145L12.6555 30.5478C13.6792 30.3173 14.7447 30.5437 15.5861 31.1708L22.0356 35.9761C23.0102 36.7022 24.5347 36.1096 24.698 34.667L25.6345 26.3908C25.7526 25.3468 26.287 24.3881 27.119 23.7512L33.615 18.7793C34.7248 17.9299 34.5024 16.2162 33.3611 15.6902L26.0937 12.3424C25.1425 11.9043 24.4328 11.0742 24.1226 10.0704L21.6879 2.19188Z"
        fill="white"
        stroke="#DFAFAF"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
