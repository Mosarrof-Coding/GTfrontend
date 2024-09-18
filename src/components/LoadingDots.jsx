export default function LoadingDots() {
  return (
    <div className="flex items-center space-x-1 text-2xl text-yellow-400">
      <span className="">Loading</span>
      <span className="dot animate-dot1">
        <strong>.</strong>{" "}
      </span>
      <span className="dot animate-dot2">
        <strong>.</strong>{" "}
      </span>
      <span className="dot animate-dot3">
        <strong>.</strong>{" "}
      </span>
      <span className="dot animate-dot4">
        <strong>.</strong>{" "}
      </span>
    </div>
  );
}
