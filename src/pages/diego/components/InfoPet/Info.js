import Pet from "./pet";
import Map from "./Map";
import Grid from "@material-ui/core/Grid";
import "./info.css";
export default function info({ pet, data }) {
  return (
    <div className="o-info">
      <div className="o-contain-info">
        <Grid item xs={5}>
          <Pet img={pet.img} data={pet.data} />
        </Grid>
        <Grid item xs={7}>
          <Map
            height="25rem"
            width="90%"
            className="o-map"
            point={[3.353928, -76.5235276]}
          />
        </Grid>
      </div>
    </div>
  );
}
