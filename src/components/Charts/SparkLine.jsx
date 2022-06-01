import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      LineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      type={type}
      dataSource={data}
      xName="xVal"
      yName="yVal"
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-undef
        // eslint-disable-next-line no-template-curly-in-string
        format: "${xVal} : data ${yVal}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
