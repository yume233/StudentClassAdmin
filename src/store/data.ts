import {atom} from "nanostores";

interface status {
  late: number;
  earlyLeave: number;
  leave: number;
  absent: number;
  present: number;
}

// variable
export const _student = atom<string[]>([]);
export const _unitStyleSw = atom<boolean>(false);
export const _studentStatus = atom<status>({
  late: 0,
  earlyLeave: 0,
  leave: 0,
  absent: 0,
  present: 0,
});
export const _detailsHid = atom({}) as any;
export const _delHide = atom<boolean>(false);
export const _editHide = atom<boolean>(false);
export const _editValue = atom({}) as any;
export const _postData = atom({}) as any;
export const _newHide = atom<boolean>(false);
export const _chartTheme = atom({
  color: [
    "#2ec7c9",
    "#b6a2de",
    "#5ab1ef",
    "#ffb980",
    "#d87a80",
    "#8d98b3",
    "#e5cf0d",
    "#97b552",
    "#95706d",
    "#dc69aa",
    "#07a2a4",
    "#9a7fd1",
    "#588dd5",
    "#f5994e",
    "#c05050",
    "#59678c",
    "#c9ab00",
    "#7eb00a",
    "#6f5553",
    "#c14089",
  ],
  backgroundColor: "rgba(0,0,0,0)",
  textStyle: {},
  title: {
    textStyle: {
      color: "#008acd",
    },
    subtextStyle: {
      color: "#aaaaaa",
    },
  },
  line: {
    itemStyle: {
      borderWidth: 1,
    },
    lineStyle: {
      width: 2,
    },
    symbolSize: 3,
    symbol: "emptyCircle",
    smooth: true,
  },
  radar: {
    itemStyle: {
      borderWidth: 1,
    },
    lineStyle: {
      width: 2,
    },
    symbolSize: 3,
    symbol: "emptyCircle",
    smooth: true,
  },
  bar: {
    itemStyle: {
      barBorderWidth: 0,
      barBorderColor: "#ccc",
    },
  },
  pie: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  scatter: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  boxplot: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  parallel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  sankey: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  funnel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  gauge: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  candlestick: {
    itemStyle: {
      color: "#d87a80",
      color0: "#2ec7c9",
      borderColor: "#d87a80",
      borderColor0: "#2ec7c9",
      borderWidth: 1,
    },
  },
  graph: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
    lineStyle: {
      width: 1,
      color: "#aaa",
    },
    symbolSize: 3,
    symbol: "emptyCircle",
    smooth: true,
    color: [
      "#2ec7c9",
      "#b6a2de",
      "#5ab1ef",
      "#ffb980",
      "#d87a80",
      "#8d98b3",
      "#e5cf0d",
      "#97b552",
      "#95706d",
      "#dc69aa",
      "#07a2a4",
      "#9a7fd1",
      "#588dd5",
      "#f5994e",
      "#c05050",
      "#59678c",
      "#c9ab00",
      "#7eb00a",
      "#6f5553",
      "#c14089",
    ],
    label: {
      color: "#eee",
    },
  },
  map: {
    itemStyle: {
      areaColor: "#dddddd",
      borderColor: "#eeeeee",
      borderWidth: 0.5,
    },
    label: {
      color: "#d87a80",
    },
    emphasis: {
      itemStyle: {
        areaColor: "rgba(254,153,78,1)",
        borderColor: "#444",
        borderWidth: 1,
      },
      label: {
        color: "rgb(100,0,0)",
      },
    },
  },
  geo: {
    itemStyle: {
      areaColor: "#dddddd",
      borderColor: "#eeeeee",
      borderWidth: 0.5,
    },
    label: {
      color: "#d87a80",
    },
    emphasis: {
      itemStyle: {
        areaColor: "rgba(254,153,78,1)",
        borderColor: "#444",
        borderWidth: 1,
      },
      label: {
        color: "rgb(100,0,0)",
      },
    },
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#008acd",
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#333",
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ["#eee"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#008acd",
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#333",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eee"],
      },
    },
    splitArea: {
      show: true,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],
      },
    },
  },
  logAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#008acd",
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#333",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eee"],
      },
    },
    splitArea: {
      show: true,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],
      },
    },
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#008acd",
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#333",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eee"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],
      },
    },
  },
  toolbox: {
    iconStyle: {
      borderColor: "#2ec7c9",
    },
    emphasis: {
      iconStyle: {
        borderColor: "#18a4a6",
      },
    },
  },
  legend: {
    textStyle: {
      color: "#333333",
    },
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: "#008acd",
        width: "1",
      },
      crossStyle: {
        color: "#008acd",
        width: "1",
      },
    },
  },
  timeline: {
    lineStyle: {
      color: "#008acd",
      width: 1,
    },
    itemStyle: {
      color: "#008acd",
      borderWidth: 1,
    },
    controlStyle: {
      color: "#008acd",
      borderColor: "#008acd",
      borderWidth: 0.5,
    },
    checkpointStyle: {
      color: "#2ec7c9",
      borderColor: "#2ec7c9",
    },
    label: {
      color: "#008acd",
    },
    emphasis: {
      itemStyle: {
        color: "#a9334c",
      },
      controlStyle: {
        color: "#008acd",
        borderColor: "#008acd",
        borderWidth: 0.5,
      },
      label: {
        color: "#008acd",
      },
    },
  },
  visualMap: {
    color: ["#5ab1ef", "#e0ffff"],
  },
  dataZoom: {
    backgroundColor: "rgba(47,69,84,0)",
    dataBackgroundColor: "#efefff",
    fillerColor: "rgba(182,162,222,0.2)",
    handleColor: "#008acd",
    handleSize: "100%",
    textStyle: {
      color: "#333333",
    },
  },
  markPoint: {
    label: {
      color: "#eee",
    },
    emphasis: {
      label: {
        color: "#eee",
      },
    },
  },
});
// function
export function addPostData(key, value) {
  _postData.set({..._postData.get(), [key]: value});
}

