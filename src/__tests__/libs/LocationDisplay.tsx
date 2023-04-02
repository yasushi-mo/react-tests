import { useLocation } from "react-router-dom";

export const LOCATION_DISPLAY = "location-display";

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid={LOCATION_DISPLAY}>{location.pathname}</div>;
};
