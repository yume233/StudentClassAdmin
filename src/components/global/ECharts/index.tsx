import React, {useEffect, useRef} from "react";
import {useStore} from "@nanostores/react";
import {_chartTheme, _studentStatus} from "store/data";
import styled from "styled-components";
import * as echarts from "echarts";

export default function (props: any) {
  const {style} = props;
  const pieNode = useRef<HTMLElement>() as any;
  const columnNode = useRef<HTMLElement>() as any;
  const status = useStore(_studentStatus);
  const theme = useStore(_chartTheme);
  useEffect(() => {
    const DOM = pieNode.current;
    echarts.registerTheme("macarons", theme);
    const chart = echarts.init(DOM, "macarons");
    chart.setOption({
      title: {
        text: "出勤比例",
        left: "center",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          type: "pie",
          data: [
            {value: status.present, name: "实到"},
            {
              value: status.late,
              name: "迟到",
            },
            {
              value: status.earlyLeave,
              name: "早退",
            },
            {
              value: status.leave,
              name: "请假",
            },
          ],
        },
      ],

      tooltip: {
        trigger: "item",
      },
    });
  }, [status]);
  useEffect(() => {
    const DOM = columnNode.current;
    echarts.registerTheme("macarons", theme);
    const chart = echarts.init(DOM, "macarons");
    chart.setOption({
      title: {
        text: "出勤详情",
        left: "center",
      },
      xAxis: {},
      yAxis: {data: ["实到", "迟到", "早退", "请假"]},
      series: [
        {
          type: "bar",
          data: [status.present, status.late, status.earlyLeave, status.leave],
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    });
  }, [status]);

  return (
      <Main style={style}>
        <div ref={pieNode}></div>
        <div ref={columnNode}></div>
      </Main>
  );
}
const Main = styled.div`
  backdrop-filter: blur(6px);
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  @keyframes topIn {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  animation: topIn 0.5s ease-in-out;

  > div {
    height: 100%;
    width: 50%;
  }
`;
