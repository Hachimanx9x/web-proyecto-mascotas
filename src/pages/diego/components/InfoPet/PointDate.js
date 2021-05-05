import AccessTimeIcon from "@material-ui/icons/AccessTime";
import RoomIcon from "@material-ui/icons/Room";
export default function PointDate({
  hour,
  address,
  appointment,
  className,
  sizeicon,
  coloricon,
}) {
  if (sizeicon === undefined) {
    sizeicon = "10rem";
  }
  if (coloricon === undefined) {
    coloricon = "#4E4E4E";
  }
  return (
    <div className={className}>
      {appointment ? (
        <div className="o-date">
          <div className="o-point-date">
            <div className="o-date-hours">
              <AccessTimeIcon
                style={{ fontSize: sizeicon, color: coloricon }}
              />
              <div className="o-hours">
                <h3>Horario</h3>
                <p> Todos los dias de {hour}</p>
              </div>
            </div>
            <div className="o-date-address">
              <RoomIcon style={{ fontSize: sizeicon, color: coloricon }} />
              <div className="o-address">
                <h3>Dirección</h3>
                <p>{address}</p>
              </div>
            </div>
          </div>
          <div className="o-min-card">
            <h3>Tu cita</h3>
            <p> {appointment.msj}</p>
            <h4>{appointment.yields}</h4>
            <div className="o-card-c">
              <button className="o-btn-s">Cacelar</button>
              <button className="o-btn-p">Imprimir</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="o-point-date">
          <div className="o-date-hours">
            <AccessTimeIcon style={{ fontSize: sizeicon, color: coloricon }} />
            <div className="o-hours">
              <h3>Horario</h3>
              <p> Todos los dias de {hour}</p>
            </div>
          </div>
          <div className="o-date-address">
            <RoomIcon style={{ fontSize: sizeicon, color: coloricon }} />
            <div className="o-address">
              <h3>Dirección</h3>
              <p>{address}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
