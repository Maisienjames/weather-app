import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 11111111,
    temperature: {
      max: 22,
      min: 12,
    },
    humidity: 80,
    wind: {
      speed: 10,
      direction: "S",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    render(<ForecastDetails forecast={validProps} />);

    expect(screen.getByText(/thu jan 01 1970/i)).toHaveClass(
      "forecast-details__date"
    );
    expect(screen.getByText(/80/)).toHaveClass("forecast-details__humidity");
    expect(screen.getByText(/12°C/)).toHaveClass(
      "forecast-details__minTemperature"
    );
    expect(screen.getByText(/22°C/)).toHaveClass(
      "forecast-details__maxTemperature"
    );
    expect(screen.getByText(/10/)).toHaveClass("forecast-details__wind_speed");
  });
});