export function setDelHide() {
  console.log(_delHide.get());
  _delHide.set(!_delHide.get());
}

export function setEditHide() {
  _editHide.set(!_editHide.get());
}

export function setNewHide() {
  _newHide.set(!_newHide.get());
}

export function addEditValue(key: any, value: any) {
  _editValue.set({..._editValue.get(), [key]: value});
}

export function addStudentStatus(value: status) {
  _studentStatus.set(value);
}

export function setDetailsHid(key, value) {
  _detailsHid.set({..._detailsHid.get(), [key]: value});
}

//处理网络获取的数据
export function addStudent(value: []) {
  _student.set(value);
  _studentStatus.set({
    late: 0,
    earlyLeave: 0,
    leave: 0,
    absent: 0,
    present: 0,
  });
  value.forEach((item: any) => {
    const studentStatus = _studentStatus.get();
    const late = studentStatus.late;
    const earlyLeave = studentStatus.earlyLeave;
    const leave = studentStatus.leave;
    const absent = studentStatus.absent;
    const status = item.status;
    if (status === 1) {
      _studentStatus.set({
        ...studentStatus,
        late: late + 1,
      });
    } else if (status === 2) {
      _studentStatus.set({
        ...studentStatus,
        earlyLeave: earlyLeave + 1,
      });
    } else if (status === 3) {
      _studentStatus.set({
        ...studentStatus,
        leave: leave + 1,
      });
    }
  });
  _studentStatus.set({
    ..._studentStatus.get(),
    absent:
      _studentStatus.get().absent +
      _studentStatus.get().leave +
      _studentStatus.get().earlyLeave,
  });
  _studentStatus.set({
    ..._studentStatus.get(),
    present: _student.get().length - _studentStatus.get().absent,
  });
}
export function unitStyleSw(value: boolean) {
  _unitStyleSw.set(value);
}
