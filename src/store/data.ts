import { atom } from "nanostores";
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

// function

export function addStudentStatus(value: status) {
  _studentStatus.set(value);
}
export function setDetailsHid(key, value) {
  _detailsHid.set({ ..._detailsHid.get(), [key]: value });
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
    if (status === "迟到") {
      _studentStatus.set({
        ...studentStatus,
        late: late + 1,
      });
    } else if (status === "早退") {
      _studentStatus.set({
        ...studentStatus,
        earlyLeave: earlyLeave + 1,
      });
    } else if (status === "请假") {
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
