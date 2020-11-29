export const dayNowComplete = (date) => {
  switch (date.getDay()) {
    case 0:
      return `Domingo, ${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    case 1:
      return `Lunes,${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    case 2:
      return `Martes,${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    case 3:
      return `Miercoles, ${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    case 4:
      return `Jueves, ${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    case 5:
      return `Viernes, ${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    case 6:
      return `Sabado, ${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    default:
      return "Fecha invalida";
  }
};

export const dayNowSimple = (date) => {
  switch (date.getDay()) {
    case 0:
      return `Domingo`;
    case 1:
      return `Lunes`;
    case 2:
      return `Martes`;
    case 3:
      return `Miercoles`;
    case 4:
      return `Jueves`;
    case 5:
      return `Viernes`;
    case 6:
      return `Sabado`;
    default:
      return "Fecha invalida";
  }
};

export const dayHours = (date) => {
  return `${date.getHours()}:${date.getMinutes()}0`;
};

export const filterDate = (date, init, finish) => {
  return date.slice(init, finish);
};
