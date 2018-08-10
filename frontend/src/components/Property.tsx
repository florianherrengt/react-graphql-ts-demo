import * as React from "react";
import {
  faBed,
  faMoneyBill,
  faPoundSign
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Properties_properties } from "api-types/Properties";

const styles = createStyles({
  card: {
    display: "flex"
  },
  cover: {
    width: 150
  },
  details: {
    flex: "1"
  },
  keyword: {
    margin: "0px 5px"
  }
});

export interface PropretyProps extends WithStyles<typeof styles> {
  property: Properties_properties;
  actions: {
    onLinkClicked(link: string): void;
    onSavedCliked(id: string): void;
    onNotInterestedCliked(id: string): void;
  };
}

const Property = withStyles(styles)((props: PropretyProps) => {
  const onLinkClicked = () => props.actions.onLinkClicked(props.property.link);
  const onSavedCliked = () => props.actions.onSavedCliked(props.property.id);
  const onNotInterestedCliked = () =>
    props.actions.onNotInterestedCliked(props.property.id);

  if (props.property.notInterested) {
    return <div />;
  }

  return (
    <div>
      <div>
        <Card className={props.classes.card}>
          <CardMedia
            className={props.classes.cover}
            image={props.property.image}
            title="Contemplative Reptile"
          />
          <div className={props.classes.details}>
            <CardContent>
              <Typography gutterBottom={true} variant="headline" component="h2">
                {props.property.title} <FontAwesomeIcon icon={faPoundSign} />{" "}
                {props.property.price.toLocaleString()}{" "}
                <FontAwesomeIcon icon={faBed} /> {props.property.bed}{" "}
                <FontAwesomeIcon icon={faMoneyBill} /> {props.property.roi}%
              </Typography>
              <Typography component="div">
                {props.property.keywords.map((k, i) => (
                  <Chip className={props.classes.keyword} key={i} label={k} />
                ))}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                variant={props.property.saved ? "contained" : "flat"}
                onClick={onSavedCliked}
              >
                {props.property.saved ? "Saved" : "Save"}
              </Button>
              <Button size="small" color="primary" onClick={onLinkClicked}>
                Link
              </Button>
              <Button
                size="small"
                color="secondary"
                onClick={onNotInterestedCliked}
              >
                Not interested
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
});

// We explicitly export the name of the component
// so it shows up in autocomplete when you import it
export { Property };
