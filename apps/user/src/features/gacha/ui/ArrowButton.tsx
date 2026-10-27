import styled from "@emotion/styled";

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M14.0999 8.9834C14.6722 8.9834 15.1905 9.19576 15.5969 9.60156L22.3391 16.3438H22.3401C22.5623 16.5664 22.75 16.8333 22.8665 17.1475C22.9689 17.4239 23.0159 17.7111 23.0159 18C23.0158 18.2889 22.9689 18.5762 22.8665 18.8525C22.75 19.1664 22.5621 19.4328 22.3401 19.6553L15.5979 26.3975H15.5969C15.1917 26.8022 14.6768 26.9999 14.1233 27.0088H14.1223C13.5446 27.0175 13.0163 26.8105 12.6028 26.3975H12.6018C12.1958 25.991 11.9836 25.4719 11.9836 24.8994C11.9837 24.3271 12.1959 23.8087 12.6018 23.4023H12.6028L18.0051 18L12.6018 12.5967C12.1972 12.1915 11.9993 11.6765 11.9905 11.123V11.1221C11.9817 10.5444 12.1889 10.016 12.6018 9.60254L12.6028 9.60156C13.0092 9.19569 13.5275 8.98344 14.0999 8.9834Z"
      fill="#DFAFAF"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

interface ArrowButtonProps {
  direction: "prev" | "next";
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function ArrowButton({
  direction,
  label,
  onClick,
  disabled = false,
}: ArrowButtonProps) {
  return (
    <Wrapper
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      $direction={direction}
    >
      <Icon />
    </Wrapper>
  );
}

const Wrapper = styled.button<{ $direction: "prev" | "next" }>`
  display: inline-flex;
  width: 36px;
  height: 36px;
  padding: 0;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transform: ${({ $direction }) =>
    $direction === "prev" ? "scaleX(-1)" : "none"};

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
