export function Bricks({ className = "" }) {
  return (
    <div className={`brick-cluster ${className}`} aria-hidden="true">
      <span className="brick brick--red" />
      <span className="brick brick--blue" />
      <span className="brick brick--yellow" />
    </div>
  );
}
