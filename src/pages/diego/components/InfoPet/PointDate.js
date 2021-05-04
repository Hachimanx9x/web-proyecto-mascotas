export default function PointDate({ hour, address, appointment, className }) {
  return (
    <div className={className}>
      {appointment ? (
        <div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
