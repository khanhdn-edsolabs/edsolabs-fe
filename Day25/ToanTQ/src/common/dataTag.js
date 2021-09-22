export const getIconState = setChekLogin => {
  const data = {
    timer: {
      title: 'Timer',
      link: 'timer'
    },
    report: {
      title: 'Report',
      link: 'report'
    },
    logout: {
      title: 'Logout',
      link: 'login',
      func: function () {
        localStorage.clear();
        setChekLogin(false);
      }
    }
  };
  return data;
};
