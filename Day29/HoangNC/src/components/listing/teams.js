import { useStudentContext } from "../common/studentContext";
import { useStyles } from "./style";

export default function Teams() {
  const { student } = useStudentContext();
  const classes = useStyles();
  const newArr = [...student]; // clone lại mảng cũ

  const map1 = newArr.map((x) => x.rank); // lấy danh sách rank
  const rankArray = [...new Set(map1)]; // lấy danh sách rank unique
  // group
  const groupe = rankArray.map((rank, index) => {
    let a = student.filter((e) => e.rank === rank);
    return a;
  });

  return (
    <div className={classes.teams}>
      {groupe.map((e, index) => {
        return (
          <div className={classes.group}>
            <div key={index}>Nhóm {index + 1}</div>
            <div className={classes.groupInfo}>
              <div className={classes.head}>
                <div>#</div>
                <div>Fullname</div>
                <div>Rank</div>
              </div>
              {e.map((stu, i, arr) => {
                return (
                  <>
                    <div className={classes.teamsItem} key={i}>
                      <div>{i + 1}</div>
                      <div>{stu.full_name}</div>
                      <div>{stu.rank}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
