export const FavoriteIcon = ({
  width = "24px",
  height = "24px",
  className,
}) => (
  <svg
    aria-hidden="true"
    className={className}
    focusable="false"
    viewBox="0 0 24 24"
    role="img"
    width={width}
    height={height}
    fill="none"
  >
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
    ></path>
  </svg>
);

export const LogoIcon = ({
  width = "78.47px",
  height = "78.47px",
  className,
}) => (
  <svg
    aria-hidden="true"
    className={className}
    focusable="false"
    viewBox="0 0 24 24"
    role="img"
    width={width}
    height={height}
    fill="none"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const CartIcon = ({ width = "24px", height = "24px", className }) => (
  <svg
    aria-hidden="true"
    className={className}
    focusable="false"
    viewBox="0 0 24 24"
    role="img"
    width={width}
    height={height}
    fill="none"
  >
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
    ></path>
  </svg>
);
export const UserIcon = ({ width = "24px", height = "24px", className }) => (
  <svg
    aria-hidden="true"
    className={className}
    focusable="false"
    viewBox="0 0 24 24"
    role="img"
    width={width}
    height={height}
    fill="none"
    data-var="glyph"
  >
    <path
      fill="currentColor"
      d="M12 3a4.5 4.5 0 00-4.5 4.5H9a3 3 0 013-3V3zM7.5 7.5A4.5 4.5 0 0012 12v-1.5a3 3 0 01-3-3H7.5zM12 12a4.5 4.5 0 004.5-4.5H15a3 3 0 01-3 3V12zm4.5-4.5A4.5 4.5 0 0012 3v1.5a3 3 0 013 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 013-3v-1.5A4.5 4.5 0 003 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 013 3H21a4.5 4.5 0 00-4.5-4.5V15zm3 3v3H21v-3h-1.5z"
    ></path>
  </svg>
);
export const CloseIcon = ({
  width = "24px",
  height = "24px",
  className,
  onClick,
}) => (
  <svg
    onClick={onClick}
    aria-hidden="true"
    className={className}
    focusable="false"
    viewBox="0 0 24 24"
    role="img"
    width={width}
    height={height}
    fill="none"
  >
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945"
    ></path>
  </svg>
);
export const SearchIcon = ({ width = "24px", height = "24px", className }) => (
  <svg
    aria-hidden="true"
    className={className}
    focusable="false"
    viewBox="0 0 24 24"
    role="img"
    width={width}
    height={height}
    fill="none"
  >
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
    ></path>
  </svg>
);
