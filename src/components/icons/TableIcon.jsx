export default function TableIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-12 h-12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="3" y="6" width="18" height="4" strokeWidth="2"></rect>
      <path d="M4 10v10" strokeWidth="2"></path>
      <path d="M20 10v10" strokeWidth="2"></path>
    </svg>
  );
}
