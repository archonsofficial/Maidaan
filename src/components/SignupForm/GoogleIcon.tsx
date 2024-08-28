import React from 'react';

export const GoogleIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={size}
    height={size}
  >
    <path
      fill="#EA4335"
      d="M24 9.5c3.14 0 5.94 1.08 8.16 2.85l6.07-6.07C34.51 3.55 29.55 1.5 24 1.5 14.34 1.5 6.4 7.81 3.47 16.87l7.51 5.83C12.81 14.68 17.94 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.49 24.63c.26-1.41.41-2.88.41-4.38 0-1.5-.15-2.97-.41-4.38H24v8.78h12.66c-.55 2.8-2.13 5.16-4.36 6.75l7.53 5.85c4.4-4.05 6.66-10.06 6.66-16.62z"
    />
    <path
      fill="#FBBC05"
      d="M10.98 29.34c-1.31-1.31-2.4-2.87-3.13-4.6l-7.51 5.83c1.62 4.05 4.38 7.46 7.86 9.89l7.92-6.16c-1.68-.9-3.18-2.1-4.48-3.56z"
    />
    <path
      fill="#34A853"
      d="M24 46.5c5.61 0 10.43-1.87 13.91-5.06l-7.53-5.85c-1.67 1.23-3.79 1.97-6.38 1.97-5.06 0-9.19-3.23-10.69-7.71l-7.92 6.16c3.52 6.33 10.31 10.49 18.61 10.49z"
    />
    <path fill="none" d="M0 0h48v48H0z" />
  </svg>
);
