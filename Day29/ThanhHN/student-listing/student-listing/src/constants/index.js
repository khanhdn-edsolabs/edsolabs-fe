export const getAge = (dateString) => {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const LoadMore = (countStudents, listStudents) => {
  const newListStudent = [];
  for (let i = 0; i < countStudents; i++) {
    newListStudent.push(listStudents[i]);
  }
  return newListStudent;
};

export const groupListStudent = (listStudent) => {
  const newArr = [];
  const dem = Math.ceil(listStudent.length/5);

  for (let i = 0; i < dem; i++) {
    const subArr = [];
    if (subArr.length < 5) {
      listStudent.forEach((student, index) => {
        if (
          subArr.every((item) => item.id !== student.id && item.rank !== student.rank)
        ) {
          subArr.push(student);
          listStudent.splice(index, 1, {});
        }
      });
    }
    
    newArr.push(subArr);
  }

  return newArr.map((item) => item.filter((subItem) => Object.keys(subItem).length > 0));
};
